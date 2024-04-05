module.exports = (app) => {
  const user = require("../controllers/user.controller");

  var router = require("express").Router();

  router.post("/", user.create);

  router.get("/allusers", user.findAllUsers);

  router.get("/user/:id", user.findOneUser);

  router.put("/:id", user.updateUser);

  router.delete("/delete/:id", user.deleteUser);

  router.delete("/delete", user.deleteAllUsers);

  app.use("/api/users", router);
};
