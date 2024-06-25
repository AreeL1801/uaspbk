<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="navbar">
      <q-toolbar-title>
        <a href="#" class="navbar-logo">Farell Qushoyi</a>
      </q-toolbar-title>

      <div class="navbar-nav">
        <router-link to="/todos" class="nav-link">Todo</router-link>
        <router-link to="/post" class="nav-link">Post</router-link>
        <router-link to="/albums" class="nav-link">Album</router-link>
      </div>
    </q-header>
  </q-layout>
</template>
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:10px;
  background-color: #5eb47f;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

.navbar-logo {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin-left: 10px;
}

.navbar-logo:hover {
  color:#668d75;
  transition: 0.8s;
}

.navbar-logo span {
  color: #a6a6a6;
}

.q-toolbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.navbar-nav {
  display: flex;
  align-items: center;
}

.nav-link {
  color: #fff;
  font-size: 1.3rem;
  margin: 0 1rem;
  text-decoration: none;
  position: relative;
}

.nav-link:hover {
  color:#638871;
  font-weight: 700
}

.nav-link::after {
  content: "";
  display: block;
  padding-bottom: 0.5rem;
  color: #a6a6a6;
  transform: scaleX(0);
  transition: 0.2s linear;
  
}

.nav-link:hover::after {
  transform: scaleX(0.5);
}
</style>
