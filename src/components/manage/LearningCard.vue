<script lang="ts">
import { NCard, NIcon } from 'naive-ui'
import { ArrowForward } from '@vicons/ionicons5'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    NCard,
    NIcon,
    ArrowForward
  },
  props: ['pageTitle', 'pageName'],
  data () {
    return {
    }
  }
})
</script>
<template>
  <n-card :bordered="false" content-style="padding: 0;">
    <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
    <h4>貓咪其實叫得來？ 訓練師教你 訓練貓 「一叫就過來」</h4>
    <h5><span>by</span>犬學堂</h5>
    <div class="footer">
      <div class="progress-bar"><div class="progress" style="width: 60%;"></div></div>
      <div class="actions">
        <div class="complete">
          <span>完成度</span>
          <span class="percentage">60%</span></div>
        <a class="goto-refund">前往退費
          <n-icon><ArrowForward/></n-icon>
        </a>
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
      background-color: #F2F2F2;
      .progress {
        border-radius: 8px;
        height: 100%;
        background-color: #ED888C;
      }
    }
    .complete {
      font-size: 20px;
      line-height: 120%;
      .percentage {
        font-weight: 900;
        color: #ED888C;
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
      i { margin-left: 6px; }
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
