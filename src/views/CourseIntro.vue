<template>
  <div class="wrapper">
    <div class="bg-gray">
      <div class="container">
        <div class="content">
          <n-grid
            cols="12"
            item-responsive
            responsive="screen"
            class="fit"
            style="heigh: 100%"
            :x-gap="24"
          >
            <n-grid-item span="12 m:12 l:8">
              <VimeoBlock style="width: 100%" />
              <div style="margin: 32px 0">
                <div
                  style="
                    font-weight: bold;
                    font-size: 28px;
                    margin-bottom: 20px;
                  "
                >
                  寄宿訓練 幼犬街外練習
                </div>
                <div class="flex justify-between">
                  <span>by 犬學堂</span>
                  <span>開設時間：2023/1/1</span>
                </div>
              </div>

              <n-tabs
                type="card"
                class="custom-tabs"
                animated
                style="margin-bottom: 20px"
              >
                <n-tab-pane name="classIntro" tab="課程介紹">
                  (這裡之後會用ckeditor ＋ v-html 排版)
                  犬學堂於2009年成立，至今超過13年，絕對係香港最具規模、實力既狗狗酒店、樂園、訓練中心。我們主要提供狗隻訓練，並設有狗酒店、狗泳池、狗公園、狗餐廳等設施及服務。
                  主要訓練課程： 30日基本訓練寄宿課程 45日高級訓練寄宿課程
                  上門訓練 小組訓練 日托服務： 包接送 社交時間 游泳 沖涼 SPA
                  服從練習
                </n-tab-pane>
                <n-tab-pane name="teacherIntro" tab="講師簡介">
                  本課程適合對象 ：家有幼犬之飼主。 您將能夠透過本課程獲得：
                  基礎幼犬互動訓練 提高幼犬社會化經驗 提高幼犬於外界環境之適應力
                  習得犬隻基礎馴養技巧
                  幼犬性格尚未成長完全，正是適合進行各項訓練的年齡段！無論您是已有馴養經驗、亦或是初次飼養幼
                  犬隻飼主，您都能夠透過本課程獲得基礎寵物訓練的知識與技巧。本課程將幫助您透過各項技巧提高犬隻社會化與性格穩定度
                  .....
                </n-tab-pane>
              </n-tabs>
              <div>
                <n-button style="width: 100%" icon-placement="right">
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
                犬學堂還開設了...
              </div>
              <swiper
                class="swiper"
                :space-between="30"
                :slides-per-view="4"
                :centered-slides="true"
              >
                <!-- :pagination="{ clickable: true }" -->

                <swiper-slide class="slide">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </swiper-slide>
                <swiper-slide class="slide"
                  ><img
                    src="data:image/jpeg;base64,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"
                    alt=""
                /></swiper-slide>
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
                <n-collapse-item title="第一節：在開始之前" name="1">
                  <template #header-extra>
                    <div style="color: #a9a8a8; margin-right: 12px">
                      0 / 3 60分鐘
                    </div>
                  </template>
                  <div class="classItem">
                    <n-checkbox
                      v-model:checked="isDone"
                      style="margin-right: 12px"
                    />
                    <span>
                      <div style="font-weight: bold; margin-bottom: 12px">
                        1. 場地選擇
                      </div>
                      <div style="color: #a9a8a8">20分鐘</div>
                    </span>
                  </div>
                  <div class="classItem">
                    <n-checkbox
                      v-model:checked="isDone"
                      style="margin-right: 12px"
                    />
                    <span>
                      <div style="font-weight: bold; margin-bottom: 12px">
                        2. 公園選擇
                      </div>
                      <div style="color: #a9a8a8">20分鐘</div>
                    </span>
                  </div>
                  <div class="classItem">
                    <n-checkbox
                      v-model:checked="isDone"
                      style="margin-right: 12px"
                    />
                    <span>
                      <div style="font-weight: bold; margin-bottom: 12px">
                        3. 環境探索引導
                      </div>
                      <div style="color: #a9a8a8">20分鐘</div>
                    </span>
                  </div>
                </n-collapse-item>
                <n-collapse-item title="第二節：行前訓練" name="2">
                  <div class="classItem">很好</div>
                </n-collapse-item>
                <n-collapse-item title="第三節：實戰訓練" name="3">
                  <div class="classItem">真棒</div>
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
import { ref } from 'vue'
// import { Pagination } from 'Swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Book, Cart } from '@vicons/ionicons5'
// const modules = ref([Pagination])
const isDone = ref(false)
</script>
<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 260px;
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
</style>
