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
          訂單編號：{{ cartStore.orderData?.merchantOrderNo }}
        </div>
        <div>訂購日期：2023/1/1</div>
      </div>
      <div style="margin: 16px 0">
        <n-data-table :columns="columns" :data="data" :bordered="false" />
      </div>
      <div
        style="
          font-size: 20px;
          text-align: center;
          font-weight: bold;
          margin-bottom: 16px;
        "
      >
        結帳總金額： $ {{ cartStore.orderData?.totalPrice.toLocaleString() }}
      </div>
      <div class="flex justify-center">
        <n-button
          style="margin-right: 16px"
          quaternary
          @click="router.push('/cart')"
          >返回購物車</n-button
        >
        <n-button
          style="background: #ed888c; color: #fff; box-shadow: none"
          quaternary
          @click="cartStore.checkOrder"
          >確定結帳
        </n-button>
      </div>
    </div>
    <!-- <form action="https://ccore.newebpay.com/MPG/mpg_gateway" method="post">
      <input type="text" name="MerchantID" :value="order.MerchantID" />
      <input type="hidden" name="TradeSha" :value="order.shaEncrypted" />
      <input type="hidden" name="TradeInfo" :value="order.aesEncrypted" />
      <input type="text" name="TimeStamp" :value="order.order.TimeStamp" />
      <input type="text" name="Version" :value="order.Version" />
      <input
        type="text"
        name="MerchantOrderNo"
        :value="order.order.MerchantOrderNo"
      />
      <input type="text" name="Amt" :value="order.order.Amt" />
      <input type="email" name="Email" :value="order.order.Email" />
      <button type="submit">確認支付</button>
    </form> -->
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart.js'
const cartStore = useCartStore()
const router = useRouter()

const data = cartStore.orderData?.shoppingCart

const columns: DataTableColumns = [
  {
    title: '項目',
    key: 'title'
  },
  {
    title: '優待券代碼',
    key: 'coupon'
  },
  {
    title: '價格',
    key: 'price'
  }
]
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
