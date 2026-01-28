import { useDispatch, useSelector } from 'react-redux'
import type { State } from '../../store/types'
import { deleteItem, startEdit } from '../../store/actions'

const List = () => {
  const dispatch = useDispatch()

  const items = useSelector((state: State) => state.items)

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className="item">
          <div>
            <span className="item-name">{item.name}</span>
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
  )
}

export default List
