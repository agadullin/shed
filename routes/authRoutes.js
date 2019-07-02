const express = require("express");
const authControl = require("../control/auth.js");
const authRouter = express.Router();

authRouter.get("/singIn", authControl.singIn);
authRouter.get("/singUp", authControl.singUp);

module.exports = authRouter;
