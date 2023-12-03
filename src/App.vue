<script setup>
import PopUp from './components/PopUp.vue'
import Projects from './components/Projects.vue'

</script>

<template id="desktop">
  <header class="header fixed-top">
    <div class="container header-item" id="app">
      <router-link to="/">
        <img src="./assets/Logo.svg" alt="Logo" id="logo">
      </router-link>

      <div class="nav">
        <router-link to="/" class="nav-item">HOME</router-link>
        <router-link to="/aboutme" class="nav-item">ABOUT ME</router-link>
        <router-link to="/contactme" class="nav-item" data-bs-toggle="modal" data-bs-target="#myModal">CONTACT
          ME</router-link>
      </div>
    </div>
  </header>
  <router-view />

  <main>
    <PopUp />
    <Projects />

    <footer class="footer">
      <div class="social-media">
        <a href="https://www.linkedin.com/in/arum-amalia/" target="_blank">
          <img class="social-media-logo" src="./components/icons/linkedin-logo.svg">
        </a>
        <a href="https://github.com/arumamalia" target="_blank">
          <img class="social-media-logo" src="./components/icons/github-log.svg">
        </a>
      </div>

      <div class="bottom-footer">
        <p id="copy">&copy;</p>
        <p class="by">{{ new Date().getFullYear() }} designed by arum amalia</p>
      </div>
      <p class="bottom-dev by">develop using <img width="25" src="./assets/logo.png"> </p>
    </footer>
  </main>
</template>

<script>

import { RouterLink } from 'vue-router';
export default {
  components: { RouterLink },
  data() {
    return {
      currYear: new Date().getFullYear(),
    };
  },
}

</script>

