<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <a href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-whit focus:underline">
      Skip to main content
    </a>

    <header role="banner" class="w-full px-4 py-4 sm:px-6 lg:px-8">
      <slot name="search" />
    </header>

    <div class="px-4 sm:px-6 lg:px-8 pb-8">
      <div class="flex flex-col lg:flex-row gap-6">
        <aside aria-label="Filters" class="w-full lg:w-64 shrink-0">
          <nav aria-label="Product filters" class="h-screen">
            <slot name="sidebar" />
          </nav>
        </aside>

        <main id="main-content" role="main" class="flex-1 min-w-0">
          <slot name="content" />
        </main>
      </div>
    </div>
  </div>
</template>
