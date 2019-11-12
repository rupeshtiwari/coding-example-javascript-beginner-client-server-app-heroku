import { DELETE_USER, HIDE_ALL_ALERTS } from '../model';

$(() => {
  $('#userList').delegate('.delete-user', 'click', publishDeleteUser);
});

export function publishDeleteUser() {
  $.publish(HIDE_ALL_ALERTS);

  const deleteSure = confirm(`Are your sure?`);

  if (!deleteSure) {
    return false;
  }

  const userId = $(this).data('userid');

  $.publish(DELETE_USER, userId);
}
