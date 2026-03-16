<template>
  <DefaultLayout>
    <template #search>
      <!-- TODO: SearchBar organism -->
      <div class="w-full lg:w-1/2">
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
        <p v-if="loading" class="text-sm text-gray-600">Loading...</p>
        <p v-else-if="error" class="text-sm text-red-600">{{ error }}</p>
        <div v-else-if="products.length === 0"
          role="status"
          class="flex flex-col items-center justify-center gap-4 py-20">
          <img src="@/assets/icons/not-found-icon.png" alt="" aria-hidden="true" width="106" height="106">

          <Text tag="span" variant="inter">No products found</Text>
          <div class="flex flex-col gap-2">
            <Text tag="span" variant="inter-light" class="text-center text-gray-500">We couldn't find any products matching your current filters.</Text>
            <Text tag="span" variant="inter-light" class="text-center text-gray-500">Try adjusting your search criteria.</Text>
          </div>
          
          <Button @click="clearFilters" class="max-w-64">
            <Text variant="inter" tag="span">Clear all filters</Text>
          </Button>
        </div>
        <div v-else class="flex flex-col flex-1 min-h-full">
          <p class="text-sm text-gray-600 mb-4">{{ total }} products found</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16 pb-8 justify-items-center">
            <ProductCard v-for="product in products" :key="product.id" :image-url="product.image_url"
              :name="product.name" :colors="product.colors ?? []" :discount="product.discount_percent ?? 0"
              :regular-price="product.base_price" :discounted-price="product.discounted_price"
              :bestseller="product.bestseller ?? false" />
          </div>

          <div v-if="showLoadMoreButton" class="flex justify-center mt-auto pt-6">
            <Button @click="loadMore" class="max-w-64">
              <Text variant="inter" tag="span">Load more</Text>
            </Button>
          </div>
        </div>
    </template>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/components/templates/DefaultLayout.vue";
import ProductCard from "@/components/molecules/ProductCard.vue";
import SearchInput from "@/components/atoms/SearchInput.vue";

import { computed, reactive, ref, watch } from "vue";
import { useDebounce } from "@/composables/useDebounce";
import CheckboxInput from "@/components/molecules/CheckboxInput.vue";
import Text from "@/components/atoms/Text.vue";
import RangeInput from "@/components/molecules/RangeInput.vue";
import { useProducts } from "@/composables/useProducts";
import { Brand, Category, Condition, type ProductQuery } from "@/types/product";
import Button from "./components/atoms/Button.vue";

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

const offset = ref(0);

const activeFilters = computed(() => ({
	search: debouncedSearchQuery.value,
	categories: filters.categories,
	brands: filters.brands,
	conditions: filters.conditions,
	minPrice: debouncedMinVal.value,
	maxPrice: debouncedMaxVal.value,
}));

const productsQuery = computed<ProductQuery>(() => ({
	limit: 6,
	offset: offset.value,
	...activeFilters.value,
}));

const showLoadMoreButton = computed(
	() => offset.value + productsQuery.value.limit < total.value,
);

watch(
	activeFilters,
	() => {
		offset.value = 0;
	},
	{ deep: true },
);

const { products, total, loading, error } = useProducts(productsQuery);

const loadMore = () => {
	offset.value += 6;
};

function clearFilters() {
	searchQuery.value = "";
	minVal.value = 0;
	maxVal.value = 1499;
	filters.categories = [];
	filters.brands = [];
	filters.conditions = [];
}
</script>
