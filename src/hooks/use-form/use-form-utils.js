export function validateInputs(inputs) {
  let isValid = true;

  for(let key of Object.keys(inputs)) {

    if(!inputs[key].isValid) {
      isValid = false;
      break;
    }
  }

  return isValid;
}

export function validateInputsTouched(inputs) {
  let touched = false;

  for(let key of Object.keys(inputs)) {

    if(inputs[key].touched) {
      touched = true;
      break;
    }
  }

  return touched;
}

export const getInitialInputs = (inputs, validateFn) => {
  const structuredInputs = {};
  Object.keys(inputs).forEach(key => {
    const inputErrors = validateFn({name: key, value: inputs[key]});

    structuredInputs[key] = {
      value: inputs[key],
      errors: inputErrors,
      isValid: inputErrors.length === 0,
      touched: false
    };
  });

  return structuredInputs;
};