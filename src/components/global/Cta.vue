<script setup lang="ts">

defineProps<{
  align?: string,
  copy?: string,
  link: string
}>();

</script>

<template>
    <button class="bg-red-light hover:bg-red py-3 px-4 rounded-full shadow text-white w-full md:w-[200px]">
        {{ copy }}
    </button>
</template>