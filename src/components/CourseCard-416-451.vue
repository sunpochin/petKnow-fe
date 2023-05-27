<script setup lang="ts">
const props = defineProps({
  imageUrl: String,
  title: String,
  teacher: String,
  price: Number
})
console.log(props)
</script>
<template>
  <div class="course-card">
    <div class="card-img">
      <img :src="imageUrl" alt="course-img" />
    </div>
    <div class="card-content">
      <h3 class="title">{{ title }}</h3>
      <div class="flex-between">
        <p class="teacher">{{ teacher }}</p>
        <p class="price">NT${{ price }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.course-card {
  width: 100%;
  max-width: 416px;
  max-height: 451px;

  .card-img {
    width: 100%;
    height: 69%;
    border-radius: 0px 0px 80px 0px;
    overflow: hidden;
    margin-bottom: 1.5rem;
  }

  .card-content {
    width: 100%;
    height: 100%;

    .title {
      font-weight: 900;
      font-size: 32px;
      line-height: 120%;
      margin-bottom: 1.5rem;
    }

    .teacher {
      font-weight: 400;
      font-size: 20px;
      line-height: 120%;
    }

    .price {
      font-weight: 900;
      font-size: 20px;
      line-height: 120%;
      color: #ed888c;
    }
  }
}
</style>
