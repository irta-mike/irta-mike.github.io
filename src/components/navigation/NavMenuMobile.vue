<script setup lang="ts">
import Logo from '../../resources/assets/logo.svg';

const emit = defineEmits(['toggleMenu']);

</script>

<template>
    <div class="bg-white fixed flex md:hidden flex-col h-screen text-green w-screen z-[1]">
        <div class="flex flex-row items-center justify-between pb-4 pt-6 page-px shadow-sm transition-colors uppercase w-full z-20">
            <a href="" class="ml-[-10px]">
                <Logo />
            </a>
            <font-awesome-icon 
                icon="fa-solid fa-x" 
                class="cursor-pointer flex md:hidden h-5 w-6 hover:text-green-darkest" 
                @click="emit('toggleMenu')" />
        </div>
        <div class="flex flex-col font-semibold h-full mt-2 page-px text-[20px] uppercase">
            <a href="#about" @click="emit('toggleMenu')" class="cursor-pointer my-4 hover:text-green-darkest">About</a>
            <a href="#services" @click="emit('toggleMenu')" class="cursor-pointer my-4 hover:text-green-darkest">Services</a>
            <a href="#contact" @click="emit('toggleMenu')" class="cursor-pointer my-4 hover:text-green-darkest">Contact</a>
        </div>
    </div>
</template>