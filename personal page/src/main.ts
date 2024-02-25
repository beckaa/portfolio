import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import"bootstrap-icons/font/bootstrap-icons.min.css"
import 'bootstrap'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import home from './components/home.vue'
import about from './components/about.vue'
import projects from './components/projects.vue'
import cv from "./components/curriculumvitae.vue"

const app = createApp(App)

const routes = [
  { path: '/', component: home },
  { path: '/about', component: about },
  { path: '/projects', component: projects },
  { path: '/cv', component: cv }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
app.use(router)
app.mount('#app')
