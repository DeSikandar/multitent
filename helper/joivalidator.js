const Joi = require("joi");

module.exports = {
  userlogin: {
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  },
};
