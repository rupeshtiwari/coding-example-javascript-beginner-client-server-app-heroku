import { ADD_USER_FORM_VALID } from '../model/messages';

$.subscribe(ADD_USER_FORM_VALID, enableAddUserFormSubmit);

export function enableAddUserFormSubmit() {
  $('#addUser').removeAttr('disabled');
}
