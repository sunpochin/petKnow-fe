<script setup lang="ts">
const props = defineProps({
  imageUrl: String,
  title: String,
  teacher: String,
  price: Number
})
const formattedPrice = props.price?.toLocaleString()
// console.log(props)
</script>
<template>
  <div class="course-card" style="cursor: pointer">
    <div class="card-img">
      <img
        style="object-fit: cover; width: 100%"
        :src="imageUrl"
        alt="course-img"
      />
    </div>
    <div class="card-content">
      <h3 class="title">{{ title }}</h3>
      <div class="flex-between">
        <p class="teacher">{{ teacher }}</p>
        <p class="price" v-if="props.price">NT${{ formattedPrice }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.course-card {
  width: 100%;
  height: 100%;
  .card-img {
    width: 100%;
    height: 69%;
    border-radius: 0px 0px 80px 0px;
    overflow: hidden;
    margin-bottom: 1.5rem;
    img {
      height: 312px;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }

  .card-content {
    width: 100%;
    height: 31%;

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
