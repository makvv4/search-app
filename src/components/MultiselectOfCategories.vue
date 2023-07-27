<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import { useSearchFiltersStore } from '@/stores/searchFiltersStore'

const SearchFiltersStore = useSearchFiltersStore()

const searchQuery: Ref<string> = ref('')

const categories = computed(() => {
  if (Array.isArray(SearchFiltersStore.categories) && searchQuery.value) {
    return SearchFiltersStore.categories.filter((category) => {
      return category.toLowerCase().includes(searchQuery.value.toLowerCase())
    })
  }
  return SearchFiltersStore.categories
})
</script>

<template>
  <div>
    <label for="searchQuery" class="form-label">Категория</label>
    <input
      class="form-control rounded-3 px-3 w-100"
      name="query"
      v-model="searchQuery"
      id="searchQuery"
      placeholder="Поиск по категориям"
    />

    <div
      v-if="categories?.length"
      class="overflow-y-auto border rounded-3 mt-2 p-3"
      style="height: 200px"
    >
      <div v-for="(category, i) in categories" :key="i" class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          :value="`${category}`"
          :id="`${category}`"
          v-model="SearchFiltersStore.checkedCategories"
        />
        <label class="form-check-label" :for="`${category}`"> {{ category }} </label>
      </div>
    </div>
    <div
      v-else
      class="d-flex justify-content-center align-items-center overflow-y-auto border rounded-3 mt-2 p-3 text-secondary text-center"
      style="height: 200px"
    >
      <p class="align-middle">К сожалению, по вашему запросу ничего не найдено :(</p>
    </div>
  </div>
</template>
