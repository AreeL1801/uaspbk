<template>
  <div class="input-container">
    <q-input
      class="todo-input"
      v-model="localNewTodo"
      @keyup.enter="addTodo"
      placeholder="Add new todo"
      outlined
      dense
      clearable
      input-class="custom-input"
      style="background-color: white; border-radius: 10px; color: #e0e7ff"
    />
    <q-btn
      @click="addTodo"
      class="submit-btn"
      label="Add"
      style="background-color: #6366f1; color: #fff"
    />
    <q-btn
      @click="toggleCompletedFilter"
      class="filter-btn"
      :label="showCompleted ? 'Hide Completed' : 'Show Completed'"
      style="background-color: #ffcc00; color: #fff; margin-left: 10px"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { QInput, QBtn } from "quasar";

const props = defineProps({
  newTodo: {
    type: String,
    required: true,
  },
  showCompleted: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits([
  "update:newTodo",
  "addTodo",
  "toggleCompletedFilter",
]);

const localNewTodo = ref(props.newTodo);

watch(
  () => props.newTodo,
  (newVal) => {
    localNewTodo.value = newVal;
  }
);

const addTodo = () => {
  if (localNewTodo.value.trim() !== "") {
    emit("addTodo", localNewTodo.value);
    emit("update:newTodo", "");
  }
};

const toggleCompletedFilter = () => {
  emit("toggleCompletedFilter");
};
</script>

<style scoped>
.input-container {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  background-color: #2b3e50; /* Warna latar belakang */
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
}
.input-container:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}
.todo-input {
  flex: 1;
  margin-right: 10px;
  background-color: white;
}
.custom-input {
  padding: 0.5rem;
  font-size: 1rem;
  color: #e0e7ff; /* Warna teks input */
}
.submit-btn,
.filter-btn {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: 14px;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.submit-btn:hover {
  background-color: #4f46e5;
  transform: scale(1.05);
}
.filter-btn:hover {
  background-color: #e6b800;
  transform: scale(1.05);
}
</style>
