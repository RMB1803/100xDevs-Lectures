// write a function to create a users table in the database

import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://neondb_owner:rcx45jXiYUpn@ep-cool-smoke-a1gdjyft.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
})

async function createUsersTable() {
    await client.connect()
    const query = await client.query(`
        CREATE TABLE Users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
}

async function createAddressTable() {
    await client.connect()
    const query = await client.query(`
        CREATE TABLE Address(
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(50) NOT NULL,
        country VARCHAR(255) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES Users(id)
        );
    `)
}

// createUsersTable()
// createAddressTable()

async function insertData(user_id: number, city: string, country: string, street: string, pincode: string) {
    const client = new Client({
        connectionString: "postgresql://neondb_owner:rcx45jXiYUpn@ep-cool-smoke-a1gdjyft.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
    })

    try {
        await client.connect()
        const insertQuery = "INSERT INTO Address(user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)"
        const values = [user_id, city, country, street, pincode]
        const res = await client.query(insertQuery, values)
        console.log("Insertion success", res)
    } catch (error) {
        console.error("Error during insertion: ", error)
    } finally{
        await client.end() // Close the client connection
    } 
}

// insertData(1, "New York City", "USA", "Times Square", "10108")

async function getUser(email: string) {
    const client = new Client({
        connectionString: "postgresql://neondb_owner:rcx45jXiYUpn@ep-cool-smoke-a1gdjyft.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
    })

    try {
        await client.connect()
        const query = "SELECT * FROM Users WHERE email = $1;"
        const values = [email]

        const result = await client.query(query, values)

        if(result.rows.length > 0) {
            console.log("User found!", result.rows[0]);
            return result.rows[0]
        } else {
            console.log("No user found with the given email.");
            return null
        }
    } catch (error) {
        console.log("Error while fetching user: ", error);
        throw error
    } finally {
        await client.end()
    }
}

getUser("user1@google.com").catch(console.error)