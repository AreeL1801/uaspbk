<template>
  <table class="todo-table">
    <thead>
      <tr>
        <th>Completed</th>
        <th>To Do</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(todo, index) in filteredTodos" :key="index" class="todo-item">
        <td>
          <input
            class="todo-checkbox"
            type="checkbox"
            v-model="todo.completed"
          />
        </td>
        <td>
          <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
          <input
            v-if="todo.editing"
            v-model="todoEditText"
            @keyup.enter="saveTodoOnEnter(index)"
            @blur="saveTodo(index)"
            class="edit-input"
          />
        </td>
        <td class="button">
          <button
            v-if="!todo.editing"
            @click="editTodo(index)"
            class="edit-btn"
          >
            Edit
          </button>
          <button v-if="todo.editing" @click="saveTodo(index)" class="ok-btn">
            OK
          </button>
          <button @click="removeTodo(index)" class="delete-btn">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  todos: {
    type: Array,
    required: true,
  },
  showCompleted: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["editTodo", "saveTodo", "removeTodo"]);

const todoEditText = ref("");

const filteredTodos = computed(() => {
  if (props.showCompleted) {
    return props.todos;
  } else {
    return props.todos.filter((todo) => !todo.completed);
  }
});

const editTodo = (index) => {
  emit("editTodo", index);
};

const saveTodoOnEnter = (index) => {
  emit("saveTodo", index, todoEditText.value);
};

const saveTodo = (index) => {
  emit("saveTodo", index, todoEditText.value);
};

const removeTodo = (index) => {
  emit("removeTodo", index);
};

watch(filteredTodos, (newVal) => {
  newVal.forEach((todo) => {
    if (todo.editing) {
      todoEditText.value = todo.text;
    }
  });
});
</script>

<style scoped>
.todo-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.todo-table th,
.todo-table td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  text-align: center;
}

.todo-table th {
  background-color: #526d82; /* Warna latar belakang header */
  color: #fff; /* Warna teks header */
  font-weight: bold;
}

.todo-table td {
  background-color: #f2f2f2; /* Warna latar belakang sel */
}

.todo-item {
  background-color: #fff; /* Warna latar belakang item */
  border-radius: 8px;
  margin-bottom: 10px;
  transition: box-shadow 0.3s ease;
}

.todo-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.todo-item span {
  font-size: 1rem;
  font-weight: 600;
  color: #333; /* Warna teks */
}

.completed {
  text-decoration: line-through;
  color: #999; /* Warna teks yang diselesaikan */
}

.edit-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.delete-btn,
.edit-btn,
.ok-btn {
  margin: 0 5px;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.delete-btn {
  background-color: #f44336; /* Warna tombol hapus */
  color: #fff; /* Warna teks tombol hapus */
}

.delete-btn:hover {
  background-color: #d32f2f; /* Warna tombol hapus saat dihover */
}

.edit-btn {
  background-color: #1e88e5; /* Warna tombol edit */
  color: #fff; /* Warna teks tombol edit */
}

.edit-btn:hover {
  background-color: #1565c0; /* Warna tombol edit saat dihover */
}

.ok-btn {
  background-color: #4caf50; /* Warna tombol OK */
  color: #fff; /* Warna teks tombol OK */
}

.ok-btn:hover {
  background-color: #388e3c; /* Warna tombol OK saat dihover */
}
</style>
