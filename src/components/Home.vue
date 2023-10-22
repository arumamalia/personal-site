<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { ref } from 'vue';
</script>

<template>
  <div class="container profile">
    <div class="profile-desc">
      <div>
        <p class="greet"></p>
        <p class="name">Arum Amalia</p>
      </div>
      <div>
        <p class="desc">An independent and highly-motivated Developer with experience in software programming.
        </p>
      </div>
      <div>
        <button class="button" id="btn-contact" data-bs-toggle="modal" data-bs-target="#myModal">Contact Me</button>
      </div>
    </div>

    <div class="profile-pic">
      <img class="rotate-center rotate" src="./icons/astronaut1.svg">
      <router-link to="/aboutme">
        <div class="card-name shake-vertical">
          <img class="img-small" src="./icons/fotopic.svg">
          <div class="job-name">
            <p class="name-small">Arum Amalia</p>
            <p class="job">Front End Developer</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>

  <div class="container services">
    <div class="title-services">
      <img class="img-services" src="./icons/astronaut2.svg">
      <div class="services-desc">
        <div>
          <p class="coal-font">My</p>
          <p class="yellow-font">Services</p>
        </div>
        <p class="desc-font">Provide development, innovation, collaboration, and creativity in Information Technology sector.</p>
      </div>
    </div>
    <div class="group-services">
      <div class="group-services1">
        <div class="sub-services be-sub-services rotate-center">
          <img class="icon" src="./icons/BE-icon.svg">
          <p class="job-services">Back End</p>
          <p class="job-desc-services">PHP, Javascript, Golang, SQL Server, Postman.</p>
        </div>
      </div>

      <div class="group-services2">
        <div class="sub-services fe-sub-services rotate-center">
          <img class="icon" src="./icons/FE-icon.svg">
          <p class="job-services">Front End</p>
          <p class="job-desc-services">HTML, CSS, jQuery, Vue.js, CodeIgniter.</p>
        </div>

        <div class="sub-services uiux-sub-services rotate-center">
          <img class="icon" src="./icons/UI-UX-icon.svg">
          <p class="job-services">UI/UX</p>
          <p class="job-desc-services">Figma</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container projects">
    <div class="title-projects">
      <div class="img-title-projects">
        <img class="img-project-1" src="./icons/astronaut3.svg">
        <img class="img-project-2 rotate-center-360deg" src="./icons/big-star.svg">
        <img class="img-project-3" src="./icons/lil-star.svg">
      </div>
      <div class="sub-desc-title-projects">
        <div class="sub-title-projects">
          <p id="my">My</p>
          <p id="projects">Projects</p>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex align-items-center">
    <button class="btn" @click="prev(); adjust_scrollbar_prev();">
      <img src="../components/icons/arrow-left.svg">
    </button>
    <Carousel :wrap-around="true" :breakpoints="breakpoints" class="wrap" ref="navigation">
        <Slide v-for="slide in slides" :key="slide.id" >
            <div class="carousel__item slide-item">
              <img width="325" :src = slide.image >
              <div class="slide-title">
                <div class="slide-role">
                  <p class="slide-role__text">{{ slide.role }}</p>
                </div>
                <p class="slide-title__text">{{ slide.title }}</p>
              </div>
            </div>
          </Slide> 
                
        <template #addons>
          <div class="nav-page">
            <Pagination />
          </div>

        </template>
      </Carousel>
      <button class="btn" @click="next(); adjust_scrollbar_next();">
        <img src="../components/icons/arrow-right.svg">
      </button>
  </div>

  <br>

</template>

<style>

.slide {
  box-shadow: 0 6px 15px -3px rgb(0 0 0/0.3);
  padding: 25px;
  border-radius: 5px;
  background: rgb(202, 202, 202);
  color: #000;
}

.carousel__item {
  position: relative;
  font-size: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  /* padding: 10px; */
}

.carousel__prev,
.carousel__next {
  /* box-sizing: content-box; */
  /* border: 5px solid white; */
}

.nav-item{
  /* display: flex;
  gap: 200px; */
}

.wrap{
  width: 1000px;
}

.nav-page{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
  background-color: #F9BA32;
}

.carousel__pagination-button::after {
  height: 10px;
  width: 10px;
  border-radius: 10px;
}

</style>

<script>
const navigation = ref(null);

export default {
  name: "App",
  data: () => ({   
    currentSlide: 0,
    breakpoints: {
      // 700px and ups
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
    },
    contentIndex: 0,
    slides:  [
      { id: '1', image: require('./icons/LOS.png'), title: 'LOS CMS', role: 'FE'},
      { id: '2', image: require('./icons/portraiture.png'), title: 'Portraiture', role: 'BE'},
      { id: '3', image: require('./icons/paradise-project.png'), title: 'Paradise Project', role: 'UI'},
    ],
    long_scrollbar_width: 744,
    adjust_scrollbar: 0,
    scrollbar: 0
  }),
  methods: {
    next () {
      navigation.value.next();
    },
    prev() {
      navigation.value.prev();
    },
    adjust_scrollbar_prev () {
     this.adjust_scrollbar = this.long_scrollbar_width / this.slides.length
     if (this.scrollbar > this.adjust_scrollbar) {
       this.scrollbar -= this.adjust_scrollbar 
     } else {
        this.scrollbar = this.long_scrollbar_width
     }
    },
    adjust_scrollbar_next () {
     this.adjust_scrollbar = this.long_scrollbar_width / this.slides.length
     if (this.scrollbar < this.long_scrollbar_width) {
      this.scrollbar += this.adjust_scrollbar 
     } else {
      this.scrollbar = this.adjust_scrollbar
     }
    }

  },
  mounted(){
    this.scrollbar = this.long_scrollbar_width / this.slides.length;
  },
  updated(){
    console.log(this.scrollbar);
  }
};
</script>
