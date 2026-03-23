<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const emit = defineEmits(['toggleMenu']);

const scrollOnTop: Ref<boolean> = ref(true);
const whiteBg: Ref<boolean> = ref(false);

function handlePageScroll (): void {
    if (window.scrollY > 20) {
        scrollOnTop.value = false;
        whiteBg.value = true;
    } else {
        scrollOnTop.value = true;
        whiteBg.value = false;
    }
}

onMounted((): void => {
    handlePageScroll();
    window.addEventListener('scroll', handlePageScroll)
})

onUnmounted((): void => {
    window.removeEventListener('scroll', handlePageScroll)
})

</script>

<template>
    <div 
        class="fixed flex flex-row md:flex-col items-center justify-between md:justify-center page-px pt-6 pb-4 transition-colors w-full z-10"
        :class="whiteBg ? 'bg-white shadow-sm hover:text-green text-green-800' : 'bg-transparent hover:text-white text-blue'"
    >
        <a  class="font-alex ml-[-10px] text-[48px]" 
            :class="!whiteBg && 'text-white'"
            href="" 
        >
            Irta & Mike
        </a>
        <div class="hidden md:flex flex-row h-fit justify-between text-[18px]">
            <a 
                href="#info" 
                class="cursor-pointer  mx-3" 
                :class="whiteBg ? 'hover:text-green' : 'hover:text-green-darkest'"
            >
                General Info
            </a>
            <a 
                href="#hotels" 
                class="cursor-pointer  mx-3" 
                :class="whiteBg ? 'hover:text-green' : 'hover:text-green-darkest'"
            >
                Hotels
            </a>
            <a 
                href="#hotels" 
                class="cursor-pointer  mx-3" 
                :class="whiteBg ? 'hover:text-green' : 'hover:text-green-darkest'"
            >
                Activities
            </a>
            <!-- <a 
                href="#rsvp" 
                class="cursor-pointer ml-3"
                :class="whiteBg ? 'hover:text-green' : 'hover:text-green-darkest'"
            >
                Your RSVP
            </a> -->
        </div>
        <font-awesome-icon
            icon="fa-solid fa-bars" 
            class="cursor-pointer flex md:hidden h-6 w-6 hover:text-green-darkest" 
            @click="emit('toggleMenu')" />
    </div>
</template>