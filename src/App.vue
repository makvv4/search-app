<script setup lang="ts">
import ProductsList from './components/ProductsList.vue'
import SearchFilters from './components/SearchFilters.vue'
</script>

<template>
  <main class="container my-5">
    <div class="row">
      <SearchFilters class="col-12 col-lg-3" />
      <ProductsList class="col-12 col-lg-9" />
    </div>
  </main>
</template>

<style scoped></style>
