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
                        <p class="mb-3">Block: £20 discount</p>
                        <p class="mb-3">To reserve a room under our block, email events@melvillecastle.com and reference the "Irta & Mike Wedding". </p>
                        <p>We will be staying at this hotel the nights of July 16th and 17th.</p>
                    </div>
                </template>
            </ServicesTemplate>

            <ServicesTemplate v-if="activeTab === 'hotel'">
                <template #image>
                    <img name="image" class="tab-image" src="../../resources/assets/images/hotels/residence-inn.jpg"/>
                </template>

                <template #body>
                    <h2 class="text-green-800">Residence Inn by Marriott Edinburgh</h2>
                    <a class="text-[14px]" href="https://www.google.com/maps/place/Residence+Inn+by+Marriott+Edinburgh/@55.9438529,-3.1954068,17z/data=!4m9!3m8!1s0x4887c79933a42d19:0xed370c71a9c56538!5m2!4m1!1i2!8m2!3d55.9438529!4d-3.1928319!16s%2Fg%2F1tf_mwnw?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D">Quartermile, 36 Simpson Loan, Edinburgh EH3 9GG, United Kingdom</a>
                    <div class="border-t border-green mt-3 pt-3 text-[14px]">
                        <p>We do not have a block for this hotel. However, we will be staying here the days before and after the wedding: July 13-15 and 18-20.</p>
                    </div>
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
