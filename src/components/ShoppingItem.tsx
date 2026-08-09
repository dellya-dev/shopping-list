import type { ShoppingDataItem } from "../types/shoppingData"

 type ShoppingItemProps = {
    item: ShoppingDataItem
  }

function ShoppingItem({ item } : ShoppingItemProps) {

  return (
    <>
      <div>
        <ul>
          <li>
            {item.title}
          </li>
        </ul>
      </div>
    </>
  )
}

export default ShoppingItem