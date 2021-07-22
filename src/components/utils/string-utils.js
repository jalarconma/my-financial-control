export function isEmptyOrNullField(value) {
  return !value || value.trim().length === 0;
}