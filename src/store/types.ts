export interface  Item {
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
}

// Action Types
export const ADD_ITEM = 'ADD_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const SET_FORM = 'SET_FORM'
export const START_EDIT = 'START_EDIT'
export const CANCEL_EDIT = 'CANCEL_EDIT'