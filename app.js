const express = require('express'),
      bodyParser = require('body-parser'),
      authRouter = require("./routes/authRoutes.js"),
      mainRouter = require("./routes/mainRoutes.js"),
      userRouter = require("./routes/userRoute.js"),
      app = express();

app.use("/auth", authRouter);
app.use("/main", mainRouter);
app.use("/user", userRouter);

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