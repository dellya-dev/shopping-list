
import { useState } from 'react'
import './App.css'
import ShoppingForm from './components/ShoppingForm'
import ShoppingList from './components/ShoppingList'
import type { ShoppingDataItem } from './types/shoppingData'

function App() {

  const shoppingDummy: ShoppingDataItem[] = [
    {
      id: 1,
      title: "Milk",
      completed: false
    }, {
      id: 2,
      title: "Sugar",
      completed: false
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
        title: trimedTitle,
        completed: false
      },
    ])
  }

  function handleToggle(id: number): void {
    setItems((items) => items.map((item) =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    ))
  }

  function handleDelete(id: number): void {
    setItems((items) => items.filter((item) => item.id !== id))
  }


  return (
    <>
      <h1>Shopping List</h1>
      <ShoppingForm
        onAddItem={handleAddItem}
      />
      <ShoppingList
        items={items}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </>
  )
}

export default App
