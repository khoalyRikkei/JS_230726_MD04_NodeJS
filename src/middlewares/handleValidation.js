const { ValidationException } = require("../expeiptions/index.js");

// validate user register
const validationFormRegister = (req, res, next) => {
  const re = /\S+@\S+\.\S+/;
  let error = false;
  const errors = {};
  const model = {
    user_name: req.body.user_name,
    email: req.body.email,
    password: req.body.password,
    confirm_password: req.body.confirm_password,
  };

  if (!model.user_name) {
    error = true;
    errors.userNameMessage = "Please enter user_name";
  } else if (model.user_name.length > 100) {
    error = true;
    errors.userNameMessage = "user_name must not be longer than 100 characters";
  }

  if (!re.test(model.email)) {
    error = true;
    errors.emailMessage = "Please enter a valid email";
  } else if (model.email.length > 100) {
    error = true;
    errors.emailMessage = "Email must not be longer than 100 characters";
  }

  if (!model.password) {
    error = true;
    errors.passwordMessage = "Please enter password";
  } else if (model.password.length < 8 || model.password.length > 50) {
    error = true;
    errors.passwordMessage =
      "Password must be no shorter than 8 characters and no longer than 50 characters";
  }

  if (model.confirm_password !== model.password) {
    error = true;
    errors.passwordMessage = "Confirm Password does not match Password";
  }
  if (error) {
    const errorValidation = new ValidationException("Validation failed", 400, errors);
    next(errorValidation);
  } else {
    next();
  }
};

//validate login
const validationFormLogin = (req, res, next) => {
  const model = {
    email: req.body.email,
    password: req.body.password,
  };
  const re = /\S+@\S+\.\S+/;
  let error = false;
  const errors = {};
  if (!re.test(model.email)) {
    error = true;
    errors.emailMessage = "Please enter a valid email";
  } else if (model.email.length > 100) {
    error = true;
    errors.emailMessage = "Email must not be longer than 100 characters";
  }

  if (model.password.length < 8 || model.password.length > 20) {
    error = true;
    errors.passwordMessage = "Password cannot be shorter than 8 and longer than 20 characters";
  }

  if (error) {
    const errorValidation = new ValidationException("Validation failed", 400, errors);
    next(errorValidation);
  } else {
    next();
  }
};

const validateFormProduct = (req, res, next) => {
  const model = {
    sku: req.body.sku,
    product_name: req.body.product_name,
    price: req.body.price,
    quantity_stock: req.body.quantity_stock,
    description: req.body.description,
    category_id: req.body.category_id,
  };
  let error = false;
  const errors = {};

  if (!model.sku) {
    error = true;
    errors.skuMessage = "Please enter a sku";
  }
  if (!model.product_name) {
    error = true;
    errors.productNameMessage = "Please enter a product name";
  }
  if (!model.price) {
    error = true;
    errors.priceMessage = "Please enter a price";
  }
  if (!model.quantity_stock) {
    error = true;
    errors.quantityStockMessage = "Please enter a quantity stock";
  }
  if (!model.description) {
    error = true;
    errors.descriptionMessage = "Please enter a description";
  }

  if (!model.category_id) {
    error = true;
    errors.categoryIdMessage = "Please enter a category ID";
  }

  if (error) {
    const errorValidation = new ValidationException("Validation failed", 400, errors);
    next(errorValidation);
  } else {
    next();
  }
};
module.exports = { validationFormRegister, validationFormLogin, validateFormProduct };
