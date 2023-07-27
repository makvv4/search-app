<script setup lang="ts">
import StarOutlineIcon from './icons/StarOutlineIcon.vue'
import StarIcon from './icons/StarIcon.vue'

const props = defineProps(['grade'])
</script>

<template>
  <div class="rating">
    <ul class="list text-nowrap">
      <li v-for="(star, i) in 5" :key="i" class="star">
        <StarIcon v-if="star <= props.grade" />
        <StarOutlineIcon v-else />
      </li>
      <sup>{{ props.grade }}</sup>
    </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffa900;
  .list {
    padding: 0;
    .star {
      display: inline-block;
      font-size: 18px;
      transition: all 0.2s ease-in-out;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>
