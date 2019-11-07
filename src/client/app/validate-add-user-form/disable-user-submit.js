import { ADD_USER_FORM_INVALID, SHOW_ERROR } from '../model/messages';

$.subscribe(ADD_USER_FORM_INVALID, disableAddUserFormSubmit);

export function disableAddUserFormSubmit(topic, error) {
  $.publish(SHOW_ERROR, error);
  $('#addUser').attr('disabled', 'disabled');
}
