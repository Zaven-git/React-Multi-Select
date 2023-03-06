import { TREE_TYPES } from '../types/tree'

const initialState = {
  loading: false,
  list: [{
    id: "",
    name: "",
    children:[],
  }]
}

export const tree = (state = initialState, action) => {
  switch (action.type) {
    case TREE_TYPES.GET_TREES:
      return{
        ...state,
        list: action.payload.list,
      }
    case TREE_TYPES.ADD_TREE:
      return {
        ...state,
        list: state.list.concat(action.payload.tree)
      }
    case TREE_TYPES.EDIT_TREE:
      return {
        ...state,
        list: state.list.map(tree =>
        {
          return action.payload.id === tree.id
            ? { ...tree, ...action.payload }
            : tree
        })
      }
    case TREE_TYPES.DELETE_TREE:
      return {
        ...state,
        list: state.list.filter(tree => tree.id !== action.payload.id)
      }
    case TREE_TYPES.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default: return state
  }
}