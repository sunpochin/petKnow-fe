<template>
  <div class="wrapper">
    <div class="bg-gray" style="height: 100%">
      <div class="container">
        <div class="content">
          <n-grid
            cols="12"
            item-responsive
            responsive="screen"
            class="fit"
            :x-gap="24"
          >
            <n-grid-item span="12 m:12 l:8" style="height: 100%">
              <VimeoBlock
                style="width: 100%"
                v-if="authStore.accessToken"
                :videoId="videoId"
              />
              <div v-else class="fit" style="background: #d3d3d3">
                <img
                  class="courseCover"
                  :src="courseIntro?.cover"
                  :alt="courseIntro?.title"
                  style="
                    width: 100%;
                    object-fit: cover;
                    display: block;
                    position: relative;
                  "
                />
                <n-icon class="playBtn" @click="playBtnAction">
                  <PlayCircle />
                </n-icon>
              </div>

              <div style="margin: 32px 0">
                <div
                  style="
                    font-weight: bold;
                    font-size: 28px;
                    margin-bottom: 20px;
                  "
                >
                  {{ courseIntro?.title }}
                </div>
                <div class="flex justify-between">
                  <span>By {{ courseIntro?.name }}</span>
                  <span
                    >開設時間：{{
                      getDate(
                        courseIntro?.shelfDate
                          ? String(courseIntro?.shelfDate)
                          : ''
                      )
                    }}</span
                  >
                </div>
              </div>

              <n-tabs
                type="card"
                class="custom-tabs"
                animated
                style="margin-bottom: 20px"
              >
                <n-tab-pane
                  name="classIntro"
                  tab="課程介紹"
                  style="padding: 28px 0"
                >
                  <div v-html="courseIntro?.courseIntroduction"></div>
                </n-tab-pane>
                <n-tab-pane
                  name="teacherIntro"
                  tab="講師簡介"
                  style="padding: 28px 0"
                >
                  <div v-html="courseIntro?.instructors"></div>
                </n-tab-pane>
              </n-tabs>
              <div style="padding: 20px 0">
                <n-button
                  strong
                  round
                  color="#EC888C"
                  style="width: 100%"
                  icon-placement="right"
                  @click="cartStore.addCart(String(route.params.id))"
                >
                  <template #icon>
                    <n-icon>
                      <Cart />
                    </n-icon>
                  </template>
                  立即購課
                </n-button>
              </div>
              <div
                style="font-weight: bold; font-size: 28px; margin-bottom: 20px"
              >
                {{ courseIntro?.name }} 還開設了...
              </div>
              <swiper
                class="swiper"
                :space-between="20"
                :slides-per-view="1.2"
                :centered-slides="false"
                :breakpoints="{
                  '768': {
                    slidesPerView: 3,
                    spaceBetween: 20
                  },
                  '1024': {
                    slidesPerView: 3.5,
                    spaceBetween: 30
                  }
                }"
              >
                <swiper-slide
                  class="slide"
                  v-for="item in lecturerRelatedCourses"
                  :key="item._id"
                  @click="router.push(`/courseIntro/${item._id}`)"
                >
                  <CourseCard-416-451
                    :imageUrl="item.cover"
                    :title="item.title"
                    imgHeight="height:200px"
                  />
                </swiper-slide>
              </swiper>
            </n-grid-item>
            <n-grid-item span="12 m:12 l:4" class="bg-white">
              <div style="display: flex; align-items: center; padding: 20px">
                <n-icon size="20" color="#020202" style="margin-right: 12px">
                  <Book />
                </n-icon>
                <span>課程內容</span>
              </div>
              <n-collapse accordion>
                <n-collapse-item
                  v-for="chapter in courseIntro?.chapters"
                  :key="chapter._id"
                  :title="`第 ${chapter.sequence} 節 - ${chapter.title}`"
                  :name="chapter.sequence"
                >
                  <template #header-extra>
                    <div style="color: #a9a8a8; margin-right: 12px">
                      <!-- 0 / 3  -->
                      <span style="margin-left: 16px">
                        {{ formatSecond(chapter.time) }}
                      </span>
                    </div>
                  </template>
                  <div
                    class="classItem"
                    v-for="subChapter in chapter.subchapters"
                    :key="subChapter._id"
                    @click="changeVideo(subChapter.fileName)"
                  >
                    <n-checkbox
                      :disabled="authStore.accessToken ? false : true"
                      v-model:checked="isDone"
                      style="margin-right: 12px"
                    />
                    <span>
                      <div style="font-weight: bold; margin-bottom: 12px">
                        {{ subChapter.sequence }}. {{ subChapter.title }}
                      </div>
                      <div style="color: #a9a8a8">
                        {{ formatSecond(subChapter.time) }}
                      </div>
                    </span>
                  </div>
                </n-collapse-item>
              </n-collapse>
            </n-grid-item>
          </n-grid>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css'
import { Book, Cart, PlayCircle } from '@vicons/ionicons5'
import { useRoute, useRouter } from 'vue-router'
import type { AxiosResponse } from 'axios'
import { useCartStore } from '@/stores/cart.js'
import { useAuthStore } from '@/stores/auth.js'
import { useNotification } from 'naive-ui'
import HomePage from '@/api/homePage.js'

const notification = useNotification()
const cartStore = useCartStore()
const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()
const isDone = ref(false)

const courseIntro = ref<{
  _id: string
  title: string
  courseIntroduction: string
  name: string
  instructors: string
  shelfDate: string
  chapters: {
    _id: string
    sequence: number
    title: string
    time: number
    total: number
    subchapters: {
      _id: string
      sequence: number
      title: string
      time: number
      fileName: string
    }[]
  }[]
  cover: string
}>()
const lecturerRelatedCourses = ref<
  {
    _id: string
    title: string
    cover: string
  }[]
>([])
watch(
  () => route.params.id,
  () => {
    getCourseIntro()
  }
)
async function getCourseIntro () {
  if (localStorage.getItem('accessToken')) {
    console.log('accessToken')
  } else {
    const result = (await HomePage.apiGetCourseIntroData(
      String(route.params.id)
    )) as AxiosResponse
    courseIntro.value = result.data.data.course
    lecturerRelatedCourses.value = result.data.data.lecturerRelatedCourses
    console.log('result', courseIntro.value, lecturerRelatedCourses.value)
  }
}
function getDate (date: string) {
  if (date) {
    const fullDate = new Date(date)
    console.log('fullDate', fullDate)
    const yyyy = fullDate.getFullYear()
    const MM =
      fullDate.getMonth() + 1 >= 10
        ? fullDate.getMonth() + 1
        : '0' + (fullDate.getMonth() + 1)
    const dd =
      fullDate.getDate() < 10 ? '0' + fullDate.getDate() : fullDate.getDate()
    const today = yyyy + '/' + MM + '/' + dd
    return today
  } else {
    return ''
  }
}
function formatSecond (seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return minutes + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds
}
function playBtnAction () {
  notification.error({
    content: '購買課程後才能觀看課程',
    duration: 1500,
    keepAliveOnHover: false,
    closable: false
  })
}
// vimeo 影片ID
const videoId = ref('807306477')
onMounted(() => {
  console.log('route.params.id', route.params.id)
  getCourseIntro()
})
function changeVideo (id: string) {
  videoId.value = id
  console.log('videoId', id)
}
</script>
<style lang="scss" scoped>
.swiper {
  width: 100%;
  min-height: 100%;
}

.slide {
  min-width: 150px;
}
.wrapper {
  width: 100%;
  height: 100%;
}
.container {
  max-width: 1328px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

.classItem {
  display: flex;
  padding: 20px;
  cursor: pointer;
}

.playBtn {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 80px;
  color: #fff;
}

.courseCover {
  height: 481px;
  @media (max-width: 768px) {
    height: 200px;
  }
}
</style>
