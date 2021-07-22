import { isEmptyOrNullField } from './string-utils';

const emailExpression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const validate = ({name, value}) => {

  if(name === 'name') {
    return validateName(value);
  }

  if(name === 'firstName') {
    return validateName(value);
  }

  if(name === 'lastName') {
    return validateName(value);
  }

  if(name === 'email') {
    return validateEmail(value);
  }

  if(name === 'password') {
    return validatePassword(value);
  }

  return '';
}

function validatePassword(value) {
  if(isEmptyOrNullField(value)) {
    return 'The password is required.';
  }

  if(value.length < 8) {
    return 'The password must have at least 8 characters';
  }

  return '';
}

function validateName(value) {
  if(isEmptyOrNullField(value)) {
    return 'The name is required.';
  }

  if(value.length < 8) {
    return 'The name must have at least 8 characters';
  }

  return '';
}

function validateEmail(value) {

  if(isEmptyOrNullField(value)) {
    return 'The email is required.';
  }

  if(!emailExpression.test(value)) {
    return 'Invalid email address.';
  }

  return '';
}


export default validate;