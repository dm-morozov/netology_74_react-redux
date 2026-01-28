import {
  ADD_ITEM,
  CANCEL_EDIT,
  DELETE_ITEM,
  SET_FORM,
  START_EDIT,
  UPDATE_ITEM,
  type State,
} from './types'

const initialState: State = {
  items: [],
  editingId: null,
  form: {
    name: '',
    price: 0,
  },
}

export const reducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case SET_FORM:
      return {
        ...state,
        form: action.payload,
      }
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        form: {
          name: '',
          price: 0,
        },
      }

    case START_EDIT: {
      const item = state.items.find((i) => i.id === action.payload)
      if (!item) return state

      return {
        ...state,
        editingId: item.id,
        form: { name: item.name, price: item.price },
      }
    }

    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id ? action.payload : i,
        ),
        editingId: null,
        form: { name: '', price: 0 },
      }

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      }

    case CANCEL_EDIT:
      return {
        ...state,
        editingId: null,
        form: { name: '', price: 0 },
      }

    default:
      return state
  }
}
