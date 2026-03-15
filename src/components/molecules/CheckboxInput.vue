<template>
    <fieldset class="flex flex-col gap-3">
        <legend class="sr-only">
            {{ title }}
        </legend>

        <Text variant="inter" tag="span">{{ capitalize(title) }}</Text>

        <ul class="flex flex-col gap-2" role="list">
            <li v-for="option in options" :key="option">
                <CheckboxCell :value="option" v-model="model" />
            </li>
        </ul>
    </fieldset>
</template>

<script setup lang="ts">
import { capitalize } from 'vue';
import CheckboxCell from '../atoms/CheckboxCell.vue';
import Text from '../atoms/Text.vue';

defineProps({
    title: {
        type: String,
        required: true
    },
    options: {
        type: Array<string>,
        required: true
    }
})

const model = defineModel({
    type: Array<string>,
    required: true
})
</script>