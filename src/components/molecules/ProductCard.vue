<template>
   <article
      class="group w-card h-card flex flex-col gap-4 p-2 rounded-2xl bg-white hover:shadow-xl cursor-pointer relative overflow-visible">
      <div class="w-card-image h-card-image bg-gray-card rounded-xl flex items-center justify-center">
         <img :src="imageUrl" :alt="name" class="w-[194px] h-[173px] object-contain mix-blend-multiply" loading="lazy">
      </div>

      <Text v-if="bestseller" variant="sm" tag="span"
         class="bg-green-primary text-white absolute left-0 top-0 px-2 py-1 rounded-ss-md text-xs">Bestseller</Text>

      <Text v-if="hasDiscount" variant="sm" tag="span"
         class="bg-discount text-white rounded-full w-[40px] h-[40px] min-w-[40px] min-h-[40px] flex items-center justify-center absolute top-[-15px] right-[-15px] rotate-[30deg] shadow-[4px_8px_12px_0px_#593BCE4D]">{{
            formattedDiscount }}</Text>

      <div class=" flex flex-col gap-7">
         <Text tag="h3" variant="base">{{ name }}</Text>

         <div class="flex flex-col gap-4">
            <!-- TODO: Add a field set here. -->
            <ul class="flex gap-1" aria-label="Available Colors">
               <li v-for="color in colors" :key="color">
                  <Radio :color="color" label="example" v-model="selectedColor" />
               </li>
            </ul>

            <div class="flex gap-4">
               <span class="sr-only">Discounted price:</span>
               <Text v-if="hasDiscount" tag="span" variant="lg"
                  class="text-green-primary group-hover:text-green-secondary font-bold">{{ formattedDiscountedPrice
                  }}</Text>

               <span class="sr-only">Original price:</span>
               <Text tag="span" variant="lg" :class="{
                  'line-through text-gray-400': hasDiscount,
                  'text-green-primary  group-hover:text-green-secondary font-bold': !hasDiscount
               }">{{ formattedRegularPrice }}</Text>
            </div>
         </div>
      </div>
   </article>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Text from "../atoms/Text.vue";
import { formatPrice } from "../../utils/number";
import Radio from "../atoms/RadioInput.vue";

const props = defineProps({
	imageUrl: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	colors: {
		type: Array<string>,
		required: true,
	},
	regularPrice: {
		type: Number,
		required: true,
	},
	discountedPrice: {
		type: Number,
		required: true,
	},
	discount: {
		type: Number,
		required: true,
	},
	bestseller: {
		type: Boolean,
		default: false,
	},
});

const selectedColor = ref(props.colors[0]);

const formattedRegularPrice = computed(() => formatPrice(props.regularPrice));
const hasDiscount = computed(() => !!props.discount);
const formattedDiscountedPrice = computed(() =>
	formatPrice(props.discountedPrice),
);
const formattedDiscount = computed(() => `-${props.discount}%`);
</script>