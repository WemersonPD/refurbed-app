<template>
    <fieldset class="flex flex-col gap-3">
        <legend class="sr-only">{{ title }}</legend>

        <Text variant="inter" tag="span">{{ capitalize(title) }}</Text>

        <div class="relative h-4 px-1.5">
            <div class="absolute inset-x-1.5 inset-y-0 rounded-full bg-gray-200" />
            <div class="absolute inset-y-0 rounded-full bg-gray-800" :style="{
                left: `calc(0.375rem + ${(minVal - min) / (max - min) * 100}%)`,
                right: `calc(0.375rem + ${100 - (maxVal - min) / (max - min) * 100}%)`
            }" />

            <input type="range" :min="min" :max="max" :value="minVal" aria-label="Minimum price" class="range-thumb"
                @input="minVal = Math.min(+($event.target as HTMLInputElement).value, maxVal)" />
            <input type="range" :min="min" :max="max" :value="maxVal" aria-label="Maximum price" class="range-thumb"
                @input="maxVal = Math.max(+($event.target as HTMLInputElement).value, minVal)" />
        </div>

        <div class="flex justify-between">
            <div class="flex flex-col gap-2">
                <Text variant="inter-light" tag="span">Minimum:</Text>
                <Text variant="inter-light" tag="span">{{ formatPrice(minVal) }}</Text>
            </div>
            <div class="flex flex-col gap-2 text-right">
                <Text variant="inter-light" tag="span">Maximum:</Text>
                <Text variant="inter-light" tag="span">{{ formatPrice(maxVal) }}</Text>
            </div>
        </div>
    </fieldset>
</template>

<script setup lang="ts">
import { capitalize } from "vue";
import Text from "../atoms/Text.vue";
import { formatPrice } from "../../utils/number";

defineProps({
	title: {
		type: String,
		required: true,
	},
	min: {
		type: Number,
		required: true,
	},
	max: {
		type: Number,
		required: true,
	},
});

const minVal = defineModel<number>("minVal", { default: 0 });
const maxVal = defineModel<number>("maxVal", { default: 1499 });
</script>

<style scoped>
.range-thumb {
    @apply pointer-events-none absolute inset-0 w-full appearance-none bg-transparent;
}

/* Webkit thumb */
.range-thumb::-webkit-slider-thumb {
    @apply pointer-events-auto h-3 w-3 cursor-grab appearance-none rounded-full bg-white shadow-md;
}

/* Firefox thumb */
.range-thumb::-moz-range-thumb {
    @apply pointer-events-auto h-3 w-3 cursor-grab appearance-none rounded-full bg-white shadow-md;
}
</style>