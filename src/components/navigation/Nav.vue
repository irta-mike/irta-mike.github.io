<script setup lang="ts">
import { onMounted, onUnmounted, ref, Ref } from 'vue';
import NavBar from './NavBar.vue';
import NavMenuMobile from './NavMenuMobile.vue';

const showNavMenu: Ref<boolean> = ref(false);

const toggleMenu = (): void => {
    showNavMenu.value = !showNavMenu.value;

    if (showNavMenu.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

const handlePageResize = (): void => {
    let windowWidth = window.innerWidth;
    if (windowWidth > 640 && showNavMenu.value) {
        showNavMenu.value = false;
    }
}

onMounted((): void => {
    window.addEventListener('resize', handlePageResize)
})

onUnmounted((): void => {
    window.removeEventListener('resize', handlePageResize)
})
</script>

<template>
    <NavBar v-if="!showNavMenu" @toggle-menu="toggleMenu" />
    <NavMenuMobile v-else @toggle-menu="toggleMenu" />
</template>
