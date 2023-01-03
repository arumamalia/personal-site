<script setup>
import Education from '../components/Education.vue'
import Achievements from '../components/Achievements.vue'
import Expertise from '../components/Expertise.vue'
import Languages from '../components/Languages.vue'
import Volunteer from '../components/Volunteer.vue'
</script>

<template>
  <div class="container about-me">
    <img src="../components/icons/fotopic.svg">
    <div class="profile-about-me">
      <div class="name-job">
        <p class="name-about-me">ARUM AMALIA</p>
        <p class="job-about-me">Back End Developer</p>
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
        <button class="button" data-bs-toggle="modal" data-bs-target="#myModal">Hire Me</button>
      </div>
    </div>
  </div>

  <div class="planets">
    <div class="sun">
      <img class="rotate-sun-bright" src="../components/icons/sun-bright.svg">
      <img class="sun-flex rotate-sun-flex" src="../components/icons/sun-flex.svg">
    </div>
    <div class="experience-planet sub-planet" >
      <div class="tag-planet">
        <p class="font-planet">Experience</p>
        <img class="arrow-tag" src="../components/icons/line.svg">
      </div>
      <button class="button-image">
        <img class="experience-planet-main shake-vertical-up" src="../components/icons/experience-planet.svg">
      </button>
    </div>

    <div class="education-planet sub-planet" :class="{ active: active === 'education' }">
      <div class="tag-planet">
        <p class="font-planet">Education</p>
        <img class="arrow-tag" src="../components/icons/line.svg">
      </div>
      <button class="button-image" @click="setActive('education')">
        <img class="education-planet-main shake-vertical-down" src="../components/icons/education.svg">
      </button>
    </div>
    <div class="expertise-planet sub-planet" :class="{ active: active === 'expertise' }">
      <div class="tag-planet">
        <p class="font-planet">Expertise</p>
        <img class="arrow-tag" src="../components/icons/line.svg">
      </div>
      <button class="button-image" @click="setActive('expertise')">
        <img class="expertise-planet-main shake-vertical-up" src="../components/icons/expertise-planet.svg">
      </button>
    </div>
    <div class="languages-planet sub-planet" :class="{ active: active === 'languages' }">
      <div class="tag-planet">
        <p class="font-planet">Languages</p>
        <img class="arrow-tag" src="../components/icons/line.svg">
      </div>
      <button class="button-image" @click="setActive('languages')">
        <img class="languages-planet-main shake-vertical-down" src="../components/icons/languages-planet.svg">
      </button>
    </div>

    <div class="achievements-planet sub-planet" :class="{ active: active === 'achievements' }">
      <div class="tag-planet">
        <p class="font-planet">Achievements</p>
        <img class="arrow-tag" src="../components/icons/line.svg">
      </div>
      <button class="button-image" @click="setActive('achievements')">
        <img class="achievements-planet-main shake-vertical-up" src="../components/icons/achievements-planet.svg">
      </button>
    </div>
    <div class="volunteer-planet sub-planet" :class="{ active: active === 'volunteer' }">
      <div class="tag-planet">
        <p class="font-planet">Volunteer</p>
        <img class="arrow-tag" src="../components/icons/line.svg">
      </div>
      <button class="button-image" @click="setActive('volunteer')">
        <img class="volunteer-planet-main shake-vertical-down" src="../components/icons/volunteer-planet.svg">
      </button>
    </div>
  </div>

  <div>
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
      // showAchievements: false,
      // showEducation: false,
      // showExpertise: false,
      // showLanguages: false,
      // showVolunteer: false,
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
  },
  mounted() {
    // this.active = 'education'
  }
}

</script>
