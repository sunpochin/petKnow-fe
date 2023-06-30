<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, computed, onMounted, onUpdated } from 'vue'
import SearchPage from '@/api/searchPage.js'
import type { AxiosResponse } from 'axios'

const route = useRoute()
const router = useRouter()
const page = ref(1)
const totalPage = ref(0)
const resultStr = ref('')
const prevSearchTag = ref('')
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

const resultNum = computed(() => coursesData.value.length)

async function onSearch (searchTag: string) {
  prevSearchTag.value = searchTag
  resultStr.value = '查詢中...'
  if (searchTag.trim() === '') {
    resultStr.value = '請輸入關鍵詞'
    return
  }
  try {
    const searchResult = (await SearchPage.apiGetSearchPageData(
      searchTag
    )) as AxiosResponse
    if (searchResult.data.data) {
      coursesData.value = searchResult.data.data.courses
    }
    resultStr.value =
      '和 ' + searchTag + ' 相關的課程有 ' + resultNum.value + ' 筆結果'
  } catch (error) {
    coursesData.value = []
    resultStr.value = '找不到和 ' + searchTag + ' 相關的課程，請重新輸入關鍵詞'
  }
}

// 處理「已經在 search 頁時，在 search-box 搜尋」的狀況
onUpdated(function () {
  if (prevSearchTag.value === route.params.searchTag) {
    // 擋掉第二次以後的搜尋，避免無限迴圈。
    return
  }
  onSearch(route.params.searchTag as string)
})

onMounted(function () {
  onSearch(route.params.searchTag as string)
})
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h2 class="result">{{ resultStr }}</h2>
      <div class="result-cards">
        <n-grid cols="3" :x-gap="36" :y-gap="64" item-responsive>
          <n-grid-item
            span="3 769:1"
            v-for="(item, index) in coursesData"
            :key="index"
          >
            <div class="flex-center">
              <CourseCard-416-451
                :imageUrl="item.cover"
                :title="item.title"
                :teacher="item.instructorName"
                :price="item.price"
                @click="router.push(`/courseIntro/${item._id}`)"
              />
            </div>
          </n-grid-item>
        </n-grid>
      </div>
      <div class="pagination" v-if="totalPage > 0">
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
