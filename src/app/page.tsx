import { TodoList } from './components/TodoList'
import { AddTodoForm } from './components/AddTodoForm'
import { getTodos } from '../lib/todos'

export default async function Home() {
  const todos = await getTodos()

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <AddTodoForm />
      <TodoList initialTodos={todos} />
    </main>
  )
}

