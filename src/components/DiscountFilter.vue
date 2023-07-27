<script setup lang="ts">
import { useSearchFiltersStore } from '@/stores/searchFiltersStore'

const SearchFiltersStore = useSearchFiltersStore()
</script>

<template>
  <label for="discount" class="form-label">Скидка (от)</label>
  <input
    class="form-control rounded-3 px-3 w-100"
    type="number"
    name="query"
    v-model="SearchFiltersStore.discount"
    id="discount"
    placeholder="Например, от 10"
  />
</template>
