<template>
  <div class="container">
    <h1>Fitur Posting</h1>
    <div class="container-post">
      <div class="user-select">
        <label for="user">Pilih User: </label>
        <select id="user" v-model="selectedUser">
          <option :value="null">Semua User</option>
          <option v-for="user in users" :key="user.id" :value="user.id">
            {{ user.name }}
          </option>
        </select>
      </div>
      <div class="post-list">
        <h5 v-if="filteredPosts.length > 0">Postingan dari {{ nameFormat }}</h5>
        <h5 v-else>No posts available</h5>
        <ul class="posts-grid">
          <PostItem
            v-for="post in filteredPosts"
            :key="post.id"
            :post="post"
            :getUserById="getUserById"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import PostItem from "../components/PostItem.vue";

const users = ref([]);
const selectedUser = ref(null);
const posts = ref([]);

const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    users.value = data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
};

const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    posts.value = data;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }
};

const filteredPosts = computed(() => {
  if (selectedUser.value === null) {
    return posts.value;
  }
  return posts.value.filter((post) => post.userId === selectedUser.value);
});

onMounted(() => {
  fetchUsers();
  fetchPosts();
});

const getUserById = (userId) => {
  return (
    users.value.find((user) => user.id === userId) || {
      name: "User Tidak Ditemukan",
    }
  );
};

const nameFormat = computed(() => {
  if (selectedUser.value === null) {
    return "Semua User";
  }
  const user = getUserById(selectedUser.value);
  return user.name;
});
</script>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: 800;
  padding-top: 2rem;
  text-align: left;
  color: #fff;
}

.container {
  margin: 7rem ;
  padding:20px;
  width: 800px;
  background-color: #5da18b;
  border-radius: 7px;
  color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.container-post {
  padding: 2rem;
}

.user-select {
  margin-bottom: 1.5rem;
}

label {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
}

select {
  appearance: none;
  -webkit-appearance: none;
  font-size: 1rem;
  padding: 8px;
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  list-style: none;
  padding: 0;
}

.post-list {
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

h5 {
  font-weight: bold;
  font-size: 1.2rem;
  margin: 1rem 0;
  color: #333;
}
</style>
