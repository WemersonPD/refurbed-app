<template>
  <DefaultLayout>
    <template #search>
      <!-- TODO: SearchBar organism -->
      <div class="bg-white rounded-lg shadow-sm p-3">
        <p class="text-gray-400">Search products...</p>
      </div>
    </template>

    <template #sidebar>
      <!-- TODO: FilterSidebar organism -->
      <div class="bg-white rounded-lg shadow-sm p-4">
        <p class="font-semibold">Filters</p>
      </div>
    </template>

    <template #content>
      <!-- TODO: ProductGrid organism + LoadMore -->
      <div>
        <p class="text-sm text-gray-600 mb-4">6 products found</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          <ProductCard
            :image-url="'https://files.refurbed.com/pi/iphone-15-1694604015.jpg?t=resize&h=600&w=600&t=convert&f=webp'"
            :name="'iPhone 15'"
            :colors="['BLUE', 'RED', 'GREY', 'GREEN']"
            :discount="20"
            :regular-price="1000"
            :discounted-price="750"
           />
            <ProductCard
            :image-url="'https://files.refurbed.com/pi/iphone-15-1694604015.jpg?t=resize&h=600&w=600&t=convert&f=webp'"
            :name="'iPhone 15'"
            :colors="['BLUE', 'RED', 'GREY', 'GREEN']"
            :discount="0"
            :regular-price="1000"
            :discounted-price="1000"
           />
          <div class="bg-white rounded-lg shadow-sm p-4 h-48" />
          <div class="bg-white rounded-lg shadow-sm p-4 h-48" />
        </div>
      </div>
    </template>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from './components/templates/DefaultLayout.vue'
import ProductCard from './components/molecules/ProductCard.vue'
</script>
