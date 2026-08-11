import type { ShoppingDataItem } from "../types/shoppingData";
import ShoppingItem from "./ShoppingItem";

type ShoppingListProps = {
  items: ShoppingDataItem[];
  onToggle: (id: number) => void
}

function ShoppingList({ items, onToggle }:  ShoppingListProps) {

  return (
    <>
      <div>
        {items.map((item) => {
          return (
            <ShoppingItem
              key={item.id}
              item={item}
              onToggle={onToggle}
            />
          )
        })}
      </div>
    </>
  )
}

export default ShoppingList