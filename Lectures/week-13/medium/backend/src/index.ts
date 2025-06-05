import { Hono } from 'hono'
import user from './routes/user'
import blog from './routes/blog'

// Create the main Hono app
const app = new Hono();

// app.post('/api/v1/signup', (c) => {
// 	return c.text('signup route')
// })

// app.post('/api/v1/signin', (c) => {
// 	return c.text('signin route')
// })

// app.get('/api/v1/blog/:id', (c) => {
// 	const id = c.req.param('id')
// 	console.log(id);
// 	return c.text('get blog route')
// })

// app.post('/api/v1/blog', (c) => {

// 	return c.text('signin route')
// })

// app.put('/api/v1/blog', (c) => {
// 	return c.text('signin route')
// })



app.route('/api/v1/user', user)
app.route('/api/v1/blog', blog)


export default app
