<script setup lang="ts">
import { ref, reactive, defineComponent } from 'vue'
import { useUserStore } from '@/stores/user.js'
import { useRouter } from 'vue-router'
import { useNotification } from 'naive-ui'
import User from '@/api/user.js'
const userStore = useUserStore()
const accessToken = userStore.accessToken
console.log(accessToken)
const router = useRouter()
userStore.getUserData()

const pageTitle = '個人資料'
const formData = {
  username: '',
  email: '',
  age: 0
}

const validateRules = {
  username: {
    required: true,
    message: '輸入暱稱',
    trigger: ['input', 'blur']
  },
  email: {
    required: true,
    message: '輸入email',
    trigger: ['input', 'blur']
  }
}
const submitForm = function () {
  console.log('submitForm')
}
</script>
<template>
  <div class="wrapper">
    <div class="container">
      <div class="content">
        <TabBar :page-title="pageTitle"/>
        <div class="form-wrapper">
          <n-form ref="form" :model="formData" :formrules="validateRules">
            <!-- TODO: inset .avatar-upload-section here -->
            <div class="input-section">
              <n-form-item label="暱稱" path="username" required>
                <n-input v-model.value="formData.username" placeholder="暱稱"/>
              </n-form-item>
              <n-form-item label="信箱" path="email" required>
                <n-input v-model.value="formData.email" placeholder="test@gmail.com"/>
              </n-form-item>
              <n-button type="primary" @click="submitForm">儲存</n-button>
            </div>
          </n-form>
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

.form-wrapper {
  width: 300px;
  max-width: 100%;
  padding: 64px 0;
  margin: 0 auto 128px 0;
}
</style>
