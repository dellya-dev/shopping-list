
import { useEffect, useState } from 'react'
import './App.css'
import ShoppingForm from './components/ShoppingForm'
import ShoppingList from './components/ShoppingList'
import type { FilterData, ShoppingDataItem } from './types/shoppingData'
import FilterBar from './components/FilterBar'


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

  const [items, setItems] = useState<ShoppingDataItem[]>( () => {const saved = localStorage.getItem("shopping-items")
    if (saved) {
      const parsed = JSON.parse(saved)
      return parsed
    } else {
      return shoppingDummy
    }
  })

  const [filter, setFilter] = useState<FilterData>("all")

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

  const filteredItems  =
    items.filter((item) => {
      if (filter === "active") {
        return item.completed === false
      } else if (filter === "completed") {
        return item.completed === true
      } else {
        return true
      }
    })
  
    useEffect(() => {
      localStorage.setItem("shopping-items", JSON.stringify(items))
    }, [items])

  return (
    <>
      <h1>Shopping List</h1>
      <ShoppingForm
        onAddItem={handleAddItem}
      />
      <FilterBar 
        setFilter={setFilter}
      />
      <ShoppingList
        items={filteredItems}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </>
  )
}

export default App
