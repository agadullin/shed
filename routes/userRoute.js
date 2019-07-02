const express = require("express");
const userController = require("../control/userControl.js");
const userRouter = express.Router();

userRouter.use("/postuser", userController.postUser);
userRouter.use("/create", userController.addUser);
userRouter.use("/", userController.getUsers);

module.exports = userRouter;