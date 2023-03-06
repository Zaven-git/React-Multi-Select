import {TREE_TYPES} from '../types/tree'
import Api from '../../api/index';
import {setNotification, addParentId} from '../../helpers/storeHelpers'

export const getTree = (credentials) => async dispatch => {
  try {
    dispatch({
      type: TREE_TYPES.SET_LOADING,
      payload: true,
    })
    let res = await Api.tree('getTrees', credentials)
    if(res.id){
      let data = [res];
      addParentId(data)
      dispatch({
        type: TREE_TYPES.GET_TREES,
        payload: {list: data}
      })
    }
    dispatch({
      type: TREE_TYPES.SET_LOADING,
      payload: false,
    })
  } catch (ex) {
    dispatch({
      type: TREE_TYPES.SET_LOADING,
      payload: false,
    })
    alert(ex.message)
  }
}

export const addTree = (tree) => async dispatch => {
  try {
    dispatch({
      type: TREE_TYPES.SET_LOADING,
      payload: true,
    })
    let res = await Api.tree('addTree',tree)
    if (res) {
      dispatch({
        type: TREE_TYPES.ADD_TREE,
        payload: {Tree: res.data}
      })
      setNotification(dispatch, res.message, 'success')
    }
    dispatch({
      type: TREE_TYPES.SET_LOADING,
      payload: false,
    })
  } catch (message) {
    dispatch({
      type: TREE_TYPES.SET_LOADING,
      payload: false,
    })
    setNotification(dispatch, message, 'error')
  }
}

export const editTree = (tree) => async dispatch => {
  try {
    dispatch({
      type: TREE_TYPES.SET_LOADING,
      payload: true,
    })
    let res = await Api.tree('editTree', tree)
    if (res) {
      dispatch({
        type: TREE_TYPES.EDIT_TREE,
        payload: res
      })
      setNotification(dispatch, res.data, 'success')
    }
    dispatch({
      type: TREE_TYPES.SET_LOADING,
      payload: false,
    })
  } catch (message) {
    dispatch({
      type: TREE_TYPES.SET_LOADING,
      payload: false,
    })
    setNotification(dispatch, message, 'error')
  }
}

export const removeTree = (TreeId) => async dispatch => {
  try {
    dispatch({
      type: TREE_TYPES.SET_LOADING,
      payload: true,
    })
    let res = await Api.tree('removeTree', TreeId)
    if (res) {
      dispatch({
        type: TREE_TYPES.DELETE_TREE,
        payload: {id: TreeId}
      })
      setNotification(dispatch, res.message, 'success')
    }
    dispatch({
      type: TREE_TYPES.SET_LOADING,
      payload: false,
    })
  } catch (message) {
    dispatch({
      type: TREE_TYPES.SET_LOADING,
      payload: false,
    })
    setNotification(dispatch, message, 'error')
  }
}

