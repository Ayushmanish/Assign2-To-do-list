import { useState, useEffect } from "react"
import Header from "./Header"
import { Filter_by, Marked, Unmarked } from "./Content"

function App() {
  const [inputTask, setInputTask] = useState({
    item: "",
    marked: "",
    date: ""
  })
  const [taskArr, setTaskArr] = useState([])
  const [error, setError] = useState("")
  const [filter, setFilter] = useState("Filter By")
  const [sort, setSort] = useState("Sort By")

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"))
    setTaskArr(storedTasks)
  }, []);

  function handleChange(event) {
    const value = event.target.value
    setInputTask({ item: value, marked: false })
  }


  function handleSubmit(event) {
    event.preventDefault()
    setError("")
    if (inputTask.item === "") {
      setError("Create any task")
    }
    else {
      const date = new Date().toLocaleString()
      inputTask.date = date
      setTaskArr((preItems) => {
        const updatedTasks = [...preItems, inputTask]
        localStorage.setItem("tasks", JSON.stringify(updatedTasks))
        return updatedTasks
      })
      setInputTask({ item: "", marked: "" })
    }
  }

  function deleteItems(id) {
    setTaskArr((preItems) => {
      const updatedTasks = preItems.filter((element, index) => {
        return index !== id
      })
      localStorage.setItem("tasks", JSON.stringify(updatedTasks))
      return updatedTasks
    })
  }

  function handleMark(event, element, index) {
    let mark = event.target.checked
    element.marked = mark
    setTaskArr((preItems) => {
      return [...preItems]
    })
    localStorage.setItem("tasks", JSON.stringify(taskArr))
  }

  function handleFilter(event) {
    setFilter(event.target.value)
  }

  function handleSort(event) {
    setSort(event.target.value)
  }


  return (
    <>
      <Header />
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" name="task" value={inputTask.item} placeholder="Assign task" />
          {error && <span className="error-message">{error}</span>}
          <button name="submit" type="submit">Create</button>
        </form>
        <div className="select-container">
          <select onChange={handleFilter}>
            <option>Filter By</option>
            <option>marked</option>
            <option>unmarked</option>
          </select>
          <select onChange={handleSort}>
            <option>Sort By</option>
            <option>newest to oldest</option>
            <option>oldest to newest</option>
          </select>
        </div>
      </div>
      <div>
        {filter === "Filter By" ?
          <Filter_by
            taskArr={taskArr}
            handleMark={handleMark}
            deleteItems={deleteItems}
            sort={sort}
          /> : (filter === "marked" ?
            <Marked
              taskArr={taskArr}
              sort={sort}
            /> : <Unmarked
              taskArr={taskArr}
              sort={sort}
            />)}
      </div>
    </>
  )
}
export default App

