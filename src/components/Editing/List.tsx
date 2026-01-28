import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, startEdit } from '../../store/actions'
import { selectFilteredItems } from '../../store/selectors'

const List = () => {
  const dispatch = useDispatch()

  const items = useSelector(selectFilteredItems)

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
