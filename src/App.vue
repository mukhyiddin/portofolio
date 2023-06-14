<script setup>
import CardProfile from './components/CardProfile.vue';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import Heart from './components/Heart.vue'
import Footer from './components/Footer.vue'
import Education from './components/Education.vue'
import Skill from './components/Skill.vue'
import Portofolio from './components/Portofolio.vue';
</script>

<template>
  <Navbar/>
  <Hero/>
  <div class="flex justify-center">
  <CardProfile/>
  </div>
  <heart/>
  <Education/>
  <!-- <Skill/> -->
  <Portofolio/>
  <Footer/>
</template>
