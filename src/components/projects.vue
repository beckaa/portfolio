<template>
  <div id="pro-content">
    <h1>Projects</h1>
    <a href="https://github.com/beckaa" style="color: white; margin-bottom: 2rem"
      ><i class="bi bi-github"></i>https://github.com/beckaa</a
    >
    <div id="pro-container">
      <div class="project">
        <div class="card">
          <img src="../assets/animalstreet.png" class="card-img-top" />
          <a
            href="https://beckaa.github.io/AnimalStreetCrossing/WebglBuild/index.html"
            style="color: white"
            ><h4 class="card-title">Animal Street Crossing</h4></a
          >
          <h5 class="card-subtitle">Under Construction</h5>
        </div>
      </div>
      <div class="project">
        <div class="card">
          <img src="../assets/batland.png" class="card-img-top" />
          <a href="https://beckaa.github.io/Batland/" style="color: white"
            ><h4 class="card-title">Batland (2020)</h4></a
          >
          <h5 class="card-subtitle">University project with JavaScript</h5>
        </div>
      </div>
      <div class="project">
        <div class="card">
          <img src="../assets/qquiz.png" class="card-img-top" />
          <a href="https://beckaa.github.io/QQuizzer/webglBuild/index.html" style="color: white"
            ><h4 class="card-title">QQuizzer</h4></a
          >
          <h5 class="card-subtitle"></h5>
        </div>
      </div>
    </div>
    <h5 style="margin-bottom: 5rem">More to come....</h5>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'projects'
})
</script>

<style scoped>
#pro-container {
  display: flex;
  flex-wrap: wrap;
}
#pro-content {
  text-align: left;
  justify-content: center;
  margin: 2vh 15vw 1vh 15vw;
  color: white;
  animation-name: appear;
  animation-duration: 4.5s;
}
.card {
  color: white;
  margin: 0rem 2rem 4rem 0rem;
  min-width: 330px;
  width: 25vw;
  height: fit-content;
  background: rgba(33, 33, 33, 0.671);
  border-radius: 10px;
  padding: 1rem;
}
.card-subtitle {
  color: rgb(225, 225, 225);
}
.bi {
  font-size: 3rem;
  color: rgb(231, 231, 231);
  margin-right: 0.5rem;
  vertical-align: middle;
}
</style>
