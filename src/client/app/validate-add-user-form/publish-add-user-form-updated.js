import { User } from '../model/user';
import { ADD_USER_FORM_UPDATED } from '../model/messages';

$(() => {
  $('#userForm').delegate('input', 'input', publishAddUserFormUpdatedMessage);
});

export function publishAddUserFormUpdatedMessage() {
  const fullName = $('#name').val();
  const email = $('#email').val();

  const user = new User(fullName, email);

  $.publish(ADD_USER_FORM_UPDATED, user);
}
