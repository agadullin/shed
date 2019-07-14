const User = require("../models/customer.js"),
      database = require("../mysql/connection.js");

exports.addUser = function (request, response){
    response.render("create.hbs");
};
exports.getUsers = function(request, response){
    response.render("users.hbs", {
        users: User.getAll()
    });
};
exports.postUser= function(request, response){
    const login = request.body.login;
    const password = request.body.password;
    var arr = [login, password];
    database.insert(arr);
    response.redirect("/users");
};