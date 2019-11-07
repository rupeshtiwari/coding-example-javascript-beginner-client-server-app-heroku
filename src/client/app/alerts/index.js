import {
  SHOW_ERROR,
  SHOW_SUCCESS,
  SHOW_INFO,
  HIDE_ALL_ALERTS
} from '../model/messages';

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

$.subscribe(SHOW_INFO, (topic, infoMsg) => {
  $('#alertMsg')
    .removeClass()
    .addClass('alert alert-info')
    .html(`⚠️ ${infoMsg}`)
    .show();
});

$.subscribe(HIDE_ALL_ALERTS, () => {
  $('#alertMsg')
    .html('')
    .hide();
});
