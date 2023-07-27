import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useSearchFiltersStore = defineStore('search-filters', () => {
  const categories: Ref<string[] | null> = ref(null)

  const priceRange: Ref<[from: number, to: number]> = ref([0, 1749])
  const checkedCategories: Ref<string[]> = ref([])
  const checkedRatingValues: Ref<number[]> = ref([])
  const discount: Ref<number | null> = ref(null)
  const filters = ref([])

  async function getCategories() {
    await fetch('https://dummyjson.com/products/categories')
      .then((response) => response.json())
      .then((data) => {
        categories.value = data
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function $reset() {
    priceRange.value = [0, 1749]
    checkedCategories.value = []
    checkedRatingValues.value = []
    discount.value = null
  }

  getCategories()

  return {
    categories,
    filters,
    priceRange,
    checkedCategories,
    checkedRatingValues,
    discount,
    $reset
  }
})
