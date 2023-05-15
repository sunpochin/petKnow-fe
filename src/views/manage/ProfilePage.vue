<script lang="ts">

import { defineComponent } from 'vue'
import TabBar from '@/components/manage/shared/TabBar.vue'
export default defineComponent({
  components: {
    TabBar
  },
  data () {
    return {
      pageTitle: '個人資料'
    }
  },
  methods: {
    submitForm: function () {

    }
  }
})

// export default ProfilePage
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
  background-color: #F8F8F8;
}
.container {
  max-width: 1328px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

</style>
