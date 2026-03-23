<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

import Nav from './components/navigation/Nav.vue';
import LandingBanner from './components/home/LandingBanner.vue';
import Rsvp from './components/home/Rsvp.vue';
import Info from './components/home/Info.vue';
import Hotels from './components/home/Hotels.vue';
import Activities from './components/home/Activities.vue';
import Footer from './components/navigation/Footer.vue';
  
document.title = "I&M Weddding";

const signedIn = ref(false);
const password = ref('');


function getCookie (name: string): boolean|null {
  var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return Boolean(c.substring(nameEQ.length,c.length));
	}
	return false;
} 

onMounted((): void => {
  if (getCookie("I&M_Wedding")) { 
    signedIn.value = true;
  }
})

watch(() => password.value, (newCopy: string|null, oldCopy: string|null) => {
  if (password.value === 'scotland') {
    document.cookie ='I&M_Wedding=true; expires=Fri, 24 Jul 2026 00:00:00 UTC; path=/'

    if (getCookie("I&M_Wedding")) { 
      signedIn.value = true;
    }
  }
});

</script>

<template>
  <div id="pg-container" class="h-screen w-screen grid grid-cols-12 sm:grid-cols-4">
    <div v-if="signedIn" class="col-span-12 flex flex-col justify-between sm:col-span-4">
      <div id="info" class="flex flex-col">
        <Nav />
        <Info />
        <Hotels />
        <Activities />
        <!-- <Rsvp /> -->
      </div>
      <Footer />
    </div>
    <div v-else class="col-span-12 flex flex-col justify-between sm:col-span-4">
        <div class="flex flex-col h-full items-center justify-center page-px">
          <h1 class="standard-mb text-center">Enter the password included on your invitation.</h1>
          <input 
            type="text" 
            id="password" 
            placeholder="Type here" 
            v-model="password" 
            class="std-input min-w-full md:min-w-[300px] text-green"
          />
        </div>
    </div>
  </div>
</template>

<style scoped>
  
</style>
