"use strict";
// write a function to create a users table in the database
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:rcx45jXiYUpn@ep-cool-smoke-a1gdjyft.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = yield client.query(`
        CREATE TABLE Users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    });
}
function createAddressTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = yield client.query(`
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
    `);
    });
}
// createUsersTable()
// createAddressTable()
function insertData(user_id, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://neondb_owner:rcx45jXiYUpn@ep-cool-smoke-a1gdjyft.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
        });
        try {
            yield client.connect();
            const insertQuery = "INSERT INTO Address(user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)";
            const values = [user_id, city, country, street, pincode];
            const res = yield client.query(insertQuery, values);
            console.log("Insertion success", res);
        }
        catch (error) {
            console.error("Error during insertion: ", error);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
// insertData(1, "New York City", "USA", "Times Square", "10108")
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://neondb_owner:rcx45jXiYUpn@ep-cool-smoke-a1gdjyft.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
        });
        try {
            yield client.connect();
            const query = "SELECT * FROM Users WHERE email = $1;";
            const values = [email];
            const result = yield client.query(query, values);
            if (result.rows.length > 0) {
                console.log("User found!", result.rows[0]);
                return result.rows[0];
            }
            else {
                console.log("No user found with the given email.");
                return null;
            }
        }
        catch (error) {
            console.log("Error while fetching user: ", error);
            throw error;
        }
        finally {
            yield client.end();
        }
    });
}
getUser("user1@google.com").catch(console.error);
