"use strict";

const Wiring = require('./wiring');

const getRouter = () => {
    const router = require('express').Router();
    const wiring = new Wiring();

    router.get("/login", (req, res) => {
        wiring.loginController().handle(req, res);
    });

    router.get("/logout", (req, res) => {
       wiring.logoutController().handle(req, res);
    });
    return router;
};

module.exports = getRouter;
