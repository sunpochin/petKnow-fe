<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="wording">以下是你購物車內的商品</h1>
      <h2 class="result">
        購物車共有 {{ cartStore.cartData?.length || 0 }} 堂課程
      </h2>
      <div class="result-cards" v-if="cartStore.cartData?.length > 0">
        <CartComponent
          v-for="item in cartStore.cartData"
          :key="item?._id"
          :imageUrl="item.cover"
          :level="item.level"
          :title="item.title"
          :teacher="item.instructorName"
          :time="item.time"
          :courseNum="Number(item.total)"
          :discountPrice="item.discountPrice"
          :price="item.price"
          :id="item._id"
        />
      </div>
      <div v-else style="text-align: center">目前購物車裡沒有課程～</div>
      <div
        class="column flex-end"
        style="margin: 1rem 0"
        v-if="cartStore.cartData?.length > 0"
      >
        <div class="d-flex flex-between" style="width: 40%; padding: 1rem">
          <div>小計</div>
          <div>${{ cartStore.totalPrice.toLocaleString() }}</div>
        </div>
        <div
          class="d-flex flex-between"
          style="width: 40%; padding: 1rem"
          v-if="cartStore.couponPrice"
        >
          <div>優惠價格</div>
          <div>- ${{ cartStore.couponPrice.toLocaleString() }}</div>
        </div>
        <div class="d-flex flex-between" style="width: 40%; padding: 1rem">
          <div>總計</div>
          <div v-if="cartStore.discountedPrice">
            ${{ cartStore.discountedPrice.toLocaleString() }}
          </div>
          <div v-else>${{ cartStore.totalPrice.toLocaleString() }}</div>
        </div>
        <div class="d-flex flex-between" style="width: 40%; padding: 1rem">
          <div>優惠券折抵</div>
          <n-select
            v-model:value="cartStore.couponValue"
            :options="cartStore.couponOptions"
            label-field="label"
            value-field="couponCode"
            style="max-width: 250px"
            clearable
            placeholder="請選擇優惠券"
            @click="cartStore.getCouponSelectData"
            @update:value="cartStore.addCoupon"
          />
        </div>
        <n-button
          style="background: #ed888c; color: #fff; box-shadow: none"
          @click="cartStore.createOrder"
          quaternary
          >下一步
          <n-icon class="arrow-icon" size="16" color="#fffff">
            <ArrowRightAltSharp /> </n-icon
        ></n-button>
      </div>

      <div style="margin: 40px 0">
        <div class="mb-2 flex-between align-items-center">
          <h4 class="sub-title">你可能會喜歡</h4>
          <p class="show-more-btn">
            看更多
            <n-icon class="arrow-icon" size="16" color="#000000">
              <ArrowRightAltSharp />
            </n-icon>
          </p>
        </div>
        <swiper
          :modules="[Autoplay]"
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
            v-for="(course, index) in cartStore.youMightLike"
            :key="index"
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
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { ArrowRightAltSharp } from '@vicons/material'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Autoplay } from 'swiper'
import { useCartStore } from '@/stores/cart.js'
const router = useRouter()
const cartStore = useCartStore()

onMounted(async () => {
  if (
    localStorage.getItem('accessToken') !== '' &&
    localStorage.getItem('fromVisitorCart') === 'true'
  ) {
    localStorage.removeItem('fromVisitorCart')
  }
  await cartStore.getCartData()
  await cartStore.getCouponSelectData()
})
</script>
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

.sub-title {
  font-weight: 900;
  font-size: 48px;
}
.mb-4 {
  margin-bottom: 4rem;
}
// show-more-btn {
//   color: #020202;
//   font-weight: 900;
//   display: flex;
//   align-items: center;
//   i {
//     margin-left: 8px;
//   }
//   @media (hover: hover) {
//     &:hover,
//     &:hover svg {
//       color: #ed888c;
//       cursor: pointer;
//     }
//   }
// }

.align-items-center {
  align-items: center;
}
.column {
  flex-direction: column;
}
.full-width {
  width: 100%;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-end {
  display: flex;
  align-items: end;
}
.flex-between {
  display: flex;
  justify-content: space-between;
}
.mb-2 {
  margin-bottom: 2rem;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
<style>
.n-base-select-menu .n-base-select-option .n-base-select-option__check {
  opacity: 0;
}
</style>
