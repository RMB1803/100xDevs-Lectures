import { Hono } from 'hono'
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge';
import { signinInput, signupInput } from '@ram18/medium-blog';

const user = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }   
}>()

user.post("/signup", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()

    const {success} = signupInput.safeParse(body)

    if(!success) {
        c.status(411)
        return c.json({
            message: "Incorrect Inputs!"
        })
    }

    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                name: body?.name
            }
        })

        const jwt = await sign({id: user.id}, c.env.JWT_SECRET)
        return c.json({jwt})
    } catch (e) {
        c.status(403)
        return c.json({error: "Error while signing up"})
    }
})

user.post("/signin", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()

    const {success} = signinInput.safeParse(body)
    if(!success) {
        c.status(411)
        return c.json({
            message: "Incorrect Inputs!"
        })
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password
            }
        })

        if(!user) {
            c.status(403);
		    return c.json({ error: "user not found" });
        }

        const jwt = await sign({id: user.id}, c.env.JWT_SECRET)
        return c.json({jwt})
    } catch (e) {
        c.status(403)
        return c.json({error: "Error while signing in!"})
    }

} )

export default user