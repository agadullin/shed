const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require("fs");

const authRouter = require("./routes/authRoutes.js");
const mainRouter = require("./routes/mainRoutes.js");
const userRouter = require("./routes/userRoute.js");

app.use("/auth", authRouter);
app.use("/main", mainRouter);
app.use("/user", userRouter);

app.get("/about", function(request, response){
    response.render("./views/main.hbs");
})

app.get("/", function(request,response){
    response.send("index");
})

app.use(function (req, res) {
    res.status(404).send("Not found");
});
app.listen(3000);