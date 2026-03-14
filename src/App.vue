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
          <div class="bg-white rounded-lg shadow-sm p-4 h-48" />
          <div class="bg-white rounded-lg shadow-sm p-4 h-48" />
          <div class="bg-white rounded-lg shadow-sm p-4 h-48" />
        </div>
      </div>
    </template>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from './components/templates/DefaultLayout.vue'
</script>
