import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { useSearchFiltersStore } from '@/stores/searchFiltersStore'

export const useProductsStore = defineStore('products', () => {
  const searchFiltersStore = useSearchFiltersStore()

  const products: Ref<ProductInfo[] | null> = ref(null)

  async function getProducts() {
    await fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        products.value = data.products
        console.table(data.products)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  getProducts()

  const filteredProducts = computed(() => {
    const productsList = ref(products.value)
    if (Array.isArray(productsList.value)) {
      if (searchFiltersStore.checkedCategories.length) {
        productsList.value = productsList.value.filter((product) =>
          searchFiltersStore.checkedCategories.includes(product.category)
        )
      }
      if (searchFiltersStore.checkedRatingValues.length) {
        productsList.value = productsList.value.filter((product) =>
          searchFiltersStore.checkedRatingValues.includes(parseInt(`${product.rating}`, 10))
        )
      }
      if (searchFiltersStore.discount) {
        productsList.value = productsList.value.filter(
          (product) => product.discountPercentage >= searchFiltersStore.discount
        )
      }
      productsList.value = productsList.value.filter(
        (product) =>
          product.price >= searchFiltersStore.priceRange[0] &&
          product.price <= searchFiltersStore.priceRange[1]
      )
    }
    return productsList.value
  })

  return {
    filteredProducts
  }
})

interface ProductInfo {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}
