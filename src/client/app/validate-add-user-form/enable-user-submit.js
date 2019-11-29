import { ADD_USER_FORM_VALID, HIDE_ALL_ALERTS } from '../model/messages';

$.subscribe(ADD_USER_FORM_VALID, enableAddUserFormSubmit);

export function enableAddUserFormSubmit() {
  $.publish(HIDE_ALL_ALERTS);
  $('#addUser').removeAttr('disabled');
}
