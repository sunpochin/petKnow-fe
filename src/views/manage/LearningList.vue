<script lang="ts">
import { defineComponent } from 'vue'
import TabBar from '@/components/manage/shared/TabBar.vue'
import LearningCard from '@/components/manage/LearningCard.vue'
export default defineComponent({
  components: {
    TabBar,
    LearningCard
  },
  data () {
    return {
      pageTitle: '我的課程'
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
        <div class="card-wrapper">
          <LearningCard/>
          <LearningCard/>
          <LearningCard/>
          <LearningCard/>
        </div>
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

.card-wrapper {
  padding: 48px 0 128px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  grid-gap: 24px;
  max-width: 100%;
}

@media (max-width: 768px) {
  .card-wrapper {
    padding-bottom: 96px;
  }
}

</style>
