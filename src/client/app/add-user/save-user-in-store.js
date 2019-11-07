import { ADD_USER, store, ADD_USER_FAIL, ADD_USER_SUCCESS } from '../model';

$.subscribe(ADD_USER, saveUserInStore);

export function saveUserInStore(topic, user) {
  if (store.list.has(user.id)) {
    $.publish(ADD_USER_FAIL, `${user.id} already exists`);
  }

  store.list.set(user.id, user);

  $.publish(ADD_USER_SUCCESS, store.list.get(user.id));
}
