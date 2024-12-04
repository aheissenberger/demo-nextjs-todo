'use server'

import { revalidatePath } from 'next/cache'
import { addTodoToStore, toggleTodoInStore, deleteTodoFromStore } from './todos'

export async function addTodo(text: string) {
  await addTodoToStore(text)
  revalidatePath('/')
}

export async function toggleTodo(id: number) {
  await toggleTodoInStore(id)
}

export async function deleteTodo(id: number) {
  await deleteTodoFromStore(id)
}

