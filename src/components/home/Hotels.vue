<script setup lang="ts">
import { ref } from 'vue';
import SectionTitle from '../global/SectionTitle.vue';
import ServicesTemplate from '../global/ServicesTemplate.vue'

import Cta from '../global/Cta.vue';
import Dropdown from '../global/Dropdown.vue';

const locations = [
    {
        icon: 'fa-solid fa-archway',
        slug:'venue',
        title: 'Wedding Venue'
    },
    {
        icon: 'fa-solid fa-bed',
        slug:'hotel',
        title: 'Additional Hotel'
    }
]

const activeTab = ref('venue');

function handleOptionClick (selected: string) {
    activeTab.value = selected;
}

</script>

<template>
    <div id="hotels" class="flex flex-col page-px page-py !pb-0">
        <div class="bg-white text-green flex flex-col p-6 rounded shadow">
            
            <div class="flex flex-row justify-end -mx-3 overflow-x-scroll mb-6 md:mb-8"> 
                <div v-for="location in locations" 
                    class="cursor-pointer border-b-4 flex flex-row items-center justify-between mx-1.5 md:mx-3 lg:first:ml-0 lg:last:mr-0 pb-1.5 w-1/2 md:w-fit hover:text-green transition-colors duration-300 ease-in-out"
                    :class="location.slug === activeTab ? 'border-tan' : 'border-white'"
                    @click="handleOptionClick(location.slug)"
                >
                    <font-awesome-icon 
                        :icon="location.icon"
                        class="h-6 pr-1 w-6" 
                    /> 
                    <span class="text-[14px] uppercase text-center lg:text-start">{{ location.title }}</span>
                </div>
            </div>

            <!-- Details -->
            <!-- TODO: Add slide transitions -->
            <ServicesTemplate v-if="activeTab === 'venue'">
                <template #image>
                    <img name="image" class="tab-image" src="../../resources/assets/images/hotels/melville-castle.jpeg"/>
                </template>

                <template #body>
                    <h2 class="text-green-800">Melville Castle Hotel</h2>
                    <a class="text-[14px]" href="https://www.google.com/maps/place/Melville+Castle+Hotel/data=!4m2!3m1!1s0x4887becc84d0aec9:0xd875e77214e6794f?sa=X&ved=1t:242&ictx=111">Gilmerton Rd, Edinburgh EH18 1AP, United Kingdom</a>
                    <div class="border-t border-green mt-3 pt-3 text-[14px]">
                        <p class="text-mb">We will be staying at the venue from 16th to the 17th (day before and during the event).</p>
                        <p>To make a reservation, use this <a href="">link</a> to use our block discount.</p>
                        <p>Prior to, and after the event we will be staying at XYZ hotel.</p>
                    </div>
                </template>
            </ServicesTemplate>

            <ServicesTemplate v-if="activeTab === 'hotel'">
                <template #image>
                    
                </template>

                <template #body>
                    <span class="italic">* Information coming soon</span>
                </template>
            </ServicesTemplate>
        </div>
    </div>
</template>

<style lang="css" scoped>
.tab-image {
    @apply h-full object-cover rounded w-full;
}
</style>
