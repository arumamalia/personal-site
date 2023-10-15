<script setup>
import Experience from '../components/Experience.vue'
import Education from '../components/Education.vue'
import Achievements from '../components/Achievements.vue'
import Expertise from '../components/Expertise.vue'
import Languages from '../components/Languages.vue'
import Volunteer from '../components/Volunteer.vue'
</script>

<template>
  <div class="container about-me">
    <img width="356" src="../components/icons/fotopic.svg">
    <div class="profile-about-me">
      <div class="name-job">
        <p class="name-about-me">ARUM AMALIA</p>
        <p class="job-about-me">Front End Developer</p>
      </div>
      <div class="location">
        <div class="logo-location">
          <lord-icon src="https://cdn.lordicon.com/oaflahpk.json" trigger="loop" delay="500" colors="primary:#AC0F0F"
            state="hover-jump" style="width:250px;height:250px">
          </lord-icon>
        </div>
        <p class="font-location">Jakarta, Indonesia</p>
      </div>
      <div>
        <button class="button" data-bs-toggle="modal" data-bs-target="#myModal">Contact Me</button>
      </div>
    </div>
  </div>

  <div class="planets">
    <div class="sun">
      <img class="rotate-sun-bright" src="../components/icons/sun-bright.svg">
      <img class="sun-flex rotate-sun-flex" src="../components/icons/sun-flex.svg">
    </div>
    <div class="experience-planet sub-planet shake-vertical-up" :class="{ active: active === 'experience' }">
      <div class="tag-planet">
        <p class="font-planet">Experience</p>
        <div class="arrow-tag">
          <div class="bullet-tag"></div>
          <div class="line-tag"></div>
        </div>
      </div>
      <button class="button-image" @click="setActive('experience')">
        <img class="experience-planet-main" src="../components/icons/experience-planet.svg">
      </button>
    </div>

    <div class="education-planet sub-planet shake-vertical-down" :class="{ active: active === 'education' }">
      <div class="tag-planet">
        <p class="font-planet">Education</p>
        <div class="arrow-tag">
          <div class="bullet-tag"></div>
          <div class="line-tag"></div>
        </div>
      </div>
      <button class="button-image" @click="setActive('education')">
        <img class="education-planet-main" src="../components/icons/education.svg">
      </button>
    </div>
    <div class="expertise-planet sub-planet shake-vertical-up" :class="{ active: active === 'expertise' }">
      <div class="tag-planet">
        <p class="font-planet">Expertise</p>
        <div class="arrow-tag">
          <div class="bullet-tag"></div>
          <div class="line-tag"></div>
        </div>
      </div>
      <button class="button-image" @click="setActive('expertise')">
        <img class="expertise-planet-main" src="../components/icons/expertise-planet.svg">
      </button>
    </div>
    <div class="languages-planet sub-planet shake-vertical-down" :class="{ active: active === 'languages' }">
      <div class="tag-planet">
        <p class="font-planet">Languages</p>
        <div class="arrow-tag">
          <div class="bullet-tag"></div>
          <div class="line-tag"></div>
        </div>
      </div>
      <button class="button-image" @click="setActive('languages')">
        <img class="languages-planet-main" src="../components/icons/languages-planet.svg">
      </button>
    </div>
    <div class="achievements-planet sub-planet shake-vertical-up" :class="{ active: active === 'achievements' }">
      <div class="tag-planet">
        <p class="font-planet">Achievements</p>
        <div class="arrow-tag">
          <div class="bullet-tag"></div>
          <div class="line-tag"></div>
        </div>
      </div>
      <button class="button-image" @click="setActive('achievements')">
        <img class="achievements-planet-main" src="../components/icons/achievements-planet.svg">
      </button>
    </div>
    <div class="volunteer-planet sub-planet shake-vertical-down" :class="{ active: active === 'volunteer' }">
      <div class="tag-planet">
        <p class="font-planet">Volunteer</p>
        <div class="arrow-tag">
          <div class="bullet-tag"></div>
          <div class="line-tag"></div>
        </div>
      </div>
      <button class="button-image" @click="setActive('volunteer')">
        <img class="volunteer-planet-main" src="../components/icons/volunteer-planet.svg">
      </button>
    </div>
  </div>

  <div>
    <Experience :show="active === 'experience'" />
    <Achievements :show="active === 'achievements'" />
    <Education :show="active === 'education'" />
    <Expertise :show="active === 'expertise'" />
    <Languages :show="active === 'languages'" />
    <Volunteer :show="active === 'volunteer'" />
  </div>

</template>

<script>

export default {
  data() {
    return {
      active: ""
    }
  },
  methods: {
    setActive(type) {
      if (type === this.active) {
        this.active = ""
      } else {
        this.active = type
      }
    }
  }
}

</script>


