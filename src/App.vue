<script setup>
  import Nav from './components/navigation/Nav.vue';
  import LandingBanner from './components/home/LandingBanner.vue';
  import Rsvp from './components/home/Rsvp.vue';
  import Info from './components/home/Info.vue';
  import Hotels from './components/home/Hotels.vue';
  import Activities from './components/home/Activities.vue';
  import Footer from './components/navigation/Footer.vue';
  
  document.title = "IJ Studio";
</script>

<template>
  <div id="pg-container" class="h-screen w-screen grid grid-cols-12 sm:grid-cols-4">
    <div class="col-span-12 flex flex-col justify-between sm:col-span-4">
      <div id="info" class="flex flex-col">
        <Nav />
        <Info />
        <Hotels />
        <Activities />
        <!-- <Rsvp /> -->
      </div>
      <Footer />
    </div>
    
  </div>
</template>

<style scoped>
  
</style>
