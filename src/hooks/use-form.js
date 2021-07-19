import { useReducer } from "react";
import validate, { validateInputs, validateInputsTouched } from "../components/utils/signup-validations";

const FORM_ACTION_TYPES = {
  INPUT_CHANGE: 'INPUT_CHANGE',
  INPUT_BLUR: 'INPUT_BLUR'
}

const INITIAL_FORM_STATE = {
  inputs: {},
  isValid: false,
  touched: false
}

const getModifiedForm = (prevState, {name, value}, touched) => {
  const inputErrors = validate({name, value});
  const inputTouched = touched ? true : prevState.inputs[name].touched;

  const inputs = {
    ...prevState.inputs,
    [name]: {
      value: value,
      errors: inputErrors,
      isValid: inputErrors.length === 0,
      touched: inputTouched
    }
  };

  const formTouched = validateInputsTouched(inputs);
  const isFormValid = validateInputs(inputs);

  return {
    inputs: inputs,
    isValid: isFormValid,
    touched: formTouched
  };
}

const formReducer = (prevState, {type, value}) => {
  switch(type) {
    case FORM_ACTION_TYPES.INPUT_CHANGE:
      return getModifiedForm(prevState, value, false);
    case FORM_ACTION_TYPES.INPUT_BLUR:
      return getModifiedForm(prevState, value, true); 
    default: 
      return {...prevState};
  }
}

const getInitialInputs = (inputs) => {
  const structuredInputs = {};
  Object.keys(inputs).forEach(key => {
    const inputErrors = validate({name: key, value: inputs[key]});

    structuredInputs[key] = {
      value: inputs[key],
      errors: inputErrors,
      isValid: inputErrors.length === 0,
      touched: false
    };
  });

  return structuredInputs;
};

const useForm = (inputValues, onSubmit) => {
  const [formState, dispatchInputChange] = useReducer(formReducer, {
    ...INITIAL_FORM_STATE,
    inputs: getInitialInputs(inputValues),
  });

  const inputChangeHandler = (event) => {
    dispatchInputChange({type: FORM_ACTION_TYPES.INPUT_CHANGE, value: event.target});
  }

  const inputBlurHandler = (event) => {
    dispatchInputChange({type: FORM_ACTION_TYPES.INPUT_BLUR, value: event.target});
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = Object.keys(formState.inputs).map(key => {
      return {
        name: key, 
        value: formState.inputs[key].value
      }
    }).reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});

    onSubmit(userData);
  }

  return {
    formState,
    inputBlurHandler,
    inputChangeHandler,
    submitHandler
  }
}

export default useForm;