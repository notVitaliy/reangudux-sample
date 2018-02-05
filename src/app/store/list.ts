export const ADD_TODO = 'ADD_TODO'
export const FIN_TODO = 'FIN_TODO'
export const DEL_TODO = 'DEL_TODO'

export function addTodo(name) {
  return {
    type: ADD_TODO,
    name,
  }
}

export function finTodo(id) {
  return {
    type: FIN_TODO,
    id,
  }
}

export function delTodo(id) {
  return {
    type: DEL_TODO,
    id,
  }
}
