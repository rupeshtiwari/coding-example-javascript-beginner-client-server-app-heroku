import { ADD_USER_SUCCESS, SHOW_SUCCESS } from '../model';

$.subscribe(ADD_USER_SUCCESS, showUserInTable);

export function showUserInTable(topic, user) {
  // get the tbody of table
  const $tableBody = $('#userList').find('tbody');

  // create a tr with delete button and user info
  const $tr = $(
    `
        <tr data-userid ="${user.id}">
            <th scope="row"> ${user.id} </th>
            <td> ${user.name} </td>
            <td> ${user.email}</td>
            <td>
                 <button type="button" class="btn btn-danger delete-user" data-userid="${user.id}">
                    <span class="glyphicon glyphicon-trash"></span> Trash
                </button>
            </td>
        </tr>
      `
  );

  // append tr on tbody
  $tableBody.append($tr);

  //clear input
  $('#name,#email').val('');

  // publish message
  $.publish(SHOW_SUCCESS, `Congrats ${user.name} added successfully`);
}
