import { FC } from "react";
import { Todo } from "../../hooks/useTodos";

interface TodoItemProps {
  todo: Todo,
  toggleTodo: (id: string) => void,
  deleteTodo: (id: string) => void
}

const TodoItem : FC <TodoItemProps> = ({todo, toggleTodo, deleteTodo}) => {

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.description}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>  )
}

export default TodoItem