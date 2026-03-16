<template>
  <div class="min-h-screen lg:h-screen flex flex-col bg-gray-50">
    <a href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:underline">
      Skip to main content
    </a>

    <header role="banner" class="w-full px-4 py-4 sm:px-6 lg:px-8 shrink-0">
      <slot name="search" />
    </header>

    <div class="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-8 pb-8 min-h-0 flex-1">
      <aside aria-label="Filters" class="w-full lg:w-64 shrink-0 flex flex-col">
        <nav aria-label="Product filters" class="flex flex-col flex-1">
          <slot name="sidebar" />
        </nav>
      </aside>

      <main id="main-content" class="flex-1 min-w-0 lg:overflow-y-auto">
        <slot name="content" />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>