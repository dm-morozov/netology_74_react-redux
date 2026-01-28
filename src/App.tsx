import Form from './components/Editing/Form'
import List from './components/Editing/List'
import SearchFilter from './components/Editing/SearchFilter'
import './components/Editing/editing.css'

function App() {
  return (
    <>
      <h1 className="title">Список покупок — Redux</h1>
      <SearchFilter />
      <Form />
      <List />
    </>
  )
}

export default App
