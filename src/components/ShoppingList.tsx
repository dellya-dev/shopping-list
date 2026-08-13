import type { ShoppingDataItem } from "../types/shoppingData";
import ShoppingItem from "./ShoppingItem";
import './ShoppingList.css'

type ShoppingListProps = {
  items: ShoppingDataItem[];
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

function ShoppingList({ items, onToggle, onDelete }:  ShoppingListProps) {

  return (
    <>
      <div className="shopping-list">
        {items.map((item) => {
          return (
            <ShoppingItem
              key={item.id}
              item={item}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          )
        })}
      </div>
    </>
  )
}

export default ShoppingList