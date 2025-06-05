import { Hono } from 'hono'

const user = new Hono()

user.post("/signup", (c) => {
    return c.text('signup route')
} )

user.post("/signin", (c) => {
    return c.text('signin route')
} )


export default user