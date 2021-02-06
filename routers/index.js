"use strict";
const Router = require("express").Router();
const Controller = require("../controller");
const joivalid = require("../helper");
const comman = require("../util");

Router.get(
  "/signin",
  comman.JoiValidator.JoiValidator(joivalid.joivalid.userlogin),
  Controller.Usercontrol.login
);
Router.get("/signup", Controller.Usercontrol.sigup);

module.exports = Router;
