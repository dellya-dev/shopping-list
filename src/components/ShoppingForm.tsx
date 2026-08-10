import { useState } from "react"

type ShoppingFormProps = {
  onAddItem: (title: string) => void
}

function ShoppingForm({ onAddItem }: ShoppingFormProps) {
  const [input, setInput] = useState("")

  function handleAddButton() {
    onAddItem(input)
    setInput("")
  }

  console.log(input)
  return (
    <>
      <div>
        <input 
          type="text" 
          placeholder="Add Here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddButton}>Add</button>
      </div>
    </>
  )
}

export default ShoppingForm