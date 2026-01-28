import type { State } from './types'

// все услуги
export const selectItems = (state: State) => state.items

// строка поиска
export const selectSearchTerm = (state: State) => state.filter.searchTerm

export const selectFilteredItems = (state: State) => {
  const items = selectItems(state)

  const searchTerm = selectSearchTerm(state).trim().toLowerCase()

  if (!searchTerm) {
    return items
  }

  return items.filter((item) => item.name.toLowerCase().includes(searchTerm))
}

export const selectFilterStats = (state: State) => {
  const filtered = selectFilteredItems(state)

  const total = state.items.length

  return {
    found: filtered.length,
    total,
  }
}
