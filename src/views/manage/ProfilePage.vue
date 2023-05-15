<script lang="ts">
import { NCard, NForm, NFormItem, NInput, NButton } from 'naive-ui'
import { defineComponent } from 'vue'
import TabBar from '@/components/manage/shared/TabBar.vue'
export default defineComponent({
  components: {
    TabBar,
    NButton,
    NInput,
    NCard,
    NForm,
    NFormItem
  },
  data () {
    return {
      pageTitle: '個人資料',
      formData: {
        username: '',
        email: '',
        age: 0
      },
      formRules: {
        username: [{ required: true, message: 'Please enter a username' }],
        email: [
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email address' }
        ]
      }
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
        <n-card>
          <n-form ref="form" :model="formData" :formrules="formRules">
            <!-- TODO: inset .avatar-upload-section here -->
            <div class="input-section">
              <n-form-item label="暱稱" required>
                <n-input v-model="formData.username" />
              </n-form-item>
              <n-form-item label="信箱" required>
                <n-input v-model="formData.email" />
              </n-form-item>
              <n-button type="primary" @click="submitForm">儲存</n-button>
            </div>
          </n-form>
        </n-card>
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
