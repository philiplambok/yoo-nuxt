<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <NuxtRouteAnnouncer />
    <div class="max-w-2xl mx-auto px-4">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">
          Todo App
        </h1>
        
        <div class="mb-6">
          <div class="flex gap-2">
            <UInput
              v-model="newTodo"
              placeholder="Add a new todo..."
              class="flex-1"
              @keyup.enter="addTodo"
            />
            <UButton :disabled="!newTodo.trim()" @click="addTodo">
              Add
            </UButton>
          </div>
        </div>

        <div class="mb-6">
          <div class="flex gap-4 text-sm text-gray-600">
            <span>Total: {{ todos.length }}</span>
            <span>Pending: {{ pendingCount }}</span>
            <span>Completed: {{ completedCount }}</span>
          </div>
        </div>

        <div class="space-y-2">
          <div
            v-for="todo in todos"
            :key="todo.id"
            class="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50"
          >
            <UCheckbox
              :model-value="todo.completed"
              @update:model-value="toggleTodo(todo.id)"
            />
            <span
              :class="[
                'flex-1',
                todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
              ]"
            >
              {{ todo.text }}
            </span>
            <UButton
              color="red"
              variant="ghost"
              size="sm"
              @click="removeTodo(todo.id)"
            >
              Delete
            </UButton>
          </div>
        </div>

        <div v-if="todos.length === 0" class="text-center text-gray-500 py-8">
          No todos yet. Add one above to get started!
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from '../stores/todo'

const todoStore = useTodoStore()
const { todos, completedCount, pendingCount, addTodo: addTodoToStore, removeTodo, toggleTodo } = todoStore

const newTodo = ref('')

const addTodo = () => {
  if (newTodo.value.trim()) {
    addTodoToStore(newTodo.value)
    newTodo.value = ''
  }
}
</script>
