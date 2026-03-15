<template>
    <div class="relative flex items-center h-12" role="search">
        <img src="../../assets/icons/search-icon.png" class="absolute left-3 h-5 w-5 text-gray-400 mix-blend-multiply"
            alt="" aria-hidden="true" />
        <input type="text" v-model="model"
            class="flex-1 self-stretch font-inter font-normal text-sm leading-none tracking-[-0.15px] bg-gray-primary rounded-lg shadow-sm pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-green-primary"
            placeholder="Search products..." name="Search Input Name" id="Search Input Id"
            aria-label="Search Products" />
    </div>
</template>

<script setup lang="ts">
const model = defineModel<string>({
    type: String,
    required: true
})

</script>