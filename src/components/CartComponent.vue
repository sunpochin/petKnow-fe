<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart.js'
const cartStore = useCartStore()
const router = useRouter()

const props = defineProps({
  imageUrl: String,
  level: String,
  title: String,
  teacher: String,
  time: Number,
  price: Number,
  courseNum: Number,
  discountPrice: Number,
  id: String
})
const formattedPrice = props.price?.toLocaleString()
const formattedDiscountPrice = props.discountPrice?.toLocaleString()
console.log(props)
</script>
<template>
  <div class="course-card">
    <div class="card-img cursor-pointer">
      <img
        style="object-fit: cover; width: 100%"
        :src="imageUrl"
        alt="course-img"
        @click="router.push(`/courseIntro/${id}`)"
      />
    </div>
    <div class="card-content">
      <div class="card-upper">
        <p
          class="title cursor-pointer"
          @click="router.push(`/courseIntro/${id}`)"
        >
          {{ title }}
        </p>
        <p
          class="discountPrice"
          v-if="props.discountPrice"
          style="margin-right: 1rem"
        >
          NT${{ formattedDiscountPrice }}
        </p>
        <p :class="props.discountPrice ? 'price' : 'discountPrice'">
          NT${{ formattedPrice }}
        </p>
        <p
          class="remove cursor-pointer"
          @click="cartStore.deleteCart(String(id))"
        >
          移除
        </p>
      </div>
      <hr />
      <div class="card-lower">
        <div class="lower-1">
          <div class="lower-2">{{ teacher }}老師</div>
          <div class="lower-2">共計 {{ time }} 小時</div>
        </div>
        <div class="lower-1">
          <div class="lower-2">{{ courseNum }} 堂講座</div>
          <div class="lower-2">{{ level }}課程</div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  width: 636px;
  height: 38px;
  /* TC / Heading03 / Regular */
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  /* or 38px */
  /* Black/100 */
  color: #020202;
}

.course-card {
  @media (max-width: 768px) {
    flex-direction: column;
  }

  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;

  .card-img {
    // width: 31%;
    height: 100%;
    border-radius: 0px 0px 80px 0px;
    overflow: hidden;

    img {
      height: 312px;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }

  .card-content {
    // width: 69%;
    width: 100%;

    .card-upper {
      height: 70%;
      display: flex;
      justify-content: space-between;

      @media (max-width: 768px) {
        flex-direction: column;
        height: 200px;
        margin-bottom: 1.5rem;
        // margin: 0rem, auto, 2rem;
      }

      // font-weight: 900;
      // font-size: 32px;
      // line-height: 120%;
      // margin-bottom: 1.5rem;
      .price {
        text-decoration: line-through;
        height: 38px;
        /* TC / Heading03 / Bold */
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 120%;
        /* or 38px */
        text-align: right;
        /* Black/100 */
        color: #d3d3d3;
        // /* Inside auto layout */
        // flex: none;
        // order: 0;
        // flex-grow: 0;

        @media (max-width: 768px) {
          // width: 196px;
          width: 48px;
          height: 29px;
          font-size: 24px;
        }
      }
      .discountPrice {
        height: 38px;
        /* TC / Heading03 / Bold */
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 120%;
        /* or 38px */
        text-align: right;
        /* Black/100 */
        color: #020202;
        // /* Inside auto layout */
        // flex: none;
        // order: 0;
        // flex-grow: 0;

        @media (max-width: 768px) {
          // width: 196px;
          width: 48px;
          height: 29px;
          font-size: 24px;
        }
      }
      .remove {
        /* 移除 */
        // width: 32px;
        height: 24px;
        /* TC / Body / Bold */
        font-family: 'Noto Sans TC';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;
        /* identical to box height, or 24px */
        /* Primary/Main */
        color: #ed888c;
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
      }
    }

    .card-lower {
      height: 30%;
      width: 100%;
      display: flex;
      padding: 0, 4rem, 0, 1rem;

      @media (max-width: 768px) {
        flex-direction: column;
      }

      .lower-1 {
        display: flex;
        align-self: flex-end;

        width: 50%;

        @media (max-width: 768px) {
          flex-direction: row;
          width: 100%;
        }

        .lower-2 {
          width: 50%;
          padding-left: 1rem;
        }
      }

      // font-weight: 900;
      // font-size: 32px;
      // line-height: 120%;
      // margin-bottom: 1.5rem;
    }

    .teacher {
      font-weight: 700;
      font-size: 48px;
      line-height: 120%;
    }
  }
}
.cursor-pointer {
  cursor: pointer;
}
</style>
