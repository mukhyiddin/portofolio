<template>
  <div>
    <Navbar />
    <Hero />
    <div class="flex justify-center max-sm:flex max-sm:justify-center max-sm:scale-50 max-sm:-mt-32 max-sm:-mb-32">
      <CardProfile />
    </div>
    <Heart />
    <Education />
    <!-- <Skill/> -->
    <Portofolio />
    <Footers />
    <router-view></router-view>
  </div>
</template>

<script setup>
import CardProfile from '../components/CardProfile.vue';
import Hero from '../components/Hero.vue';
import Navbar from '../components/Navbar.vue';
import Heart from '../components/Heart.vue';
import Footers from '../components/Footer.vue';
import Education from '../components/Education.vue';
import Portofolio from '../components/Portofolio.vue';
</script>
