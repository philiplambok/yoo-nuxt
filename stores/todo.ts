import { defineStore } from 'pinia'

export interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: Date
}

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])
  const nextId = ref(1)

  const addTodo = (text: string) => {
    if (text.trim()) {
      todos.value.push({
        id: nextId.value++,
        text: text.trim(),
        completed: false,
        createdAt: new Date()
      })
    }
  }

  const removeTodo = (id: number) => {
    const index = todos.value.findIndex((todo: Todo) => todo.id === id)
    if (index > -1) {
      todos.value.splice(index, 1)
    }
  }

  const toggleTodo = (id: number) => {
    const todo = todos.value.find((todo: Todo) => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

  const completedCount = computed(() => 
    todos.value.filter((todo: Todo) => todo.completed).length
  )

  const pendingCount = computed(() => 
    todos.value.filter((todo: Todo) => !todo.completed).length
  )

  return {
    todos: readonly(todos),
    addTodo,
    removeTodo,
    toggleTodo,
    completedCount,
    pendingCount
  }
})