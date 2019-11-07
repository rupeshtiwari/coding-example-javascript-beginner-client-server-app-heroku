import { SHOW_ERROR, SHOW_SUCCESS } from '../model/messages';

$.subscribe(SHOW_ERROR, (topic, error) => {
  $('#alertMsg')
    .removeClass()
    .addClass('alert alert-danger')
    .html(`⛔️ ${error}`)
    .show();
});

$.subscribe(SHOW_SUCCESS, (topic, successMsg) => {
  $('#alertMsg')
    .removeClass()
    .addClass('alert alert-success')
    .html(`✅ ${successMsg}`)
    .show();
});
