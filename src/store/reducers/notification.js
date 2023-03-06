import { NOTIFICATION_TYPES } from '../types/notification'

const initialState = {
  type: '',
  message: '',
  show: false
}

export const notification = (state = initialState, action) => {
  // we can use only types existing in this list ['error','success','info','warning']
  switch (action.type) {
    case NOTIFICATION_TYPES.SHOW_NOTIFICATION:
      return {
        ...state,
        type: action.payload.type,
        message: action.payload.message?.charAt(0).toUpperCase() + action.payload.message?.slice(1),
        show: action.payload.show,
      }
    default: return state
  }
}