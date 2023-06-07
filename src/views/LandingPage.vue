<template>
  <div class="wrapper">
    <div class="hero-section">
      <div class="hero-img"></div>
      <div class="scroll-arrow">
        <img src="@/assets/landing-page/scroll-arrow.png" alt="scroll-arrow" />
      </div>
      <div class="container">
        <h2 class="mb-2">
          掌握養寵必備知識 共創寵物相伴<br />
          美好時光
        </h2>
        <SearchButton
          :text="'搜尋'"
          @click="router.push('/search')"
        />
      </div>
    </div>
    <div class="user-recommend-section">
      <div class="container">
        <div class="just-for-you-section">
          <h3 class="en-title mb-2 d-flex align-items-center">JUST FOR YOU</h3>
          <p class="mb-4">{{user.nickName}}，開始學習</p>
          <swiper
            class="swiper"
            :space-between="20"
            :slides-per-view="1.2"
            :centered-slides="false"
            :breakpoints="{
              '768': {
                slidesPerView: 2,
                spaceBetween: 20
              },
              '1024': {
                slidesPerView: 3.5,
                spaceBetween: 30
              }
            }"
          >
            <swiper-slide class="slide" v-for="i in 5" :key="i">
              <CourseCard-416-160
                :imageUrl="courseCardImg416160"
                :tag="'貓咪的貓叫聲'"
                :title="'第一章：不同種類的喵叫聲及其含義'"
                :info="'1.嬉鬧聲'"
                :time="30"
              />
            </swiper-slide>
          </swiper>
        </div>
        <div class="next-step-section-pc">
          <h3 class="en-title mb-2 d-flex align-items-center">NEXT STEP</h3>
          <p class="cn-title mb-9">為您挑選</p>
          <SearchButton :text="'立即上課'" />
          <div class="course-card-section">
            <CourseCard-856-517
              :imageUrl="courseCardImg"
              :level="'初階'"
              :title="'寵物攝影達人：捕捉寵物最佳畫面與構圖技巧'"
              :info="'學會寵物攝影的專業技巧，捕捉最佳畫面與構圖技巧，讓你的寵物照片更加生動、有趣與吸睛。'"
              :teacher="'陳曉明'"
              :time="16"
              :courseNum="52"
              :price="1600"
            />
          </div>
        </div>
        <div class="next-step-section-phone">
          <h3 class="en-title mb-2 d-flex align-items-center">NEXT STEP</h3>
          <p class="cn-title position-absolute z-index-top">為您挑選</p>
          <div class="course-card-section flex-center mb-2">
            <CourseCard-351-697
              :imageUrl="courseCardImg"
              :level="'初階'"
              :title="'寵物攝影達人：捕捉寵物最佳畫面與構圖技巧'"
              :info="'學會寵物攝影的專業技巧，捕捉最佳畫面與構圖技巧，讓你的寵物照片更加生動、有趣與吸睛。'"
              :teacher="'陳曉明'"
              :time="16"
              :courseNum="52"
              :price="1600"
            />
          </div>
          <div class="flex-center">
            <button class="search-btn-phone">
              <p>立即上課</p>
              <n-icon class="arrow-icon" size="32" color="#000000">
                <ArrowRightAltSharp />
              </n-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-section">
      <div class="container">
        <div class="">
          <h3 class="en-title mb-2 d-flex align-items-center">
            YOU MIGHT LIKE IT
          </h3>
          <p class="cn-title mb-4">你可能會喜歡</p>
          <swiper
            class="swiper"
            :modules="[Autoplay]"
            :space-between="20"
            :slides-per-view="1.2"
            :centered-slides="true"
            :breakpoints="{
              '768': {
                slidesPerView: 2,
                spaceBetween: 20
              },
              '1024': {
                slidesPerView: 2,
                spaceBetween: 30
              }
            }"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: false
            }"
          >
            <swiper-slide
              class="slide"
              v-for="item in carouselData"
              :key="item._id"
              @click="router.push(`/courseIntro/${item._id}`)"
            >
              <CourseCard-416-451
                :imageUrl="item.cover"
                :title="item.title"
                :teacher="'寵物訓練大師 Mr. Chen'"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>

    <div class="course-list-section">
      <div class="container">
        <div class="">
          <h3 class="en-title mb-2 d-flex align-items-center">
            EVERYONE IS LEARNING
          </h3>
          <p class="cn-title mb-4 d-flex align-items-center">
            大家都在學
            <span class="arrow-circle">
              <n-icon class="arrow-icon" size="32" color="#000000">
                <ArrowRightAltSharp />
              </n-icon>
            </span>
          </p>
          <div
            v-for="(item, index) in popularData"
            :key="index"
            style="margin-bottom: 40px"
          >
            <div class="mb-2 flex-between align-items-center">
              <h4 class="sub-title">{{ item.tag }}</h4>
              <p style="cursor: pointer">
                看更多
                <n-icon class="arrow-icon" size="16" color="#000000">
                  <ArrowRightAltSharp />
                </n-icon>
              </p>
            </div>
            <swiper
              class="swiper"
              :space-between="20"
              :slides-per-view="1.2"
              :centered-slides="false"
              :breakpoints="{
                '768': {
                  slidesPerView: 1.2,
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
                v-for="course in item.courses"
                :key="course._id"
                @click="router.push(`/courseIntro/${course._id}`)"
              >
                <CourseCard-416-451
                  :imageUrl="course.cover"
                  :title="course.title"
                  :teacher="course.instructorName"
                  :price="course.price"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <div class="faq-section">
      <Faq/>
    </div>
    <div class="topics-section">
      <div class="container">
        <div class="">
          <h3 class="en-title mb-2 d-flex align-items-center">
            FEATURED TOPICS
          </h3>
          <p class="cn-title mb-4">精選主題</p>
        </div>
      </div>
      <swiper
        class="swiper"
        :modules="[Autoplay]"
        :space-between="20"
        :slides-per-view="1.5"
        :centered-slides="false"
        :breakpoints="{
          '768': {
            slidesPerView: 3.5,
            spaceBetween: 20
          },
          '1024': {
            slidesPerView: 5.5,
            spaceBetween: 30
          }
        }"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false
        }"
      >
        <swiper-slide class="slide" v-for="i,index in tagNames" :key="index">
          <div class="topic-scrollbar">
            <div @click="router.push(`/search/${i}`)">
              <button class="topic-button" style="cursor: pointer">
                <p>{{i}}</p>
              </button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <swiper
        class="swiper"
        :modules="[Autoplay]"
        :space-between="20"
        :slides-per-view="1.5"
        :centered-slides="false"
        :breakpoints="{
          '768': {
            slidesPerView: 3.5,
            spaceBetween: 20
          },
          '1024': {
            slidesPerView: 5.5,
            spaceBetween: 30
          }
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
      >
        <swiper-slide class="slide" v-for="i,index in tagNamesReverse" :key="index">
          <div class="topic-scrollbar" style="margin-left: 100px">
            <div @click="router.push(`/search/${i}`)">
              <button class="topic-button" style="cursor: pointer">
                <p>{{i}}</p>
              </button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted,computed } from 'vue'
import { NIcon } from 'naive-ui'
import { ArrowRightAltSharp } from '@vicons/material'
import courseCardImg from '@/assets/landing-page/course-card-img.png'
import courseCardImg416160 from '@/assets/landing-page/course-card-img-416-160.png'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Autoplay } from 'swiper'
import 'swiper/css'
import type { AxiosResponse } from 'axios'
import HomePage from '@/api/homePage.js'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const router = useRouter()
const tagNames = ref<string[]>([])
const carouselData = ref<
  {
    _id: string
    title: string
    cover: string
  }[]
>([])
const popularData = ref<
  {
    tag: string
    courses: {
      cover: string
      discountPrice: number
      isFree: boolean
      price: number
      title: string
      instructorName:string
      _id: string
    }[]
  }[]
>([])

const user = ref<{
  nickName: string
}>({nickName: '親愛的'})
const accessToken = ref<string | null>(localStorage.getItem('accessToken'))

async function getData() {
  const registerResult = (await HomePage.apiGetHomePageData()) as AxiosResponse
  if (registerResult.data.data) {
    carouselData.value = registerResult.data.data.carousel
    popularData.value = registerResult.data.data.popular
    tagNames.value = registerResult.data.data.tagNames
  }
}
const tagNamesReverse = computed(()=>tagNames.value.reverse())
async function getUser() {
  if (!accessToken.value) {
    return
  }
  const userData = await userStore.getUserData()
  user.value.nickName = userData.nickname || '親愛的'
}
onMounted(function (){
  getData(),
  getUser()
})
</script>
<style lang="scss" scoped>
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
.hero-section {
  width: 100%;
  height: 100%;
  padding: 4rem 0 8rem 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 0 22rem 0;
  }
  .scroll-arrow {
    position: absolute;
    width: 55px;
    height: 21px;
    left: 38%;
    bottom: 14%;

    @media (max-width: 768px) {
      left: 4%;
      bottom: 18%;
    }
  }
  .hero-img {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    background-image: url('@/assets/landing-page/hero-img-1168-968.png');
    background-position: bottom;
    background-size: cover;

    @media (max-width: 768px) {
      width: 73%;
      background-image: url('@/assets/landing-page/hero-img-269-812.png');
    }
  }

  h2 {
    font-weight: 900;
    font-size: 160px;
    line-height: 192px;

    @media (max-width: 768px) {
      font-weight: 900;
      font-size: 48px;
      line-height: 57.6px;
    }
  }
}
.user-recommend-section {
  width: 100%;
  height: 100%;
  padding: 4rem 0;
  .just-for-you-section {
    padding-bottom: 8rem;
    p {
      font-weight: 900;
      font-size: 48px;
      line-height: 57.6px;
    }
  }
  .next-step-section-pc {
    @media (max-width: 768px) {
      display: none;
    }
    .course-card-section {
      position: absolute;
      top: 0;
      right: 0;
      z-index: -2;
    }
  }
  .next-step-section-phone {
    display: none;
    @media (max-width: 768px) {
      display: block;
      .search-btn-phone {
        width: 269px;
        padding: 40.5px 0;
        display: flex;
        justify-content: center;
        border: 4px solid #020202;
        border-radius: 999px;
        background-color: transparent;

        p {
          font-weight: 900;
          font-size: 24px;
          line-height: 28.8px;
          margin-right: 1rem;
        }
      }
    }
  }
}

.course-list-section {
  padding: 8rem 0;
  .arrow-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    margin-left: 20px;
    border: 4px solid #020202;
    border-radius: 50%;

    @media (max-width: 768px) {
      width: 48px;
      height: 48px;
      margin-left: 143px;
    }
    @media (hover: hover) {
      &:hover, &:hover svg {
        border-color: #ED888C;
        color: #ED888C;
        cursor: pointer;
      }
    }
  }
}
.carousel-section {
  padding-top: 8rem;
  padding-bottom: 0;
  .carousel-img {
    width: 100%;
    height: 640px;
    object-fit: contain;
  }
}

.faq-section {
  padding: 8rem 0;
}

.topics-section {
  background-color: #f8f8f8;
  padding: 8rem 2rem;
  @media (max-width: 768px) {
    padding: 8rem 2rem;
  }
  .topic-scrollbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    // margin-bottom: 8rem;
    .topic-button {
      width: 210px;
      height: 10%;
      padding: 40px 20px;
      border: 4px solid #020202;
      border-radius: 999px;
      background-color: transparent;
      margin-right: 5%;
      margin-bottom: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-weight: 900;
        font-size: 24px;
        line-height: 120%;
      }

      @media (max-width: 768px) {
        width: 192px;
        height: 80px;
        padding: 28px 0;
      }
    }
  }
}

:deep() {
  .en-title {
    font-weight: 900;
    font-size: 32px;
    line-height: 38.4px;

    &:before {
      content: "";
      display: inline-block;
      width: 16px;
      height: 16px;
      background: #ed888c;
      margin-right: 24px;
    }

    @media (max-width: 768px) {
      font-weight: 900;
      font-size: 20px;
      line-height: 24px;
    }
  }

  .cn-title {
    font-weight: 900;
    font-size: 120px;
    line-height: 144px;

    @media (max-width: 768px) {
      font-weight: 900;
      font-size: 48px;
      line-height: 57.6px;
    }
  }

  .sub-title {
    font-weight: 900;
    font-size: 48px;
  }
  .mb-4 {
    margin-bottom: 4rem;
  }

  .mb-2 {
    margin-bottom: 2rem;
  }

  .mb-9 {
    margin-bottom: 9rem;
  }

  .position-absolute {
    position: absolute;
  }

  .z-index-top {
    z-index: 3;
  }

  .d-flex {
    display: flex;
  }

  .align-items-center {
    align-items: center;
  }
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flex-between {
    display: flex;
    justify-content: space-between;
  }
}
</style>
