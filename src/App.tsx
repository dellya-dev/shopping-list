
import { useState } from 'react'
import './App.css'
import ShoppingForm from './components/ShoppingForm'
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
  
  const [items, setItems] = useState<ShoppingDataItem[]>(shoppingDummy)

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
