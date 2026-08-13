import type { ShoppingDataItem } from "../types/shoppingData"
import './ShoppingItem.css'

type ShoppingItemProps = {
  item: ShoppingDataItem
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}


function ShoppingItem({ item, onToggle, onDelete }: ShoppingItemProps) {

  return (
    <>
      <div className="shopping-item">
        <div className="shopping-item-content">
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => onToggle(item.id)}
          />
          <span
            className="shopping-title"
            style={{
              textDecoration: item.completed ? 'line-through' : 'none'
            }}
          >
            {item.title}
          </span>
        </div>
        <button className="delete-button" onClick={() => onDelete(item.id)}>🗑️</button>


      </div>
    </>
  )
}

export default ShoppingItem