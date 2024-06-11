<template>
  <div id="about-content">
    <h1>About Me</h1>
    <h4 id="quote"><q>To be successful, you only need one chance.</q> - Jesse Owens</h4>
    <div id="about-information">
      <img src="../assets/me.jpg" id="mypicture" />
      <p>
        Hi, I am Anja. Recently, I graduated with a bachelor's degree from the University of
        Stuttgart. I am looking for a job in software development to further enhance my skills.
        In my studies I could gather the skills shown in the section below. <br /><br />
        If you are interested in working with me you can leave me message <br />
        <a href="https://www.linkedin.com/in/beckanja"
          ><i class="bi bi-linkedin" style="color: rgb(239, 235, 235); font-size: 2rem"></i
          >https://www.linkedin.com/in/beckanja</a
        >
        <br />
        <a href="mailto:anjabeck@protonmail.com"
          ><i class="bi bi-envelope-at-fill" style="color: rgb(239, 235, 235); font-size: 2rem"></i>
          anjabeck@protonmail.com</a
        >
        <br />
        Are you interested in my education path? Look <router-link to="/cv">Here</router-link>.
      </p>
    </div>
    <h1>My Skills</h1>
    <div id="skills">
      <div class="field">
        <h6>Programming Languages</h6>
        <p>
          <span class="badge rounded-pill text-bg-primary">C#</span>
          <span class="badge rounded-pill text-bg-primary">Java</span>
          <span class="badge rounded-pill text-bg-primary">Python</span>
          <span class="badge rounded-pill text-bg-primary">Processing</span>
          <span class="badge rounded-pill text-bg-primary">HTML</span>
          <span class="badge rounded-pill text-bg-primary">CSS</span>
          <span class="badge rounded-pill text-bg-primary">JavaScript</span>
          <span class="badge rounded-pill text-bg-primary">SQL</span>
        </p>
      </div>

      <div class="field">
        <h6>Game Development</h6>
        <p>
          <span class="badge rounded-pill text-bg-primary">Unity 2D/3D</span> <br />
          Known: Unreal Engine
        </p>
      </div>

      <div class="field">
        <h6>Prototyping</h6>
        <p><span class="badge rounded-pill text-bg-primary">Axure RP</span></p>
      </div>

      <div class="field">
        <h6>Web Development</h6>
        <p>
          <span class="badge rounded-pill text-bg-primary">Vue.js</span>

          <span class="badge rounded-pill text-bg-primary">Bootstrap</span>
          <span class="badge rounded-pill text-bg-primary">Chart.js</span><br />
          Known: Angular, React <br />
        </p>
      </div>

      <div class="field">
        <h6>Tools</h6>
        <p>
          <span class="badge rounded-pill text-bg-primary">NPM</span>
          <span class="badge rounded-pill text-bg-primary">Node.js</span>
          <span class="badge rounded-pill text-bg-primary">Git</span>
        </p>
      </div>

      <div class="field">
        <h6>Others</h6>
        <p>
          <span class="badge rounded-pill text-bg-primary">Scrum</span>
          <span class="badge rounded-pill text-bg-primary">Object oriented programming</span>
        </p>
      </div>
    </div>

    <h1>My favourite Activities</h1>
    <div id="grid-container">
      <div class="card">
        <div class="card-body">
          <img src="../assets/kalimba.jpg" class="card-img-top" />
          <h4 class="card-title"><i class="bi bi-music-note-beamed"></i>Kalimba</h4>
          <div class="card-text"></div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <img src="../assets/aquaristic.jpg" class="card-img-top" />
          <h4 class="card-title"><i class="bi bi-emoji-smile-fill"></i>Aquaristic</h4>
          <div class="card-text"></div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <img src="../assets/ProgrammingIm.jpg" class="card-img-top" />
          <h4 class="card-title"><i class="bi bi-file-code"></i>Minigame Programming</h4>
          <div class="card-text" style="text-align: center; margin-top: 1.5rem">
            <router-link to="/projects" class="btn btn-primary">Go to Projects</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "about"
})
</script>

<style scoped>
#quote{
  text-align: center;
  font-family: "Brush Script MT", cursive;
  font-size: 3rem;
  background: -webkit-linear-gradient(left,rgb(132, 132, 132) 30%,rgb(220, 220, 220) 50%, rgb(95, 94, 94) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
.text-bg-primary {
  color: white !important;
  background-color: rgb(7, 135, 135) !important;
  margin-right: 1rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;
}
#skills {
  display: flex;
  flex-wrap: wrap;
  color: white;
  place-content: center;
}
.field {
  margin: 1rem;
  background: rgba(33, 33, 33, 0.671);
  border-radius: 10px;
  padding: 1rem;
  min-width: 250px;
  max-width: 18vw;
}
a {
  color: rgb(214, 213, 213);
}
#about-information {
  color: white;
  font-size: 18px;
  display: inline-block;
  background: rgba(33, 33, 33, 0.671);
  border-radius: 10px;
  padding: 1rem;
}

#mypicture {
  width: 200px;
  border-radius: 10px;
  margin-right: 2rem;
  float: left;
}
#information {
  display: flex;
  flex-wrap: wrap;
}
h1 {
  margin-bottom: 3rem;
  text-align: center;
}

h4 {
  color: white;
}
#grid-container {
  display: flex;
  flex-wrap: wrap;
  place-content: center;
}
.card {
  margin: 0rem 2rem 4rem 0rem;
  min-width: 288px;
  width: 15vw;
  height: fit-content;
  background: rgba(33, 33, 33, 0.671);
  border-radius: 10px;
  padding: 1rem;
}
.bi {
  font-size: 3rem;
  color: rgb(8, 218, 225);
  margin-right: 0.5rem;
  vertical-align: middle;
}
#about-content {
  text-align: left;
  justify-content: center;
  margin: 2vh 15vw 1vh 15vw;
  animation-name: appear;
  animation-duration: 4.5s;
  animation-fill-mode: both;
}
</style>
