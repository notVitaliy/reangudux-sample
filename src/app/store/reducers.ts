import { combineReducers } from 'redux'
import { ADD_TODO, FIN_TODO, DEL_TODO } from './list'

function list(state, action) {
  switch (action.type) {
    case ADD_TODO:
      const item = {
        name: action.name,
        status: 'active',
        id: Math.random(),
      }
      return [...state, item]
    case FIN_TODO:
      const fItem = state.find((item) => item.id === action.id)
      const fIdx = state.indexOf(fItem)

      if (fIdx > -1) {
        fItem.status = 'complete'
        state[fIdx] = fItem
      }

      return [...state]
    case DEL_TODO:
      const dIdx = state.indexOf(state.find((item) => item.id === action.id))

      if (dIdx > -1) state.splice(dIdx, 1)
      return [...state]
    default:
      return [{ name: 'Init task', status: 'active', id: Math.random() }]
  }
}

const rootReducer = combineReducers({
  list,
})

export default rootReducer
