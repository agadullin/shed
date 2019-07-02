const users = [];

module.exports = class User {

    construct(login, password) {
        this.login = login;
        this.password = password;
    }

    save () {
        users.push(this);
    }

    static getAll () {
        return users;
    }
}