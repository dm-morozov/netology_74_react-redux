import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, startEdit } from '../../store/actions'
import { selectFilteredItems, selectFilterStats } from '../../store/selectors'
import type { State } from '../../store/types'

const List = () => {
  const dispatch = useDispatch()

  const items = useSelector(selectFilteredItems)
  const { found, total } = useSelector(selectFilterStats)

  const searchTerm = useSelector((state: State) => state.filter.searchTerm)

  const highlight = (text: string, search: string) => {
    if (!search) return text

    const regex = new RegExp(`(${search})`, 'ig')
    return text
      .split(regex)
      .map((part, index) =>
        part.toLowerCase() === search.toLowerCase() ? (
          <mark key={index}>{part}</mark>
        ) : (
          part
        ),
      )
  }

  if (total === 0) {
    return <p>Список пустой...</p>
  }

  if (found === 0) {
    return (
      <>
        <p>Найдено 0 из {total}</p>
        <p>Услуги не найдены...</p>
      </>
    )
  }

  return (
    <div>
      {total === found ? (
        <p>
          Всего записей: <strong>{total}</strong>
        </p>
      ) : (
        <p>
          Найдено <strong>{found}</strong> записи из <strong>{total}</strong>
        </p>
      )}
      <ul>
        {items.map((item) => (
          <li key={item.id} className="item">
            <div>
              <span className="item-name">
                {highlight(item.name, searchTerm)}
              </span>
              <span className="item-separator"> — </span>
              <span className="item-price">{item.price} ₽</span>
            </div>
            <div>
              <button onClick={() => dispatch(startEdit(item.id))}>
                Редактировать
              </button>

              <button onClick={() => dispatch(deleteItem(item.id))}>
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
