import { DELETE_USER_SUCCESS, SHOW_INFO } from '../model';

$.subscribe(DELETE_USER_SUCCESS, deleteUserFromTable);

export function deleteUserFromTable(topic, { userId }) {
  $('#userList tbody') // find the tbody
    .find(`tr[data-userid=${userId}]`) // tr with user id
    .remove(); // remove tr

  // publish user deleted
  $.publish(SHOW_INFO, `User deleted successfully`);
}
