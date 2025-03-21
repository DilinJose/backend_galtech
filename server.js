const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const server = jsonServer.create();
// const router = jsonServer.router(path.join(__dirname, "db", "db.json"));
const router = jsonServer.router(path.join(__dirname, "db.json")); // ✅ Now it's in root
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});