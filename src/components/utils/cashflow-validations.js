import { FlowType } from '../../models';
import { isEmptyOrNullField } from './string-utils';

const positiveNumberRegex = /^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/;

const validate = ({name, value}) => {

  if(name === 'description') {
    return validateDescription(value);
  }

  if(name === 'value') {
    return validateValue(value);
  }

  if(name === 'type') {
    return validateType(value);
  }

  if(name === 'date') {
    return validateDate(value);
  }

  return ''
}

function validateDescription(value) {

  if(isEmptyOrNullField(value)) {
    return 'The description is required.';
  }

  return '';
}

function validateValue(value) {

  if(isEmptyOrNullField(value)) {
    return 'The value is required.';
  }

  if(!positiveNumberRegex.test(value)) {
    return 'Invalid value';
  }

  return '';
}

function validateType(value) {

  if(isEmptyOrNullField(value)) {
    return 'The value is required.';
  }

  const types = Object.keys(FlowType);

  if(!types.find(type => type === value)) {
    return 'Invalid type';
  }

  return ''
}

function validateDate(value) {

  if(isEmptyOrNullField(value)) {
    return 'The date is required.';
  }
  
  return '';
}

export default validate;