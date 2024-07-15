const Joi = require('joi');

export default {
  login: {
    body: {
      email: Joi.string().email().trim().required(),
      password: Joi.string().min(6).max(25).required()
    }
  }
};