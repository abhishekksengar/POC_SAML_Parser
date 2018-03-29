const LoginController = require('./controller/loginController');
const LogOutController = require('./controller/logoutController');


class Wiring {

    constructor () {
    }

    loginController() {
        return new LoginController();
    }

    logoutController() {
        return new LogOutController();
    }

}

module.exports = Wiring;