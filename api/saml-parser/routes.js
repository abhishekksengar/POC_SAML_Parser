"use strict";

const Wiring = require('./wiring');

const getRouter = () => {
    const router = require('express').Router();
    const wiring = new Wiring();

    router.post('/oneLogin', (req, res) => {
        wiring.parserController().handle(req, res);
    });
    return router;
};

module.exports = getRouter;
