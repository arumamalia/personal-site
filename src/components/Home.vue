<template>
  <div class="container profile">
    <div class="profile-desc">
      <div>
        <p class="greet"></p>
        <p class="name">Arum Amalia</p>
      </div>
      <div>
        <p class="desc">An independent and highly-motivated Back End Developer with experience in software developing.
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
            <p class="job">Back End Developer</p>
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
        <p class="desc-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a malesuada risus.</p>
      </div>
    </div>
    <div class="group-services">
      <div class="group-services1">
        <div class="sub-services be-sub-services">
          <img class="icon" src="./icons/BE-icon.svg">
          <p class="job-services">Back End</p>
          <p class="job-desc-services">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a malesuada
            risus.</p>
        </div>
      </div>

      <div class="group-services2">
        <div class="sub-services fe-sub-services">
          <img class="icon" src="./icons/FE-icon.svg">
          <p class="job-services">Front End</p>
          <p class="job-desc-services">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a malesuada
            risus.</p>
        </div>

        <div class="sub-services uiux-sub-services">
          <img class="icon" src="./icons/UI-UX-icon.svg">
          <p class="job-services">UI/UX</p>
          <p class="job-desc-services">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a malesuada
            risus.</p>
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
        <p class="desc-title-projects">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a malesuada
          risus.</p>
      </div>
    </div>

    <div class="content-area">
      <div class="sub-content">
        <img class="arrow-left arrow" src="./icons/arrow-left.svg">
        <div class="list-content">
          <img src="./icons/content1.svg">
          <img src="./icons/content2.svg">
          <img src="./icons/content3.svg">
        </div>
        <img class="arrow-right arrow" src="./icons/arrow-right.svg">
      </div>

      <div class="scroll-wrapper">
        <div class="scroll-bar">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Home"
}
</script>


