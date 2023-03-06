import {legacy_createStore as  createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from './reducers'

const logMiddleware = ({ getState }) => next => action => {
  return next(action);
}

const stringMiddleware = () => next => action => {
  if (typeof action === 'string') {
    return next({
      type: action,
    });
  }

  return next(action);
}

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware)
)