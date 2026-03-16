<template>
  <DefaultLayout>
    <template #search>
      <!-- TODO: SearchBar organism -->
      <div class="w-1/2">
        <SearchInput v-model="searchQuery" />
      </div>
    </template>

    <template #sidebar>
      <!-- TODO: FilterSidebar organism -->
      <fieldset class="bg-white rounded-lg shadow-sm p-4 flex flex-col gap-6 flex-1 self-stretch">
        <legend class="sr-only">
          Filters
        </legend>

        <Text tag="p" variant="inter" class="block">Filters</Text>

        <ul class="flex flex-col gap-6">
          <li>
            <CheckboxInput title="Category" :options="Object.values(Category)"
              v-model="filters.categories" />
          </li>
          <li>
            <RangeInput :min="0" :max="1499" title="Price Range" v-model:min-val="minVal" v-model:max-val="maxVal"  />
          </li>
          <li>
            <CheckboxInput title="Brand" :options="Object.values(Brand)" v-model="filters.brands" />
          </li>
          <li>
            <CheckboxInput title="Condition" :options="Object.values(Condition)" v-model="filters.conditions" />
          </li>
        </ul>
      </fieldset>
    </template>

    <template #content>
      <div>
        <p v-if="loading" class="text-sm text-gray-600">Loading...</p>
        <p v-else-if="error" class="text-sm text-red-600">{{ error }}</p>
        <template v-else>
          <p class="text-sm text-gray-600 mb-4">{{ total }} products found</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16">
            <ProductCard v-for="product in products" :key="product.id" :image-url="product.image_url"
              :name="product.name" :colors="product.colors ?? []" :discount="product.discount_percent ?? 0"
              :regular-price="product.base_price" :discounted-price="product.discounted_price"
              :bestseller="product.bestseller ?? false" />
          </div>

          <!-- TODO: Pagination component-->
          <button>Load More</button>
        </template>
      </div>
    </template>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/components/templates/DefaultLayout.vue";
import ProductCard from "@/components/molecules/ProductCard.vue";
import SearchInput from "@/components/atoms/SearchInput.vue";

import { computed, reactive, ref } from "vue";
import { useDebounce } from "@/composables/useDebounce";
import CheckboxInput from "@/components/molecules/CheckboxInput.vue";
import Text from "@/components/atoms/Text.vue";
import RangeInput from "@/components/molecules/RangeInput.vue";
import { useProducts } from "@/composables/useProducts";
import { Brand, Category, Condition, type ProductQuery } from "@/types/product";

const searchQuery = ref("");
const debouncedSearchQuery = useDebounce(searchQuery);

const minVal = ref(0);
const debouncedMinVal = useDebounce(minVal);

const maxVal = ref(1499);
const debouncedMaxVal = useDebounce(maxVal);

const filters = reactive({
	categories: [],
	brands: [],
	conditions: [],
});

const productsQuery = computed<ProductQuery>(() => ({
	limit: 5,
	offset: 0,
	search: debouncedSearchQuery.value,
	categories: filters.categories,
	brands: filters.brands,
	conditions: filters.conditions,
	minPrice: debouncedMinVal.value,
	maxPrice: debouncedMaxVal.value,
}));

const { products, total, loading, error } = useProducts(productsQuery);
</script>
