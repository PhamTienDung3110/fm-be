const Joi = require('joi');

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6),
    role: Joi.string().valid('admin', 'user').required()
})

const loginSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).required()
  });
  
  module.exports = {
    registerSchema,
    loginSchema
  };