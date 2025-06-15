import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { createBlogInput, updateBlogInput } from '@ram18/medium-blog'
import { Hono } from 'hono'
import { verify } from 'hono/jwt'

const blog = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables: {
        userId: any
    }
}>()

blog.use('/*', async (c, next) => {
    const jwt = c.req.header('Authorization') || ""

    if(!jwt) {
        c.status(403)
        return c.json({ error: 'Unauthorized' })
    }

    try {
        const decoded = await verify(jwt, c.env.JWT_SECRET)

        if(!decoded) {
            c.status(403)
            return c.json({ error: 'You are not logged in' })
        }

        c.set('userId', decoded.id)
        // console.log("control reached");
        await next()
    } catch (error) {
        c.status(403)
        return c.json({ error: 'You are not logged in' })
    }
    
})

blog.post("/", async (c) => {    
    const body = await c.req.json()
    const userId = c.get('userId')

    const {success} = createBlogInput.safeParse(body)
    
        if(!success) {
            c.status(411)
            return c.json({
                message: "Incorrect Inputs!"
            })
        }

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate())

    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorid: userId
        }
    })

    return c.json({
        id: post.id
    })
})

blog.put("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const userId = c.get('userId')

    const {success} = updateBlogInput.safeParse(body)
    
    if(!success) {
        c.status(411)
        return c.json({
            message: "Incorrect Inputs!"
        })
    }

    const post = await prisma.post.update({
        where: {
            id: body.id,
            authorid: userId
        },
        data: {
            title: body.title,
            content: body.content
        }
    })

    return c.json({
        id: post.id
    })
})

// Todo: Add pagination
blog.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate())

    const posts = await prisma.post.findMany({
        select: {
            title: true,
            content: true,
            id: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    })

    return c.json({
        posts
    })
})

blog.get("/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate())

    const id = c.req.param('id')
 
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: id
            },
            select: {
                title: true,
                content: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
    
        return c.json({
            post
        })
    } catch (error) {
        c.status(411)
        return c.json({
            message: "Error while fetching"
        })
    }
})

export default blog
