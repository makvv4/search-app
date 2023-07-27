<script setup lang="ts">
import { useSearchFiltersStore } from '@/stores/searchFiltersStore'

const SearchFiltersStore = useSearchFiltersStore()

function ratingTitle(rating: number): string {
  if (rating === 1) return '1 звезда'
  else if (rating === 5) return '5 звезд'
  else return `${rating} звезды`
}
</script>

<template>
  <div>
    <p class="form-label">Количество звезд</p>

    <div class="overflow-y-auto border rounded-3 mt-2 p-3" style="height: fit-content">
      <div v-for="rating in 5" :key="rating" class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          :value="rating"
          :id="`${rating}-star-rating`"
          v-model="SearchFiltersStore.checkedRatingValues"
        />
        <label class="form-check-label" :for="`${rating}-star-rating`">
          {{ ratingTitle(rating) }}
        </label>
      </div>
    </div>
  </div>
</template>
