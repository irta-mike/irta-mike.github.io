<script setup lang="ts">
const emit = defineEmits(['toggleMenu']);

</script>

<template>
    <div class="bg-white fixed flex md:hidden flex-col h-screen text-green w-screen z-[1]">
            <div class="flex flex-row items-center justify-between pb-4 pt-6 page-px shadow-sm transition-colors uppercase w-full z-20">
                <a  class="font-alex ml-[-10px] text-[48px]" 
                :class="!whiteBg && 'text-white'"
                href="" 
            >
                Irta & Mike
            </a>
            <font-awesome-icon 
                icon="fa-solid fa-x" 
                class="cursor-pointer flex md:hidden h-5 w-6 hover:text-green-darkest" 
                @click="emit('toggleMenu')" />
        </div>
        <div class="flex flex-col font-semibold h-full mt-2 page-px text-[20px] uppercase">
            <a href="#info" @click="emit('toggleMenu')" class="cursor-pointer my-4 hover:text-green-darkest">General Info</a>
            <a href="#hotels" @click="emit('toggleMenu')" class="cursor-pointer my-4 hover:text-green-darkest">Hotels</a>
            <a href="#activities" @click="emit('toggleMenu')" class="cursor-pointer my-4 hover:text-green-darkest">Activities</a>
        </div>
    </div>
</template>