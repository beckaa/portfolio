<script setup lang="ts">
import navigation from './components/navigation.vue'
</script>

<template>
  <main>
    <header>
      <navigation></navigation>
    </header>
    <router-view></router-view>
    <footer>Created by Anja Beck</footer>
  </main>
  
</template>

<style>
@keyframes appear{
  from {opacity: 0;}
  to {opacity: 1;}
}

.btn-primary{
  background-color: rgb(1, 157, 89);
  border: rgba(14, 63, 1, 0.003);
  --bs-btn-active-bg: rgb(33, 107, 63);
}
.btn-primary:hover{
 background: rgb(33, 107, 63);
}

#app {
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  width: inherit;
  position: relative;
}
h1
 {
  color: rgb(235, 235, 240);
  margin-top: 20px;
  font-family: "Brush Script MT", cursive;
  font-size: 4rem;
}
body {
  background-color: rgb(35, 35, 35);
  place-items: normal;
  padding: 0;
  margin: 0;
  width: 100vw;
}
header {
  place-content: start;
  min-height: fit-content;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: rgb(35, 35, 35);
  min-width: 100vw;
}
footer {
  height: 5vh;
  max-height: 40px;
  background: rgb(56, 55, 55);
  color: white;
  text-align: center;
  padding: 0.5rem;
  width: 100vw;
  position: absolute;
  bottom:0;
}
</style>
