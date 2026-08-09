
import './App.css'
import ShoppingList from './components/ShoppingList'
import type { ShoppingDataItem } from './types/shoppingData'

function App() {

  const shoppingDummy: ShoppingDataItem[] = [
    {
      id: 1,
      title: "Milk"
    }, {
      id: 2,
      title: "Sugar"
    }
  ]

  return (
    <>
      <h1>Shopping List</h1>
      <ShoppingList 
        items={shoppingDummy}
      />
    </>
  )
}

export default App
