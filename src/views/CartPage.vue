<script setup lang="ts">
import CourseCard416451 from '@/components/CourseCard-416-451.vue'
import courseCardImg416451 from '@/assets/landing-page/course-card-img-416-451.png'
import CartComponent from '@/components/CartComponent.vue'

import { useRoute } from 'vue-router'
import { ref } from 'vue'
import courseCardImg from '@/assets/landing-page/course-card-img.png'

const route = useRoute()
const searchTag = ref(route.params.searchTag)
const resultNum = ref(5)
const page = ref(1)
const totalPage = ref(5)

</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="wording">以下是你購物車內的商品</h1>
      <h2 class="result">購物車共有 {{ resultNum }} 堂課程</h2>
      <div class="result-cards">
        <CartComponent :imageUrl="courseCardImg" :level="'初階'" :title="'寵物攝影達人：捕捉寵物最佳畫面與構圖技巧'"
          :info="'學會寵物攝影的專業技巧，捕捉最佳畫面與構圖技巧，讓你的寵物照片更加生動、有趣與吸睛。'" :teacher="'陳曉明'" :time="16" :courseNum="52"
          :price="1600" />

      </div>
      <div class="pagination">
        <n-pagination v-model:page="page" :page-count="totalPage" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
}

.container {
  max-width: 1328px;
  height: fit-content;
  margin: 0 auto;
  padding: 1rem;
}

.result {
  padding: 1rem;
}

.result-cards {
  padding: 1rem;
}

.pagination {
  margin-top: 3rem;
  width: 100%;
  height: 100%;
  padding: 3rem;
  display: flex;
  justify-content: center;
}
</style>
