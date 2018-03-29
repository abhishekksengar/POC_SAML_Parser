const ParserController = require('./controller/parserController');

class Wiring {

    constructor () {
    }

    /**
     * Controller to parse SAML token to JSON
     * @returns {ParserController}
     */
    parserController() {
        return new ParserController();
    }
}

module.exports = Wiring;
