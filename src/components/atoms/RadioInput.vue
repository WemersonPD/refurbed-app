<template>
  <label class="cursor-pointer">
    <input type="radio" :value="color" :name="color"
      class="w-5 h-5 rounded-full appearance-none border border-gray-200 outline-none cursor-pointer checked:ring-2 checked:ring-offset-2 checked:ring-black checked:scale-75"
      :style="{ backgroundColor: color }" :aria-label="color" v-model="model" />
  </label>
</template>

<script setup lang="ts">
defineProps({
	color: { type: String, required: true },
});

const model = defineModel<string>({
	type: String,
	required: true,
});
</script>