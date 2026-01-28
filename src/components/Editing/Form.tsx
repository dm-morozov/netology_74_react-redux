import { useDispatch, useSelector } from 'react-redux'
import type { State } from '../../store/types'
import { addItem, updateItem, setForm, cancelEdit } from '../../store/actions'

const Form = () => {
  const dispatch = useDispatch() // отправлять команды (actions) в Redux
  const { form, editingId } = useSelector((state: State) => state) // читать данные из Redux

  const handleSave = () => {
    if (form.name === '' || form.price === 0) return
    if (editingId === null) {
      dispatch(
        addItem({
          id: Date.now(),
          name: form.name,
          price: form.price,
        }),
      )
    } else {
      dispatch(
        updateItem({
          id: editingId,
          name: form.name,
          price: form.price,
        }),
      )
    }
  }

  return (
    <div className="form">
      <input
        type="text"
        autoFocus
        name="description"
        placeholder="Описание"
        value={form.name}
        onChange={(e) => dispatch(setForm(e.target.value, form.price))}
      />
      <input
        type="text"
        name="price"
        placeholder="Цена"
        value={form.price === 0 ? '' : form.price}
        onChange={(e) => dispatch(setForm(form.name, Number(e.target.value)))}
      />

      <button
        className="btn-save"
        onClick={() => {
          handleSave()
        }}
        disabled={form.name === '' || form.price === 0}
      >
        Save
      </button>

      {editingId !== null && (
        <button className="btn-cancel" onClick={() => dispatch(cancelEdit())}>
          Cancel
        </button>
      )}
    </div>
  )
}

export default Form
