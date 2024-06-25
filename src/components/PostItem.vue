<template>
  <li class="post-item">
    <h4>Title : {{ post.title }}</h4>
    <p>{{ post.body }}</p>
    <p class="by">Ditulis oleh: {{ userName }}</p>
  </li>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  getUserById: {
    type: Function,
    required: true,
  },
});

const userName = computed(() => {
  const user = props.getUserById(props.post.userId);
  return user.name;
});
</script>

<style scoped>
.post-item {
  margin-bottom: 1rem;
  border-radius: 7px;
  padding: 10px;
  background-color: #8ec4a4;
}
h4 {
  font-weight: bold;
  font-size: 1rem;
}
.by {
  margin-top: 10px;
  font-weight: bold;
}
</style>
