import { User } from '../model/user';
import { ADD_USER_FORM_UPDATED } from '../model/messages';

$(() => {
  $('#userForm').delegate('input', 'input', publishAddUserFormUpdatedMessage);
});

let schedule;

export function publishAddUserFormUpdatedMessage() {
  const fullName = $('#name').val();
  const email = $('#email').val();

  const user = new User(fullName, email);

  console.log(`---Registration Form Updating---`);

  if (schedule) {
    clearTimeout(schedule);
  }

  schedule = setTimeout(() => {
    console.log(`---Publishing ADD_USER_FORM_UPDATED Event---`);
    $.publish(ADD_USER_FORM_UPDATED, user);
  }, 500);
}
