import { FC } from "react"

import { Todo } from "../../hooks/useTodos"

import TodoItem from "../TodoItem"

interface TodoListProps {
  todos: Todo[],
  toggleTodo: (id: string) => void,
  deleteTodo: (id: string) => void
}

const TodoList : FC <TodoListProps> = ({todos, toggleTodo, deleteTodo}) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}

export default TodoList