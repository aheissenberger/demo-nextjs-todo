import { Todo } from './types'

let todos: Todo[] = [
  { id: 1, text: 'Learn React Server Components', completed: false },
  { id: 2, text: 'Build a todo app', completed: false },
]

export async function getTodos(): Promise<Todo[]> {
  return todos
}

export async function addTodoToStore(text: string): Promise<void> {
  const newTodo: Todo = {
    id: todos.length + 1,
    text,
    completed: false,
  }
  todos.push(newTodo)
}

export async function toggleTodoInStore(id: number): Promise<void> {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  )
}

export async function deleteTodoFromStore(id: number): Promise<void> {
  todos = todos.filter((todo) => todo.id !== id)
}

