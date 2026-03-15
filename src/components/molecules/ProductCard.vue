<template>
   <article class="group w-card h-card flex flex-col gap-4 p-2 rounded-2xl bg-white hover:shadow-xl cursor-pointer">
      <img :src="imageUrl" :alt="name" class="w-card-image h-card-image" loading="lazy">

      <div class="flex flex-col gap-7">
         <Text tag="h3" variant="base">{{ name }}</Text>

         <div class="flex flex-col gap-4">

            <!-- TODO: Add color component -->
            <ul class="flex gap-1" aria-label="Available Colors">
               <li v-for="color in colors" :key="color">
                  <Radio :color="color" label="example" v-model="selectedColor" />
               </li>
            </ul>


            <div class="flex gap-4">
               <Text v-if="hasDiscount" tag="span" variant="lg"
                  class="text-price group-hover:text-price-hover font-bold">{{ formattedDiscountedPrice }}</Text>

               <Text tag="span" variant="lg" :class="{
                  'line-through text-gray-400': hasDiscount,
                  'text-price group-hover:text-price-hover font-bold': !hasDiscount
               }">{{ formattedRegularPrice }}</Text>
            </div>
         </div>
      </div>
   </article>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Text from '../atoms/Text.vue';
import { formatPrice } from '../../utils/number';
import Radio from '../atoms/RadioInput.vue';

const props = defineProps({
   imageUrl: {
      type: String,
      required: true
   },
   name: {
      type: String,
      required: true
   },
   colors: {
      type: Array<string>,
      required: true,
   },
   regularPrice: {
      type: Number,
      required: true
   },
   discountedPrice: {
      type: Number,
      required: true
   },
   discount: {
      type: Number,
      required: true
   }
})

const selectedColor = ref(props.colors[0]);

const formattedRegularPrice = computed(() => formatPrice(props.regularPrice));
const hasDiscount = computed(() => !!props.discount);
const formattedDiscountedPrice = computed(() => formatPrice(props.discountedPrice));

</script>