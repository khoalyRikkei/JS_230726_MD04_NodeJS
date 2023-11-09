
import Joi from 'joi';
import { MSG_VALIDATION } from '../messages/index.js';
import { ValidationException } from '../expeiptions/index.js';

export const validateCreateCategory = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().max(20).required().error(() => MSG_VALIDATION.InvalidName),
    description: Joi.string().max(2000).error(() => MSG_VALIDATION.InvalidDescription),
    status: Joi.boolean().default(true),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    next(new ValidationException(error.message));
  } else {
    next();
  }
};

export const validateEditCategory = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().max(20).required().error(() => MSG_VALIDATION.InvalidName),
    description: Joi.string().max(2000).error(() => MSG_VALIDATION.InvalidDescription),
    status: Joi.boolean().default(true),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    next(new ValidationException(error.message));
  } else {
    next();
  }
};


