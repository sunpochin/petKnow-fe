<script setup lang="ts">
import { NIcon } from "naive-ui";
import { AddCircleOutline, RemoveCircleOutline } from "@vicons/ionicons5";

const enTitle = "F&Q";
const cnTitle = "常見問題";
const questions = [
  {
    title: '我可以在這個平台學習到什麼？',
    answer: '我們的線上學習平台提供多樣化的寵物知識課程，讓您可以學習如何與寵物建立更好的溝通關係、培養寵物的好習慣和技能，以及解決寵物的不良行為，讓您和您的寵物共同享受快樂的生活。'
  },
  {
    title: '如何註冊帳戶？',
    answer: '點擊「註冊」按鈕，填寫所需的註冊資料，包括用戶名、電子郵件和密碼。完成註冊後，您將可以使用您的帳戶登入平台。',
  },
  {
    title: '如何購買課程？',
    answer: '點擊您感興趣的課程以進一步了解詳細資訊。選擇您想要購買的課程後，點擊「立即購買」按鈕，然後跟隨系統提示完成付款流程。',
  }
]
function slideToggle(element: any) {
  const el = document.querySelector(element);
  const parent = el.parentElement;
  const computedHeight = window.getComputedStyle(el).height;
  
  if (computedHeight === '0px') {
    el.style.height = el.scrollHeight + 'px';
  } else {
    el.style.height = '0px';
  }

  if (parent.classList.contains('show')) {
    parent.classList.remove('show');
  } else {
    parent.classList.add('show');
  }
}

</script>

<template>
  <div class="container">
    <n-grid cols="2" item-responsive>
      <n-grid-item span="2 769:1">
        <h3 class="en-title mb-2 d-flex align-items-center">{{ enTitle }}</h3>
        <p class="cn-title mb-4">{{ cnTitle }}</p>
      </n-grid-item>
      <n-grid-item span="2 769:1">
        <div class="ques-block" v-for="(ques, i) in questions" :key="i">
          <h4 class="ques">{{ ques.title }}</h4>
          <div :class="`ans-block ans-${i}`">
            <p class="ans">{{ ques.answer }}</p>
          </div>
          <n-icon class="toggle-btn" @click="slideToggle(`.ans-${i}`)">
            <AddCircleOutline class="icon-show" />
            <RemoveCircleOutline class="icon-hide"/>
          </n-icon>
        </div>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<style lang="scss" scoped>
$btnColor: #ED888C;
$borderColor: #D1D1D1;
.ques-block {
  padding: 32px 0;
  border-width: 1px 0px;
  border-style: solid;
  border-color: $borderColor;
  position: relative;

  .ques, .ans {
    font-family: 'Noto Sans TC';
    font-style: normal;    
    width: 100%;
    padding-right: 96px;
  }
  .ques {
    font-weight: 900;
    font-size: 32px;
    line-height: 120%;
  }
  .ans {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    padding-top: 24px;
  }
}

.ans-block {
  height: 0;
  overflow: hidden;
  transition: height ease .3s;
}
.toggle-btn {
  position: absolute;
  right: 44px;
  bottom: 68px;
  display: block;

  svg {
    width: 64px;
    height: 64px;
  }

  @media (hover: hover) {
    &:hover svg { 
      color: $btnColor;
      cursor: pointer; 
    }
  }
}

.ques-block {
  .icon-hide { display: none; }
  &.show{
    .icon-show { display: none; }
    .icon-hide { display: block; }
  }
}

</style>
