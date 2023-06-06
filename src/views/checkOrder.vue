<template>
  <div class="wrapper">
    <div class="container">
      <div style="text-align: center">
        <h2 style="font-weight: bold">確認訂單</h2>
        <div>這筆訂單共有五堂課程</div>
        <n-divider />
      </div>

      <div class="flex justify-between" style="max-width: 700px; margin: auto">
        <div>訂單編號：%^&&*^adsfregasdfsadc</div>
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
        結帳總金額： $ 3000
      </div>
      <div class="flex justify-center">
        <n-button style="margin-right: 16px" quaternary>返回購物車</n-button>
        <n-button
          style="background: #ed888c; color: #fff; box-shadow: none"
          quaternary
          >確定結帳</n-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import type { DataTableColumns } from 'naive-ui'

type tableType = {
  title: string
  coupon: string
  quantity: number
  price: number
}

const data: tableType[] = [
  { title: 'Wonderwall', coupon: '4:18', quantity: 10, price: 2000 },
  {
    title: "Don't Look Back in Anger",
    coupon: '4:48',
    quantity: 10,
    price: 2000
  },
  { title: 'Champagne Supernova', coupon: '7:27', quantity: 10, price: 2000 }
]

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
    title: '數量',
    key: 'quantity'
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
