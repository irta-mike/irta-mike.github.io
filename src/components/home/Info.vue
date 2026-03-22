<script setup lang="ts">
import { onMounted, onUnmounted, ref, Ref } from 'vue';
import SectionTitle from '../global/SectionTitle.vue';

const countdown: Ref<number> = ref(0);

onMounted((): void => {
    let weddingDate = new Date("July 17, 2026");
    let today = new Date();

    let timeDiff = weddingDate.getTime() - today.getTime();
    let msPerDay = 1000 * 60 * 60 * 24;
    
    countdown.value = Math.floor(timeDiff / msPerDay);
})

</script>

<template>
    <div class="flex flex-col mt-[80px] md:mt-[110px] page-px page-py !pb-0 uppercase">
        <div class="flex flex-col items-center text-center" w-full>
            <h1 class="text-mb text-white text-[24px]">July 17, 2026</h1>
            <p>{{ countdown }} day{{ countdown > 1 ? 's' : '' }} to go!</p>
        </div>
    </div>
</template>

<style lang="css" scoped>
</style>