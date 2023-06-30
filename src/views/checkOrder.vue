<template>
  <div class="wrapper">
    <div class="container">
      <div style="text-align: center">
        <h2 style="font-weight: bold">確認訂單</h2>
        <div>
          這筆訂單共有 {{ cartStore.orderData?.shoppingCart?.length }} 堂課程
        </div>
        <n-divider />
      </div>

      <div class="flex justify-between" style="margin: auto; flex-wrap: wrap">
        <div style="word-break: break-all">
          訂單編號：{{ cartStore.goldFlowData._id }}
        </div>
        <div>訂購日期：{{ getDate() }}</div>
      </div>
      <div style="margin: 16px 0">
        <n-data-table :columns="columns" :data="data" :bordered="false" />
      </div>
      <div
        class="d-flex flex-between"
        style="padding: 1rem; text-align: center"
        v-if="cartStore.couponPrice"
      >
        <span
          >優惠價格:
          <span style="color: red">
            - ${{ cartStore.couponPrice.toLocaleString() }}</span
          ></span
        >
      </div>
      <div
        style="
          font-size: 20px;
          text-align: center;
          font-weight: bold;
          margin-bottom: 16px;
        "
      >
        結帳總金額： $
        {{
          cartStore.orderData?.discountedPrice
            ? cartStore.orderData?.discountedPrice.toLocaleString()
            : cartStore.orderData?.totalPrice.toLocaleString()
        }}
      </div>
      <div class="flex justify-center">
        <n-button
          style="margin-right: 16px"
          quaternary
          @click="router.push('/cart')"
          >返回購物車</n-button
        >
        <!-- 藍新金流 -->
        <form action="https://ccore.newebpay.com/MPG/mpg_gateway" method="post">
          <input
            type="hidden"
            name="MerchantID"
            :value="cartStore.goldFlowData.merchantID"
          />
          <input
            type="hidden"
            name="TradeSha"
            :value="cartStore.goldFlowData.tradeSha"
          />
          <input
            type="hidden"
            name="TradeInfo"
            :value="cartStore.goldFlowData.tradeInfo"
          />
          <input
            type="hidden"
            name="TimeStamp"
            :value="cartStore.goldFlowData.timeStamp"
          />
          <input
            type="hidden"
            name="Version"
            :value="cartStore.goldFlowData.version"
          />
          <input
            type="hidden"
            name="MerchantOrderNo"
            :value="cartStore.goldFlowData.merchantOrderNo"
          />
          <input type="hidden" name="Amt" :value="cartStore.goldFlowData.amt" />
          <input
            type="hidden"
            name="Email"
            :value="cartStore.goldFlowData.email"
          />
          <input
            type="hidden"
            name="Name"
            :value="cartStore.goldFlowData.userName"
          />
          <input
            type="hidden"
            name="ItemDesc"
            :value="cartStore.goldFlowData.itemDesc"
          />

          <n-button
            style="background: #ed888c; color: #fff; box-shadow: none"
            quaternary
            attr-type="submit"
            >確定結帳
          </n-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart.js'
const cartStore = useCartStore()
const router = useRouter()

const data = computed(() => {
  const result = JSON.parse(JSON.stringify(cartStore.orderData?.shoppingCart))
  result.forEach((item: { price: string; discountPrice: string }) => {
    console.log('here', item)
    if (item.discountPrice) {
      item.price = item.discountPrice.toLocaleString()
    } else {
      item.price = item.price.toLocaleString()
    }
  })
  return result
})

const columns: DataTableColumns = [
  {
    title: '項目',
    key: 'title'
  },
  {
    title: '價格',
    key: 'price'
  }
]

function getDate () {
  const fullDate = new Date(cartStore.goldFlowData.timeStamp * 1000)
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
}

onMounted(() => {
  cartStore.checkOrder()
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
.flex {
  display: flex;
}
.justify-between {
  justify-content: between;
}
.justify-center {
  justify-content: center;
}
</style>
