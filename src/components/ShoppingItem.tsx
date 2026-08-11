import type { ShoppingDataItem } from "../types/shoppingData"

type ShoppingItemProps = {
  item: ShoppingDataItem
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}


function ShoppingItem({ item, onToggle, onDelete }: ShoppingItemProps) {

  return (
    <>
      <div>
        <ul>
          <ul>
            <input
              type="checkbox"
              onChange={() => onToggle(item.id)}
            />

            <span
              style={{
                textDecoration: item.completed ? 'line-through' : 'none'
              }}
            >
              {item.title}
            </span>

            <button onClick={() => onDelete(item.id)}>🗑️</button>

          </ul>
        </ul>
      </div>
    </>
  )
}

export default ShoppingItem