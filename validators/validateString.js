exports.validateString = (value, minLength, paramName) => {
  if (!value || typeof value !== 'string' || value.trim().length < minLength) {
    const error = new Error(`${paramName} is invalid`);
    error.status = 400;

    throw error;
  }
};
