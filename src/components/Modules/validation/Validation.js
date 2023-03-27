import Ajv from 'ajv';

const ajv = new Ajv({allErrors: true, code: {es5: true}, unicodeRegExp: false});
require('ajv-keywords')(ajv, 'transform');
require('ajv-errors')(ajv);

const defaultSchema = {
  type: 'object',
  properties: {},
  required: [],
  additionalProperties: false,
  errorMessage: {},
};

export const validator = (schemaProperties, data) => {
  const mergedSchema = {
    ...defaultSchema,
    properties: {
      ...defaultSchema.properties,
      ...schemaProperties.properties,
    },
    required: [...defaultSchema.required, ...schemaProperties.required],
  };
  const validate = ajv.compile(mergedSchema);
  const isValid = validate(data);

  let errors = {};
  if (Array.isArray(validate.errors)) {
    validate.errors.forEach((error) => {
      errors = {
        ...errors,
        [error.instancePath.substring(1)]: {
          element: error.instancePath.substring(1),
          message: error.message,
        },
      };
    });
  }
  return {isValid, errors};
};

export const convertData = (value, type) => {
  if (!type) {
    console.error('required `type` property is missing.');
    return false;
  }
  let returnValue = null;
  switch (type) {
    case 'number':
      returnValue = Number(value);
      break;

    default:
      returnValue = value;
      break;
  }
  return returnValue;
};

export const validateData = (context) => {
  const {schema, dataToValidate, errors} = context;
  if (!schema) {
    console.error('required `schema` property is missing.');
    return false;
  }
  let updatedErrors = {};
  const validationSchema = {
    properties: {
      ...Object.keys(schema).reduce(
        (obj, schemaKey) => ({...obj, [schemaKey]: schema[schemaKey]}),
        {},
      ),
    },
    required: [
      ...Object.keys(schema).map((schemaKey) => {
        return schemaKey;
      }),
    ],
  };

  const singleDataElementToCheck = dataToValidate?.singleDataElementToCheck;
  const data = Object.keys(schema).reduce((obj, schemaKey) => {
    return {
      ...obj,
      [schemaKey]:
        singleDataElementToCheck && singleDataElementToCheck[schemaKey]
          ? convertData(singleDataElementToCheck[schemaKey], schema[schemaKey].type)
          : convertData(dataToValidate[schemaKey], schema[schemaKey].type),
    };
  }, {});
  const handleValidation = validator(validationSchema, data);
  if (singleDataElementToCheck) {
    const key = Object.keys(singleDataElementToCheck)[0];
    if (key in handleValidation.errors) {
      updatedErrors = {...updatedErrors, ...{[key]: handleValidation.errors[key]}};
    } else {
      delete errors[key];
      updatedErrors = {...errors};
    }
  } else {
    updatedErrors = {...updatedErrors, ...handleValidation.errors};
  }
  return {
    ...context,
    ...{
      errors: updatedErrors,
      isValid: handleValidation.isValid,
    },
  };
};
