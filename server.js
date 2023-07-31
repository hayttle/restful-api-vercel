// JSON Server module
const jsonServer = require("json-server")
const cors = require("cors")
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults()

server.use(cors())
server.use(middlewares)
// Add this before server.use(router)
server.use(
  // Add custom route here if needed
  jsonServer.rewriter({
    "/*": "/$1"
  })
)
server.use(router)
server.listen(3000, () => {
  console.log("JSON Server is running")
})

// Export the Server API
module.exports = server
