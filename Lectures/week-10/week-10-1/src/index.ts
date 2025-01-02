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

// getUser("user1@google.com").catch(console.error)

// Write a function to enter both user and address details 
async function insertUserAndAddress(
    username: string, 
    email: string, 
    password: string, 
    city: string, 
    country: string, 
    street: string, 
    pincode: string
) {
    const client = new Client({
        connectionString: "postgresql://neondb_owner:rcx45jXiYUpn@ep-cool-smoke-a1gdjyft.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
    })

    try {
        await client.connect()

        await client.query("BEGIN")

        const userQuery = "INSERT INTO Users(username, email, password) VALUES ($1, $2, $3) RETURNING id;"
        const userValues = [username, email, password]
        const userRes = await client.query(userQuery, userValues)
        const userId = userRes.rows[0].id

        const addressQuery = "INSERT INTO Address(user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)"
        const addressValues = [userId, city, country, street, pincode]
        await client.query(addressQuery, addressValues)

        await client.query("COMMIT")

        console.log("User and Address added succesfully!");
    } catch (err) {
        await client.query("ROLLBACK")
        console.error('Error during transaction, rolled back.', err);
        throw err;
    } finally {
        await client.end(); // Close the client connection
    }
}

// insertUserAndAddress(
//     'hopkins', 
//     'hopkins@example.com', 
//     '12345678', 
//     'New York', 
//     'USA', 
//     '123 Broadway St', 
//     '10001'
// );

// Write a function to fetch both a users details and their address.
async function getUserandAddress(email: string) {
    const client = new Client({
        connectionString: "postgresql://neondb_owner:rcx45jXiYUpn@ep-cool-smoke-a1gdjyft.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
    })

    try {
        await client.connect()

        const query = `
            SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM Users u 
            JOIN Address a ON u.id = a.user_id
            WHERE email = $1;
        `
        const res = await client.query(query, [email])

        if(res.rows.length > 0) {
            console.log("User and address found!", res.rows[0]);
            return res.rows[0]
        } 
        else {
            console.log("No user with the above email found!");
            return null
        }
    } catch (err) {
        console.log("Error fetching user with the above email!", err);
        throw err
    } finally {
        await client.end()
    }
}

getUserandAddress("user1@google.com")