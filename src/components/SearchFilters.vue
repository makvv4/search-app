<script setup lang="ts">
import RangeSlider from '@/components/RangeSlider.vue'
import MultiselectOfCategories from '@/components/MultiselectOfCategories.vue'
import MultiselectOfRating from '@/components/MultiselectOfRating.vue'
import DiscountFilter from '@/components/DiscountFilter.vue'
import { useSearchFiltersStore } from '@/stores/searchFiltersStore'

const SearchFiltersStore = useSearchFiltersStore()
</script>

<template>
  <div>
    <form id="search">
      <MultiselectOfCategories />
      <MultiselectOfRating class="my-5" />
      <DiscountFilter class="my-5" />
      <RangeSlider class="my-5" />

      <button class="btn btn-primary rounded-4 w-100 py-3 mt-3" @click.prevent="">
        Применить фильтр
      </button>
      <button
        class="btn btn-light border rounded-4 w-100 py-3 my-3"
        @click.prevent="SearchFiltersStore.$reset()"
      >
        Очистить фильтр
      </button>
    </form>
  </div>
</template>

<style scoped></style>
