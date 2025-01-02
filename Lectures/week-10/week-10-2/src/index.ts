import { PrismaClient } from "@prisma/client";
import { uptime } from "process";

const prisma = new PrismaClient()

async function InsertUser(username: string, password: string, firstname: string, lastname: string) {
    const user = await prisma.user.create({
        data: {
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname
        },
        select: {
            id: true,
            password: true
        }
    })

    console.log(user);
}

// InsertUser("harry@google.com", "1234567", "Harry", "Mason")

interface updateParams{
    email: string,
    firstname: string,
    lastname: string
}

async function UpdateUser(username: string, {email, firstname, lastname}: updateParams) {
    const result = await prisma.user.update({
        where: {
            username: username,
        },
        data: {
            username: email,
            firstname: firstname,
            lastname: lastname
        }
    })

    console.log(result);
}

UpdateUser("harry@google.com", {email: "ryan@google.com", firstname: "Ryan", lastname: "Mason"})

async function getUser(username: string) {
    const res = await prisma.user.findFirstOrThrow({
        select: {
            firstname: true,
            lastname: true
        },
        where: {
            username: username
        }
    })
    console.log(res); 
}

// getUser("robert@google.com")