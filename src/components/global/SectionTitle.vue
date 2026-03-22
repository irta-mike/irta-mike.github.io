<script setup lang="ts">

defineProps<{
  alignment?: string,
  title?: string
}>();

</script>

<template>
    <div class="flex flex-row " :class="alignment ? alignment : 'justify-center md:justify-end'">
        <h2 class="mb-6 md:mb-8 text-[22px]">{{ title }}</h2>
    </div>
</template>