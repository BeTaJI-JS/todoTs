import { useState } from 'react'

import { FC } from 'react'
import './App.css'
import useTodos from './hooks/useTodos'
import TodoList from './components/TodoList'

const  App : FC = () => {
const {todos, addTodo, toggleTodo, deleteTodo} = useTodos()
const [inputValue, setInputValue] = useState('')

const handleAddTodo = (): void => {
  if(inputValue) {
    addTodo(inputValue.trim())
    setInputValue('')
  }
}

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Введите описание задачи'
      />
      <button
        onClick={handleAddTodo}
      >
        Add
      </button>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}
export default App


