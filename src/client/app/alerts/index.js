import { SHOW_ERROR } from '../model/messages';

$.subscribe(SHOW_ERROR, (topic, error) => {
  $('#alertMsg')
    .removeClass()
    .addClass('alert alert-danger')
    .html(`⛔️ ${error}`)
    .show();
});
