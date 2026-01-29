// store/store.ts
import { createStore, compose } from 'redux'
import { reducer } from './reducer'

const composeEnhancers =
  (typeof window !== 'undefined' &&
    (
      window as Window & {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
      }
    ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

export const store = createStore(reducer, composeEnhancers())
