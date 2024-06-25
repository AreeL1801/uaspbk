<template>
  <tr class="todo-item">
    <td>
      <input class="todo-checkbox" type="checkbox" v-model="todo.completed" />
    </td>
    <td>
      <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
      <input
        v-if="todo.editing"
        v-model="todoEditText"
        @keyup.enter="saveTodoOnEnter"
        @blur="saveTodo"
        class="edit-input"
      />
    </td>
    <td class="button">
      <button v-if="!todo.editing" @click="editTodo" class="edit-btn">
        Edit
      </button>

      <button v-if="todo.editing" @click="saveTodo" class="ok-btn">OK</button>
      <button @click="removeTodo" class="delete-btn">Delete</button>
    </td>
  </tr>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["editTodo", "saveTodo", "removeTodo"]);

const todoEditText = ref(props.todo.text);

const editTodo = () => {
  emit("editTodo", props.index);
};

const saveTodoOnEnter = () => {
  emit("saveTodo", props.index, todoEditText.value);
};

const saveTodo = () => {
  emit("saveTodo", props.index, todoEditText.value);
};

const removeTodo = () => {
  emit("removeTodo", props.index);
};
</script>

<style scoped>
.todo-item {
  background-color: #1f2937; /* Warna latar belakang item */
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
  transition: box-shadow 0.3s ease-in-out;
}
.todo-item:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
.todo-item span {
  font-size: 1rem;
  font-weight: 800;
  color: #e0e7ff; /* Warna teks */
}
.completed {
  text-decoration: line-through;
  color: #9ca3af; /* Warna teks yang diselesaikan */
}
.edit-input {
  padding: 0.5rem;
  border: none;
  font-size: 1rem;
  border-radius: 7px;
  margin-left: 10px;
  width: 100%;
  background-color: #374151; /* Warna latar belakang input */
  color: #e0e7ff; /* Warna teks input */
}
.button {
  display: flex;
  justify-content: center;
  font-weight: 800;
}
.delete-btn {
  background-color: #f44336;
  padding: 0.5rem 1rem;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 7px;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.delete-btn:hover {
  background-color: #d32f2f;
  transform: scale(1.05);
}
.edit-btn {
  margin-right: 5px;
  background-color: #1e5ceb;
  padding: 0.5rem 1rem;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 7px;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.edit-btn:hover {
  background-color: #164a9e;
  transform: scale(1.05);
}
.ok-btn {
  margin-right: 5px;
  background-color: #008cba;
  padding: 0.5rem 1rem;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 7px;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.ok-btn:hover {
  background-color: #0073a5;
  transform: scale(1.05);
}
</style>
