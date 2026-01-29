// src/components/SearchFilter.tsx

import { useEffect, useRef, useState, type ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { State } from '../../store/types'
import { clearSearch, setSearchTerm } from '../../store/actions'

const SearchFilter = () => {
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const searchTerm = useSelector((state: State) => state.filter.searchTerm)

  // Чтобы инпут работал мгновенно и плавно,
  // он должен быть привязан к "местной" переменной.
  // Мы не беспокоим Redux, пока пользователь активно печатает.

  const [localValue, setLocalValue] = useState(searchTerm)

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setSearchTerm(localValue))
    }, 300)

    return () => clearTimeout(timeout)
  }, [localValue, dispatch])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLocalValue(event.target.value)
  }

  const handleClear = (): void => {
    setLocalValue('')
    dispatch(clearSearch())
    inputRef.current?.focus()
  }

  return (
    <div className="search-filter">
      <input
        type="text"
        className="search-input"
        name="search"
        ref={inputRef}
        placeholder="Поиск услуг..."
        value={localValue}
        onChange={handleChange}
      />

      <button
        onClick={handleClear}
        className={`clear-btn ${!localValue ? 'is-hidden' : ''}`}
      >
        ✕
      </button>
    </div>
  )
}

export default SearchFilter
