<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    name: "cv"
  },
})
</script>

<template>
  <div id="cv-content">
    <h1>Education</h1>
    <div id="box">
      <div class="cv-point">
        <div class="date">
          <h3><i class="bi bi-rocket-takeoff-fill"></i>01/2024-today</h3>
        </div>
        <div class="title"><h4>Stage of Orientation/ Application Phase</h4></div>
      </div>
      <div class="cv-point">
        <div class="date">
          <h3><i class="bi bi-mortarboard-fill"></i>10/2018-12/2023</h3>
        </div>
        <div class="title"><h4>Bachelor of Science - Media Computer Science</h4></div>
        <div class="place"><h5>University of Stuttgart</h5></div>
        <div class="description">
          <p>
            <u style="font-size: 1.25rem">Bachelor thesis theme</u><br />Investigating the
            Correlation between Bloom's Taxonomy and Gamification in E-Learning Platforms
          </p>
          <p>
            <u style="font-size: 1.25rem">Seminar Medieninformatik</u><br />
            "Introduction to game development with Unity 2D"
          </p>
        </div>
      </div>
      <div class="cv-point">
        <div class="date">
          <h3><i class="bi bi-book-fill"></i>09/2016-07/2018</h3>
        </div>
        <div class="title"><h4>General Higher Qualification for University Entrance</h4></div>
        <div class="place"><h5>Wirtschaftsoberschule Künzelsau</h5></div>
        <div class="description"></div>
      </div>
      <div class="cv-point">
        <div class="date">
          <h3><i class="bi bi-person-workspace"></i>09/2013-08/2016</h3>
        </div>
        <div class="title"><h4>Apprenticeship as Industrial Management Assistant</h4></div>
        <div class="place"><h5>Roland Deeg GmbH, Kirchberg an der Jagst</h5></div>
        <div class="description"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.date {
  color: rgb(220, 217, 217);
}
.title {
  color: rgb(255, 255, 255);
}
.place {
  color: rgb(155, 225, 255);
}
.cv-point {
  margin-bottom: 3rem;
}
#box {
  background: rgba(33, 33, 33, 0.9);
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 6rem;
}
#cv-content {
  text-align: left;
  justify-content: center;
  margin: 6vh 15vw 1vh 15vw;
  color: white;
  animation-name: appear;
  animation-duration: 5s;
}
.bi {
  font-size: 2.5rem;
  color: rgb(8, 218, 225);
  margin-right: 0.5rem;
  vertical-align: middle;
}
</style>
