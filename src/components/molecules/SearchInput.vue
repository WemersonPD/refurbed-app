<template>
    <div class="relative flex flex-col" role="search">
        <div class="relative flex items-center h-12">
            <img src="../../assets/icons/search-icon.png" class="absolute left-3 h-5 w-5 text-gray-400 mix-blend-multiply"
                alt="" aria-hidden="true" />
            <input type="text" v-model="model"
                :class="[
                    'flex-1 self-stretch font-inter font-normal text-sm leading-none tracking-[-0.15px] bg-gray-primary rounded-lg shadow-sm pl-10 pr-3 focus:outline-none focus:ring-2',
                    showError ? 'ring-2 ring-red-500 focus:ring-red-500' : 'focus:ring-green-primary'
                ]"
                placeholder="Search products..." name="Search Input Name" id="Search Input Id"
                aria-label="Search Products"
                :aria-invalid="showError"
                :aria-describedby="showError ? 'search-error' : undefined"
                @focus="touched = true"
                @blur="touched = true" />
        </div>
        <p v-if="showError" id="search-error" class="text-red-500 text-sm mt-1 font-inter">
            Please search for products using keywords.
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const model = defineModel<string>({
	type: String,
	required: true,
});

const touched = ref(false);

const showError = computed(() => touched.value && !model.value.length);
</script>