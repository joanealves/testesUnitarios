class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    getName = () => this.name;
    getPasswoerd = () => this.password;

    setName = (name) => this.name = name;
    setPassword = (password) => this.password = password;

    auth(name, password) {
        if (name === this.name && password === this.password) {
            console.log('Authenticaded');
            return true;
        } else {
            console.log('Login Invalid');
            return false;
        }
    }
}

module.exports = User;