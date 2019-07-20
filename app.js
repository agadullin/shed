const express = require('express'),
      bodyParser = require('body-parser'),
      authRouter = require("./routes/authRoutes.js"),
      mainRouter = require("./routes/mainRoutes.js"),
      userRouter = require("./routes/userRoute.js"),
      database = require("./mysql/connection.js"),
      app = express();

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({extended:false}));

app.use("/auth", authRouter);
app.use("/main", mainRouter);
app.use("/users", userRouter);

app.get("/about", function(request, response){
    response.render("main.hbs");
});

app.get("/", function(request,response){
    response.send("index");
});

app.use(function (req, res) {
    res.status(404).send("Not found")
});
app.listen(3000);