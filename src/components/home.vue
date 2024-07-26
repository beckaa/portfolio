<template>
  <div id="welcome">
    <h1 id="hWelcome">Welcome to my Page !</h1>
    <div id="animated-content">
    <h2>Some short facts about me:</h2>
    <p id="main-content">
      <i class="bi bi-mortarboard-fill"></i>I recently
      graduated  as bachelor student. I studied media computer science at the University of
      Stuttgart.

      <br />
      <i class="bi bi-search"></i>I love programming. That's why I am looking for a job in software development.

      <br /><i
        class="bi bi-binoculars-fill"

      ></i
      >If you like this page and are interested in me as a person, then continue exploring.
    </p>
    <router-link to="/about" class="btn btn-primary btn-lg">Get to know me !</router-link>
    <div id="developing-info">Developed with:
    <svg
      height="auto"
      width="2rem"
      style="margin-left: 2vw;margin-right: 2vw; vertical-align: middle"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 261.76 226.69"
    >
      <path
        d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z"
        fill="#41b883"
      />
      <path
        d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z"
        fill="#34495e"
      />
    </svg>
    <i
      class="bi bi-bootstrap-fill"
      style="color: rgb(163, 40, 224); font-size: 2rem; vertical-align: middle"
    ></i>
    </div>
    </div>
  </div>
</template>
<script lang="ts">import { defineComponent } from "vue";

export default defineComponent({
  name: "home"
})</script>

<style scoped>
@keyframes blink {
  from{opacity: 0;}
  to {opacity: 1;}
}
#hWelcome{
  animation-name: blink;
  animation-iteration-count: 5;
  animation-duration: 200ms;
}
#animated-content{
  animation-name: appear;
  animation-duration: 4.5s;
  animation-delay: 2s;
  animation-fill-mode: both;
}
h1{
  color: rgb(255, 255, 255);
  font-family: 'Brush Script MT', cursive;
}
h2{
  color: rgb(205, 206, 234);
}
#main-content {
  color: rgb(205, 230, 255);
  font-size: 20px;
  background: rgba(33, 33, 33, 0.671);
  border-radius: 10px;
  padding: 1rem;
}
#developing-info{
  font-size: 25px;
  font-style:oblique;
  color: rgb(199, 196, 196);
  margin-top: 5vh;
  margin-bottom: 4rem;
}
.bi{
  color:rgb(8, 218, 225);
  font-size: 2rem; 
  margin-right: 1rem
}
#welcome {
  text-align: left;
  justify-content: center;
  margin: 6vh 15vw 1vh 15vw;

}
</style>
