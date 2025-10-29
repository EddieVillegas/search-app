import type { FC } from "hono/jsx"

const SEARCH_APP = "Search Spp"

const Layout:FC = ({ children }) => (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{SEARCH_APP}</title>
            <link rel="stylesheet" href="/public/styles.css" />
            <script
                crossOrigin="anonymous"
                src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.7/dist/htmx.min.js" 
                integrity="sha384-ZBXiYtYQ6hJ2Y0ZNoYuI+Nq5MqWBr+chMrS/RkXpNzQCApHEhOt2aY8EJgqwHLkJ" 
            >
            </script>
        </head>
        <body>
            <main className="bg-neutral-900 h-screen p-5" x-data="{ open: false}">
                {children}
            </main>
        </body>
    </html>
)

export default Layout