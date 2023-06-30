<script lang="ts">
import { NTabs, NTab } from 'naive-ui'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    NTabs,
    NTab
  },
  props: ['pageTitle', 'pageName'],
  data () {
    return {}
  }
})
</script>
<template>
  <h3>{{ pageTitle }}</h3>
  <n-tabs type="card" :value="pageTitle" class="custom-tabs">
    <n-tab name="個人資料">
      <a href="/manage/profile">個人資料</a>
    </n-tab>
    <n-tab name="我的課程">
      <a href="/manage/learning">我的課程</a>
    </n-tab>
    <!-- <n-tab name="我開的課">
      <a href="/manage/teaching">我開的課</a>
    </n-tab> -->
  </n-tabs>
</template>
<style lang="scss" scoped>
.content h3 {
  padding: 0.5em;
  font-size: 2em;
}
</style>
