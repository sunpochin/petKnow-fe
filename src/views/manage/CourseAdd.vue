<script lang="ts">
import { defineComponent } from 'vue'
import TabBar from '@/components/manage/shared/TabBar.vue'
export default defineComponent({
  components: {
    TabBar
  },
  data () {
    return {
      pageTitle: '新增課程'
    }
  },
  methods: {
    submitForm: function () {

    }
  }
})
</script>
<template>
  <div class="wrapper">
    <div class="container">
      <div class="content">
        <TabBar :page-title="pageTitle"/>
      </div>
    </div>
  </div>
</template>
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
</style>
