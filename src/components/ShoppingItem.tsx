import type { ShoppingDataItem } from "../types/shoppingData"

type ShoppingItemProps = {
  item: ShoppingDataItem
  onToggle: (id: number) => void
}


function ShoppingItem({ item, onToggle }: ShoppingItemProps) {

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

          </ul>
        </ul>
      </div>
    </>
  )
}

export default ShoppingItem