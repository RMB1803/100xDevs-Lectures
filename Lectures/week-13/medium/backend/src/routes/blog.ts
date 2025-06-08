import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
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
    const jwt = c.req.header('Authorization')

    if(!jwt) {
        c.status(403)
        return c.json({ error: 'Unauthorized' })
    }

    const token = jwt.split(' ')[1]
    const decoded =  await verify(token, c.env.JWT_SECRET)

    if(!decoded) {
        c.status(403)
        return c.json({ error: 'Unauthorized' })
    }

    c.set('userId', decoded.id)
    await next()
})

blog.post("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const userId = c.get('userId')

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

    const post = await prisma.post.update({
        where: {
            id: body.id
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

blog.get("/bulk", (c) => {
    return c.text("Hello Hono!")
})

blog.get("/:id", async (c) => {
    const id = c.req.param('id')

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()

    const post = await prisma.post.findFirst({
        where: {
            id: id
        },
    })

    return c.json({
        post
    })

	return c.text('get blog route')
})

export default blog
