import app from "./app"

export default {
    port: process.env.PORT || 3000,
    idleTimeout: 100,
    fetch: app.fetch
}