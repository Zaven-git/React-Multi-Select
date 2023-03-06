import { NOTIFICATION_TYPES } from '../types/notification'

export const showNotification = (data) => async dispatch => {
  try {
    dispatch({
      type: NOTIFICATION_TYPES.SHOW_NOTIFICATION,
      payload: data,
    })
  } catch (ex) {
    console.log(ex.message);
  }
}