<script setup lang="ts">
import { NCard } from 'naive-ui'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const learningList = ref([
  {
    imageUrl:
      'https://images.unsplash.com/photo-1532971731140-1d7cccc06c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tag: '寵物行為問題解決指南',
    instructor: '葉芳馨',
    info: '1.觀察行為模式',
    time: 8,
    title: '第一節：問題行為評估',
    _id: '6493d9c4127ca634f0eebac9',
    percent: 35
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1491485880348-85d48a9e5312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    tag: '寵物洗澡技巧與注意事項',
    instructor: '王志政',
    info: '1.選擇洗澡地點',
    time: 15,
    title: '第一章：準備工作',
    _id: '6493d9c4127ca634f0eebaa6',
    percent: 75
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1598134493179-51332e56807f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tag: '狗狗解悶遊戲指南',
    info: '1.狗狗解悶遊戲對健康的影響',
    instructor: '楊雅茹',
    time: 13,
    title: '第一章：遊戲的重要性',
    _id: '6493d9c2127ca634f0eeafb6',
    percent: 90
  }
])
</script>

<template>
  <n-card
    :bordered="false"
    content-style="padding: 0;"
    v-for="(item, index) in learningList"
    :key="index"
    style="cursor: pointer"
    @click="router.push(`/courseIntro/${item._id}`)"
  >
    <img :src="item.imageUrl" />
    <h4>{{ item.tag }}</h4>
    <h5><span>by</span>犬學堂</h5>
    <div class="footer">
      <div class="progress-bar">
        <div class="progress" :style="`width:${item.percent}%`"></div>
      </div>
      <div class="actions">
        <div class="complete">
          <span>完成度</span>
          <span class="percentage">{{ item.percent }}%</span>
        </div>
      </div>
    </div>
  </n-card>
</template>
<style lang="scss" scoped>
$cardWidth: 416px;
$cardHeight: 571px;

$cardWidthMob: 351px;
$cardHeightMob: 504px;
.n-card {
  width: $cardWidth;
  height: $cardHeight;
  background-color: transparent;

  img {
    width: 100%;
    height: 312px;
    border-radius: 0 0 80px 0;
    object-fit: cover;
    object-position: center;
    margin-bottom: 24px;
  }

  h4 {
    color: #020202;
    font-size: 32px;
    line-height: 120%;
    font-weight: 900;
    margin-bottom: 24px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;
    font-size: 32px;
  }

  h5 {
    font-size: 20px;
    line-height: 120%;
    color: #020202;
    margin-bottom: 24px;
    height: 2.4em;
    span {
      margin-right: 4px;
      color: #919191;
    }
  }

  .progress-bar {
    margin-bottom: 24px;
    width: 100%;
    height: 8px;
    border-radius: 8px;
    background-color: #f2f2f2;
    .progress {
      border-radius: 8px;
      height: 100%;
      background-color: #ed888c;
    }
  }
  .complete {
    font-size: 20px;
    line-height: 120%;
    .percentage {
      font-weight: 900;
      color: #ed888c;
      margin-left: 4px;
    }
  }
  .actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .goto-refund {
    font-size: 20px;
    line-height: 120%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    i {
      margin-left: 6px;
    }
  }
}

@media (max-width: 980px) {
  .n-card {
    width: $cardWidthMob;
    height: $cardHeightMob;
    margin-bottom: 24px;

    img {
      height: 263px;
    }

    h4 {
      font-size: 24px;
      line-height: 120%;
    }
  }
}
</style>
