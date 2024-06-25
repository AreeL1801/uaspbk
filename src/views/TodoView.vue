<template>
  <div class="todo-list">
    <h2>To Do List</h2>
    <TodoInput
      :newTodo="newTodo"
      :showCompleted="showCompleted"
      @update:newTodo="updateNewTodo"
      @addTodo="addTodo"
      @toggleCompletedFilter="toggleCompletedFilter"
    />
    <TodoList
      :todos="todos"
      :showCompleted="showCompleted"
      @editTodo="editTodo"
      @saveTodo="saveTodo"
      @removeTodo="removeTodo"
    />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useTodoStore } from "../stores/todoStore.js";
import TodoInput from "../components/TodoInput.vue";
import TodoList from "../components/TodoList.vue";

const todoStore = useTodoStore();
const { newTodo, todos, showCompleted } = storeToRefs(todoStore);
const {
  updateNewTodo,
  addTodo,
  removeTodo,
  editTodo,
  saveTodo,
  toggleCompletedFilter,
} = todoStore;
</script>

<style scoped>
.todo-list {
  margin: 7rem;
  padding: 5rem;
  width: 800px;
  background-color: #8ec4a4; /* Warna latar belakang gelap */
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}
.todo-list:hover {
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.3);
}
h2 {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 2rem;
  text-align: left;
  color: #e0e7ff; /* Warna teks cerah */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.todo-list input, .todo-list button {
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}
.todo-list input {
  background-color: #61856f; /* Warna input lebih gelap */
  color: #e0e7ff; /* Warna teks input cerah */
  font-size: 1rem;
}
.todo-list input:focus {
  background-color: #4b5563; /* Warna input saat fokus */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.todo-list button {
  background-color: #6366f1; /* Warna tombol utama */
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
}
.todo-list button:hover {
  background-color: #4f46e5; /* Warna tombol saat di-hover */
}
</style>
