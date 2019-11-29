import { ADD_USER, User, HIDE_ALL_ALERTS } from '../model';

$(() => {
  $(`#addUser`).on('click', publishAddUser);
});

export function publishAddUser() {
  $.publish(HIDE_ALL_ALERTS);
  
  const name = $('#name').val();
  const email = $('#email').val();
  const user = new User(name, email);
  
  $.publish(ADD_USER, user);
}
