<template>
    <div class="flex flex-col-reverse md:flex-row">
        <div class="md:mr-3 w-full md:w-1/2">
            <slot name="body"></slot>
        </div>
        
        <div class="h-[250px] md:h-[300px] mb-3 md:mb-0 md:ml-3 w-full md:w-1/2">
            <slot name="image"></slot>
        </div>
        
    </div>
</template>