<script setup>
// import Home from './components/Home.vue'
import PopUp from './components/PopUp.vue'

</script>


<template>
  <header class="header fixed-top">
    <div class="container header-item" id="app">
      <router-link to="/">
        <img src="./assets/Logo.svg" alt="Logo">
      </router-link>
      
      <div class="nav">
        <router-link to="/" class="nav-item">HOME</router-link>
        <router-link to="/aboutme" class="nav-item">ABOUT ME</router-link>
        <router-link to="/contactme" class="nav-item" data-bs-toggle="modal" data-bs-target="#myModal">CONTACT ME</router-link>
      </div>
      <!-- <b-button id="show-btn" @click="showModal">Open Modal</b-button> -->
    </div>
  </header>
  <router-view/>
  
  <main>
    <!-- <Home /> -->
    <PopUp />
    
    <footer class="footer">
      <div class="social-media">
        <a href="https://www.linkedin.com/in/arum-amalia/" target="_blank">
          <img class="social-media-logo" src="./components/icons/linkedin-logo.svg">
        </a>
        <a href="https://github.com/arumamalia" target="_blank">
          <img class="social-media-logo" src="./components/icons/github-log.svg">
        </a>
        <!-- <img class="social-media-logo" src="./components/icons/gmail-logo.svg"> -->
      </div>
      
      <div class="bottom-footer">
        <p id="copy">&copy;</p>
      <p class="by">2022 designed by arum amalia</p>
    </div>
  </footer>
</main>

</template>

<script>
//importing bootstrap 5
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import { RouterLink } from 'vue-router';
export default {
    components: { RouterLink }
}
</script>

