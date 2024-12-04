'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { addTodo } from '../../lib/actions'

export function AddTodoForm() {
  const [text, setText] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      await addTodo(text)
      setText('')
      //router.refresh()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Todo
      </button>
    </form>
  )
}

