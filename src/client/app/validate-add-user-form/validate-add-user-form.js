import { ADD_USER_FORM_INVALID, ADD_USER_FORM_UPDATED, ADD_USER_FORM_VALID } from '../model/messages';

$.subscribe(ADD_USER_FORM_UPDATED, validateAddUserForm);

export function validateAddUserForm(message, user) {
  const nameResult = isNameValid(user.name);
  const emailResult = isEmailValid(user.email);

  // Main Course
  if (nameResult === true && emailResult === true) {
    return $.publish(ADD_USER_FORM_VALID, user);
  }

  // Error Course
  if (typeof nameResult === 'string') {
    return $.publish(ADD_USER_FORM_INVALID, nameResult);
  }

  if (typeof emailResult === 'string') {
    return $.publish(ADD_USER_FORM_INVALID, emailResult);
  }
}

function isNameValid(name) {
  if (name != null && name.trim() !== '' && name.length > 4) {
    return true;
  }
  return `Full Name is invalid`;
}

function isEmailValid(email) {
  if (
    email != null &&
    email.trim() !== '' &&
    email.indexOf('@') > -1 &&
    email.indexOf('.') > -1
  ) {
    return true;
  }

  return `Email is invalid`;
}
