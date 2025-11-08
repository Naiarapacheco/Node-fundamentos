const { Router } = require("express");
const routes = Router();
const verifyToken = require("./middlewares/AuthMiddleware");
const {
  createUser,
  getUsers,
  getUserId,
  deleteUser,
  updateUser,
  welcome,
} = require("./controllers/users");

routes.route("/health", welcome);
routes.get("/users", getUsers);
routes.get("/users/:id", getUserId);

routes.use(verifyToken);
routes.post("/users", createUser);
routes.delete("/users/:id", deleteUser);
routes.put("/users/:id", updateUser);

module.exports = routes;
