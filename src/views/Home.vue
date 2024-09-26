<template>
  <div class="flex p-8 flex-col">
    <div class="grid grid-cols-3 gap-4 mt-4">
      <div
        class="bg-white rounded-lg shadow-md p-4"
        v-for="(ingridient, index) in limitedIngridients"
        :key="ingridient.strIngredient"
      >
        <h2>Meal Name: {{ ingridient.strIngredient }}</h2>
        <p>{{ ingridient.strDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axiosInstance from "../utils/axiosClient";
import { ref, onMounted, computed } from "vue";

const ingridients = ref([]);

// Computed property to limit displayed items to 10
const limitedIngridients = computed(() => ingridients.value.slice(0, 12));

onMounted(async () => {
  const res = await axiosInstance.get("/list.php?i=list");
  // console.log(res.data);
  ingridients.value = res.data.meals;
});
</script>
