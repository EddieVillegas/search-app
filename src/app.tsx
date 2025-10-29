import { Hono } from "hono"
import { csrf } from "hono/csrf"
import { serveStatic } from "hono/bun"

//routes
import seed from "./routes/seed"
import students from "./routes/students"

//views
import App from "./views/App"

const app = new Hono()

app.use(csrf())

app.use('/public/*', serveStatic({ root: './' }))

app.get('/', ({ html }) => html(<App/>))

app.route('/students', students)

app.route('/seed', seed)

export default app