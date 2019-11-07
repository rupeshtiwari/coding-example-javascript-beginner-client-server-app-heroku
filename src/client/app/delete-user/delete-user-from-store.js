import { DELETE_USER, store, DELETE_USER_SUCCESS } from '../model';

$.subscribe(DELETE_USER, deleteUserFromStore);

export function deleteUserFromStore(topic, userId) {
  store.list.delete(userId);
  $.publish(DELETE_USER_SUCCESS, { userId });
}
