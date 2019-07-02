const express = require("express");
const mainControl = require("../control/main.js");
const mainRouter = express.Router();

mainRouter.get("/shedule", mainControl.shedule);
mainRouter.get("/students", mainControl.students);

module.exports = mainRouter;

