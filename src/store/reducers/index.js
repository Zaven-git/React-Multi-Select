import { combineReducers } from 'redux'

import { tree } from './tree'
import { notification } from './notification'

export const rootReducer = combineReducers({
  tree,
  notification
})