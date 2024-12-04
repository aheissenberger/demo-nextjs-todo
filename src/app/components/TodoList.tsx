import { TodoItem } from './TodoItem'
import { Todo } from '../../lib/types'

export function TodoList({ initialTodos }: { initialTodos: Todo[] }) {
  return (
    <ul>
      {initialTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

