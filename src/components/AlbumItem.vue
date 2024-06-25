<template>
  <li class="album-item">
    <div class="album-item-content">
      <h5 class="album-title">{{ album.title }}</h5>
      <router-link :to="albumLink" class="view-album-button">
        View Album
      </router-link>
    </div>
  </li>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  album: Object,
});

const router = useRouter();

// Hitung link untuk rute album
const albumLink = computed(() => `/albums/${props.album.userId}`);
</script>

<style scoped>
.album-item {
  margin-bottom: 1.5rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  display: block;
}

.album-item:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
}

.album-item-content {
  padding: 1.5rem;
}

.album-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

.view-album-button {
  display: inline-block;
  background-color:#8ec4a4;
  color: #fff;
  padding: 8px 16px;
  font-size: 14px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
}

.view-album-button:hover {
  background-color: #0056b3;
}

.view-album-button:focus {
  outline: none;
}
</style>
