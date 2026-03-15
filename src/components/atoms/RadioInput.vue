<template>
  <label class="cursor-pointer">
    <input
        type="radio"
        :value="color"
        :checked="modelValue === color"
        class="w-5 h-5 rounded-full appearance-none border-none outline-none cursor-pointer checked:ring-2 checked:ring-offset-2 checked:ring-black checked:scale-75"
        :style="{ backgroundColor: color }"
        :aria-label="color"
        @change="$emit('update:modelValue', color)"
    />
  </label>
</template>

<script setup lang="ts">
defineProps({
  color: { type: String, required: true },
  modelValue: { type: String, default: '' },
})

defineEmits(['update:modelValue'])
</script>