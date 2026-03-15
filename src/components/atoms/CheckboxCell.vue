<template>
    <label class="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" v-model="model" :value="value" class="sr-only peer" />
        <span class="w-5 h-5 rounded-md border flex items-center justify-center transition-colors
            peer-focus-visible:ring-2 peer-focus-visible:ring-green-primary peer-focus-visible:ring-offset-1"
            :class="isChecked ? 'bg-gray-900 border-gray-900' : 'bg-gray-100 border-gray-300'" aria-hidden="true">
            <img v-if="isChecked" src="../../assets/icons/check.svg" class="brightness-0 invert" alt="" />
        </span>

        <span class="font-inter font-normal text-sm leading-none tracking-tight">{{ capitalize(value) }}</span>
    </label>
</template>

<script setup lang="ts">
import { capitalize, computed } from 'vue';

const props = defineProps({
    value: {
        type: String,
        required: true,
    }
})

const model = defineModel({
    type: Array<string>,
    required: true,
})

const isChecked = computed(() => model.value?.includes(props.value))
</script>