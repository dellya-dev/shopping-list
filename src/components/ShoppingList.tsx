import type { ShoppingDataItem } from "../types/shoppingData";
import ShoppingItem from "./ShoppingItem";

type ShoppingListProps = {
  items: ShoppingDataItem[];
}

function ShoppingList({ items }: ShoppingListProps) {

  return (
    <>
      <div>
        {items.map((item) => {
          return (
            <ShoppingItem
              key={item.id}
              item={item}
            />
          )
        })}
      </div>
    </>
  )
}

export default ShoppingList