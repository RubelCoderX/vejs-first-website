<template>
  <div class="p-6">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 w-full h-[50px]"
      placeholder="Search for meal"
      @input="searchMeals"
    />
  </div>
  <div>
    <div class="grid grid-cols-3 gap-4 mt-4">
      <div v-for="meal in meals" :key="meal.idMeal" class="p-4 border">
        <img
          :src="meal.strMealThumb"
          alt="meal image"
          class="w-full h-[200px] object-cover"
        />
        <h3 class="text-xl font-semibold my-2">{{ meal.strMeal }}</h3>
        <p>{{ meal.strInstructions.substring(0, 100) }}...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import store from "../vuex/store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
</script>
