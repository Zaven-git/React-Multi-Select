import { NOTIFICATION_TYPES } from '../store/types/notification'

export const setNotification = (dispatch, message, type) => {
  dispatch({
    type: NOTIFICATION_TYPES.SHOW_NOTIFICATION,
    payload: { type, message, show: true }
  })
}

export const addParentId = (arr,parentId) => {
  arr.forEach((el) => {
    if (el.children.length > 0) {
      el.children.forEach((child) => {
        child.parentId = el.id;
        addParentId(el.children, el.id);
      });
    }
  });
};