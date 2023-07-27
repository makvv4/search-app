<script setup lang="ts">
import Slider from '@vueform/slider'
import { useSearchFiltersStore } from '@/stores/searchFiltersStore'

const SearchFiltersStore = useSearchFiltersStore()
</script>

<template>
  <div>
    <p>Цена</p>

    <Slider
      class="px-3 mt-5"
      v-model="SearchFiltersStore.priceRange"
      :format="{ prefix: '$', decimals: 2 }"
      :max="1749"
    />
  </div>
</template>

<style src="@vueform/slider/themes/default.css"></style>
