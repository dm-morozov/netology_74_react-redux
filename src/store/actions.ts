import {
  ADD_ITEM,
  CANCEL_EDIT,
  CLEAR_SEARCH,
  DELETE_ITEM,
  SET_FORM,
  SET_SEARCH_TERM,
  START_EDIT,
  UPDATE_ITEM,
  type Item,
} from './types'

export const addItem = (item: Item) => ({
  type: ADD_ITEM,
  payload: item,
})

export const updateItem = (item: Item) => ({
  type: UPDATE_ITEM,
  payload: item,
})

export const deleteItem = (id: number) => ({
  type: DELETE_ITEM,
  payload: id,
})

export const setForm = (name: string, price: number) => ({
  type: SET_FORM,
  payload: { name, price },
})

export const startEdit = (id: number) => ({
  type: START_EDIT,
  payload: id,
})

export const cancelEdit = () => ({
  type: CANCEL_EDIT,
})

export const setSearchTerm = (searchTerm: string) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm,
})

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
  payload: '',
})
