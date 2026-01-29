export interface Item {
  id: number
  name: string
  price: number
}

export interface State {
  items: Item[]
  editingId: number | null
  form: {
    name: string
    price: number
  }
  filter: {
    searchTerm: string
  }
}

// Action Types
export const ADD_ITEM = 'ADD_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const SET_FORM = 'SET_FORM'
export const START_EDIT = 'START_EDIT'
export const CANCEL_EDIT = 'CANCEL_EDIT'

// Добавим новые action types для решения второй задачи с фильтрами
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'
export const CLEAR_SEARCH = 'CLEAR_SEARCH'

// Union-тип всех возможных actions
export type Action =
  | { type: typeof ADD_ITEM; payload: Item }
  | { type: typeof UPDATE_ITEM; payload: Item }
  | { type: typeof DELETE_ITEM; payload: number }
  | { type: typeof SET_FORM; payload: { name: string; price: number } }
  | { type: typeof START_EDIT; payload: number }
  | { type: typeof CANCEL_EDIT }
  | { type: typeof SET_SEARCH_TERM; payload: string }
  | { type: typeof CLEAR_SEARCH; payload: string }
