<template>
  <div class="bg-white shadow-md">
    <div class="container mx-auto">
      <header class="h-16 flex justify-between items-center">
        <router-link
          :to="{ name: 'home' }"
          class="inline-flex items-center px-6 h-full"
          >Home</router-link
        >
        <div class="flex items-center gap-1">
          <router-link
            :to="{ name: 'byName' }"
            class="inline-flex items-center h-full transition-colors px-2 hover:bg-blue-500"
            >Search Meals
          </router-link>
          <router-link
            to="/contact"
            class="inline-flex items-center h-full transition-colors px-2 hover:bg-blue-500"
            >Contact Us
          </router-link>
          <router-link
            to="/about"
            class="px-2 inline-flex items-center h-full transition-colors hover:bg-blue-500"
            >About Us
          </router-link>
        </div>
      </header>
    </div>
  </div>
</template>
