import { useState } from "react"
import { getNewId } from "../helpers"



export interface Todo {
  id: string,
  description: string,
  completed: boolean
}

const useTodos =() => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (description: string) => {
    setTodos([...todos, {id: getNewId(), description, completed: false}])
  }

  const toggleTodo = (id: string) => {
    setTodos((prev) => prev.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter(todo => todo.id !== id))
  }

  return {todos, addTodo, toggleTodo, deleteTodo}
}

export default useTodos