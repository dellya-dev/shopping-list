import type { FilterData } from "../types/shoppingData"


type ShoppingFilterProps = {
  setFilter: (filter: FilterData) => void
}

function FilterBar({ setFilter }: ShoppingFilterProps) {

  return (
    <>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
    </>
  )
}

export default FilterBar