const { ValidationException } = require("../expeiptions/index.js");

// validate user register
const validationFormRegister = (req, res, next) => {
  const re = /\S+@\S+\.\S+/;
  const regexPhoneNumber = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
  let error = false;
  const errors = {};
  const model = {
    user_name: req.body.user_name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    address: req.body.address,
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

  if (!regexPhoneNumber.test(model.phone)) {
    error = true;
    errors.phoneMessage = "Enter Vietnamese phone number";
  }

  if (!model.address) {
    error = true;
    errors.addressMessage = "Please enter password Address";
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
  if (error) {
    const errorValidation = new ValidationException("Validation failed", 400, errors);
    next(errorValidation);
  } else {
    next();
  }
};

module.exports = { validationFormRegister, validationFormLogin };
