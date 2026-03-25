<script setup>
const currentYear = new Date().getFullYear();

</script>

<template>
    <div class="flex flex-row justify-between page-px py-16 text-blue w-full">
        <span>IJ Studio</span>
        <span>Copyright © {{ currentYear }}</span>
    </div>
</template>
