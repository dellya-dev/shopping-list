
import { useState } from 'react'
import './App.css'
import ShoppingForm from './components/ShoppingForm'
import ShoppingList from './components/ShoppingList'
import type { ShoppingDataItem } from './types/shoppingData'

function App() {
  const [items, setItems] = useState<ShoppingDataItem[]>([])

   function handleAddItem(title: string): void {
    const trimedTitle = title.trim()

    if (!trimedTitle) return

    setItems((prev) => [
      ...prev, 
      {
        id: Date.now(),
        title: trimedTitle
      },
    ])
  }

  const shoppingDummy: ShoppingDataItem[] = [
    {
      id: 1,
      title: "Milk"
    }, {
      id: 2,
      title: "Sugar"
    }
  ]
  console.log(shoppingDummy)

 

  return (
    <>
      <h1>Shopping List</h1>
      <ShoppingForm 
        onAddItem={handleAddItem}
      />
      <ShoppingList 
        items={items}
      />
    </>
  )
}

export default App
