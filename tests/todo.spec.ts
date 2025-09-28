import { describe, it, expect } from 'vitest'

// Simple todo interface for testing
interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: Date
}

// Todo utility functions
function createTodo(text: string, id: number): Todo {
  return {
    id,
    text,
    completed: false,
    createdAt: new Date()
  }
}

function toggleTodo(todo: Todo): Todo {
  return {
    ...todo,
    completed: !todo.completed
  }
}

describe('Todo functionality', () => {
  it('should create a todo item', () => {
    const todo = createTodo('Test todo', 1)
    
    expect(todo.text).toBe('Test todo')
    expect(todo.completed).toBe(false)
    expect(todo.id).toBe(1)
    expect(todo.createdAt).toBeInstanceOf(Date)
  })

  it('should toggle todo completion', () => {
    const todo = createTodo('Test todo', 1)
    const toggledTodo = toggleTodo(todo)
    
    expect(toggledTodo.completed).toBe(true)
    expect(toggledTodo.id).toBe(todo.id)
    expect(toggledTodo.text).toBe(todo.text)
  })

  it('should toggle todo completion back to false', () => {
    const todo = createTodo('Test todo', 1)
    const toggledOnce = toggleTodo(todo)
    const toggledTwice = toggleTodo(toggledOnce)
    
    expect(toggledTwice.completed).toBe(false)
  })
})