<script setup lang="ts">
import CourseCard416451 from '@/components/CourseCard-416-451.vue'
import courseCardImg416451 from '@/assets/landing-page/course-card-img-416-451.png'
import { useRoute } from 'vue-router'
import { ref, onMounted} from 'vue'
import SearchPage from '@/api/searchPage.js'
import type { AxiosResponse } from 'axios'

const route = useRoute()
const searchTag = ref(route.params.searchTag)
const resultNum = ref(24)
const page = ref(1)
const totalPage = ref(5)

const coursesData = ref<
  {
    cover: string
    discountPrice: number
    instructorName: string
    isFree: boolean
    level: string
    price: number
    shortDescription: string
    time: number
    title: string
    total: number
    _id: string
  }[]
>([])

async function getData(searchTag:string) {
  const searchResult = (await SearchPage.apiGetSearchPageData(searchTag)) as AxiosResponse
  // console.log('searchResult: ', searchResult)
  if (searchResult.data.data) {
    coursesData.value = searchResult.data.data.courses

    console.log('coursesData: ', coursesData)
  }
}

onMounted(function () {
  getData(route.params.searchTag as string)
})

</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h2 class="result">和 {{ searchTag }} 相關的課程有 {{ resultNum }} 筆結果</h2>
      <div class="result-cards">
        <n-grid cols="3" :x-gap="36" :y-gap="64" item-responsive>
          <n-grid-item span="3 769:1" v-for="(item, index) in coursesData" :key="index">
            <div class="flex-center">
              <CourseCard-416-451 :imageUrl="item.cover" :title="item.title"
                :teacher="item.instructorName" :price="item.price" />
            </div>
          </n-grid-item>
        </n-grid>
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
