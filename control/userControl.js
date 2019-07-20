const database = require("../mysql/connection.js");

exports.addUser = function (request, response){
    response.render("create.hbs");
};

exports.getUsers = function(request, response){
    database.selectTabletest(response,'users.hbs');
};

exports.postUser= function(request, response){
    const login = request.body.login;
    const password = request.body.password;
    var arr = [login, password];
    database.insert(arr);
    response.redirect("/users");
};