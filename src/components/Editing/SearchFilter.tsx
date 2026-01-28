// src/components/SearchFilter.tsx

import { useRef, type ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { State } from '../../store/types'
import { clearSearch, setSearchTerm } from '../../store/actions'

const SearchFilter = () => {
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const searchTerm = useSelector((state: State) => state.filter.searchTerm)

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchTerm(event.target.value))
  }

  const handleClear = (): void => {
    dispatch(clearSearch())
    inputRef.current?.focus()
  }

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Поиск услуг..."
        value={searchTerm}
        onChange={handleChange}
      />

      {searchTerm && (
        <button onClick={handleClear} className="clear-btn">
          ✕
        </button>
      )}
    </div>
  )
}

export default SearchFilter
