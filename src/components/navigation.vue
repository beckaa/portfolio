<template>
  <nav class="nav nav-pills nav-fill flex-column flex-sm-row">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/about" class="nav-link">About Me</router-link>
    <router-link to="/cv" class="nav-link">Education</router-link>
    <router-link to="/projects" class="nav-link">My Projects</router-link>
  </nav>
</template>

<style scoped>
.nav {
  height: fit-content;
  font-size: 25px;
  background-color: rgb(20, 19, 19);
}
.nav-link {
  color: rgb(140, 140, 140);
}
.nav :hover {
  color: white;
  background-color: rgb(80, 80, 80);
}
.nav .router-link-exact-active {
  background-color: grey;
  color: white;
}
</style>
