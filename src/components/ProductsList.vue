<script setup lang="ts">
import { useProductsStore } from '@/stores/productsStore'
import StarRating from '@/components/StarRating.vue'
import EllipseIcon from '@/components/icons/EllipseIcon.vue'

const productsStore = useProductsStore()
</script>

<template>
  <div>
    <ul v-if="productsStore.filteredProducts?.length" class="list-group gap-2">
      <li
        v-for="product in productsStore.filteredProducts"
        :key="product.id"
        class="list-group-item border rounded-3"
      >
        <div class="row">
          <div class="col-12 col-lg-10 mt-2">
            <p class="fs-2 m-0">{{ product.title }}</p>
            <div class="d-flex align-items-center gap-2">
              <StarRating :grade="product.rating" />
              <span class="text-secondary text-nowrap">{{ product.category }}</span>
              <EllipseIcon class="text-secondary" width="4px" />
              <span class="text-secondary text-nowrap">{{ product.stock }} шт.</span>
            </div>
          </div>
          <div class="col-12 col-lg-2 text-start text-lg-end mt-2">
            <p class="fs-3 m-0">{{ product.price }}$</p>
            <small class="text-secondary text-nowrap"
              >Скидка: {{ product.discountPercentage }}%</small
            >
          </div>
          <span class="col-12 col-lg-8 my-3">{{ product.description }}</span>
          <button class="btn btn-primary col-12 col-lg-4 my-3 h-25">Добавить в корзину</button>
        </div>
      </li>
    </ul>
    <div v-else class="p-4 fs-3 text-center">Записей не найдено</div>
  </div>
</template>

<style scoped></style>
