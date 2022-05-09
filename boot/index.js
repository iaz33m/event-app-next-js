const session = require("express-session");
const express = require("express");
require("dotenv").config();
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const routes = require("../routes");

module.exports = (app, nextApp) => {
  app.use(express.json());

  app.use(
    session({
      key: "ryoulive-cookies",
      secret: "t67UJHBVFGY&T*U(IOJBHVGFY^T5r",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 3600
      }
    })
  );

  routes(app, nextApp);
};
