import {
  ADD_ITEM,
  CANCEL_EDIT,
  CLEAR_SEARCH,
  DELETE_ITEM,
  SET_FORM,
  SET_SEARCH_TERM,
  START_EDIT,
  UPDATE_ITEM,
  type Action,
  type State,
} from './types'

const initialState: State = {
  items: [],
  editingId: null,
  form: {
    name: '',
    price: 0,
  },
  filter: {
    searchTerm: '',
  },
}

export const reducer = (state = initialState, action: Action): State => {
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

    case SET_SEARCH_TERM:
      return {
        ...state,
        filter: {
          searchTerm: action.payload,
        },
      }

    case CLEAR_SEARCH:
      return {
        ...state,
        filter: {
          searchTerm: '',
        },
      }

    default:
      return state
  }
}
