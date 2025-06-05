import { Hono } from 'hono'

const blog = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables: {
        userid: string
    }
}>()

blog.use('/api/v1/blog/*', async (c, next) => {


    await next()
})

blog.post("/", (c) => {
    return c.text("Hello hono")
})

blog.put("/", (c) => {
    return c.text('signin route')
})

blog.get("/bulk", (c) => {
    return c.text("Hello Hono!")
})

blog.get("/:id", (c) => {
    const id = c.req.param('id')
	console.log(id);
	return c.text('get blog route')
})

export default blog
