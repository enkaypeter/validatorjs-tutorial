const Validator = require('validatorjs');

// return split field name before returning them in error message
// Validator.setAttributeFormatter(attribute => attribute.replace(/([A-Z])/g, ' $1')
//     .toLocaleLowerCase());

const validator = (body, rules, customMessages, callback) => {
    const validation = new Validator(body, rules, customMessages);

    validation.passes(() => callback(null, true));

    validation.fails(() => callback(validation.errors, false));
};

module.exports = validator;
