import { useReducer } from "react";
import { validateInputs, validateInputsTouched, getInitialInputs } from './use-form-utils';

const FORM_ACTION_TYPES = {
  INPUT_CHANGE: 'INPUT_CHANGE',
  INPUT_BLUR: 'INPUT_BLUR'
}

const INITIAL_FORM_STATE = {
  inputs: {},
  isValid: false,
  touched: false,
  validateFn: ({name, value}) => {}
}

const getModifiedForm = (prevState, {name, value, required}, touched) => {
  const inputErrors = required ? prevState.validateFn({name, value}) : '';
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
    ...prevState,
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

const useForm = (inputValues, onSubmit, validateFn) => {
  const [formState, dispatchInputChange] = useReducer(formReducer, {
    ...INITIAL_FORM_STATE,
    inputs: getInitialInputs(inputValues, validateFn),
    validateFn
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