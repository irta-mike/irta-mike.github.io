<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  options: array,
  selected: string
}>();

const emit = defineEmits(['optionClick']);

// TODO: Fix Ref TS error
const showOptions: Ref<boolean> = ref(false);

function formatSelectedCopy (): string {
  for (const option of props.options) {
    if (option.slug === props.selected) {
      return option.title;
    }
  }
  return '';
}

function handleDropIconClick (): void {
  showOptions.value = !showOptions.value;
}

function handleOptionClick (optionClicked: string): void {
  emit('optionClick', optionClicked);
  showOptions.value = false;
}

</script>

<template>
     <div class="relative text-[14px] uppercase" :class="showOptions && 'rounded'">
          <div 
            @click="handleDropIconClick" 
            class="cursor-pointer py-4 hover:text-green md:hover:text-black w-full"
            :class="showOptions ? 'rounded-t shadow shadow-b-none' : 'rounded shadow'"
          >
            <div 
              class="flex flex-row items-center justify-between mx-3" 
            >
              <label>{{ formatSelectedCopy() }}</label>
           
              <font-awesome-icon 
                icon="fa-solid fa-angle-up"
                class="h-4 w-4 transition duration-200 ease-in-out transform" 
                :class="showOptions ? '' : 'rotate-180'"
              /> 
            </div>
          </div>

          <Transition name="collapse">
            <div v-if="showOptions" class="absolute bg-white collapsible-content rounded-b shadow w-full">
              <div v-for="(option, idx) in options">
                <option
                  v-if="selected !== option.slug"
                  :key="option.slug"
                  @click="handleOptionClick(option.slug)"
                  class="cursor-pointer text-green md:hover:bg-green-dark md:hover:text-white px-3 py-2"
                  :class="{
                    'first:pt-3' : idx === 1,
                    'rounded-b' : idx === options.length-1,
                  }"
                >
                  {{ option.title }}
                </option>
              </div>
            </div>
          </Transition>
        </div>
</template>

<style lang="css" scoped>
.collapsible-content {
  @apply overflow-hidden;
}

.collapse-enter-active,
.collapse-leave-active {
  @apply transition-[max-height] duration-200 ease-in-out;
}

.collapse-enter-from,
.collapse-leave-to {
  @apply max-h-[0px];
}

.collapse-enter-to,
.collapse-leave-from {
  @apply max-h-[1000px];
}
</style>