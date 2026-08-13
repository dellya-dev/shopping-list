import type { FilterData } from "../types/shoppingData"
import './FilterBar.css'


type ShoppingFilterProps = {
  setFilter: (filter: FilterData) => void
}

function FilterBar({ setFilter }: ShoppingFilterProps) {

  return (
    <>
      <div className="filter-bar">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
    </>
  )
}

export default FilterBar