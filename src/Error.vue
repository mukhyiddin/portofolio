<template>
<div>
    <div class="hero min-h-screen h-96" style="background-image: url(https://www.addictivetips.com/app/uploads/2020/04/HmgQJDl.jpg);">
        <div className="hero-overlay bg-opacity-50  backdrop-blur-sm"></div>
        <div class="hero-content  text-center text-neutral-content">
    <div class="max-w-xl">
      <h1 class="mb-5 text-7xl font-bold text-blue-300">404 Not Found..! </h1>
      <router-link to="/">
        <a><button class="btnhov rounded-xl text-bold"><span>Back To My Page</span></button></a>'
      </router-link>
    </div>
  </div>
</div>
<router-view></router-view>
</div>
</template>

<script>
import { RouterLink } from 'vue-router';
</script>
