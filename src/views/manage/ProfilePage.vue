<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { useUserStore } from '@/stores/user.js'
import { useRouter } from 'vue-router'
import { useNotification } from 'naive-ui'
const notification = useNotification()

const userStore = useUserStore()
const router = useRouter()

if (!userStore.hasLogin) {
  // if user hasn't login, push into homepage
  router.push('/login')
}
const pageTitle = '個人資料'
const formData = reactive({
  nickname: '',
  bio: ''
})

function renderFormData () {
  userStore.getUserData().then(function (data) {
    formData.nickname = data.nickname
    formData.bio = data.bio
  })
}

onMounted(renderFormData)

async function submitForm () {
  try {
    await userStore.updateUserData({
      nickname: formData.nickname,
      bio: formData.bio
    })
    notification.success({
      content: '修改成功',
      duration: 2500,
      keepAliveOnHover: true
    })
  } catch (error) {
    notification.error({
      content: '修改失敗',
      duration: 2500,
      keepAliveOnHover: true
    });
  }
}
</script>
<template>
  <div class="wrapper">
    <div class="container">
      <div class="content">
        <TabBar :page-title="pageTitle" />
        <div class="form-wrapper">
          <n-card>
            <n-form ref="form" :model="formData">
              <!-- TODO: inset .avatar-upload-section here -->
              <div class="input-section">
                <n-form-item label="暱稱">
                  <n-input
                    v-model:value="formData.nickname"
                    placeholder="請輸入暱稱"
                  />
                </n-form-item>
                <n-form-item label="簡介">
                  <n-input
                    v-model:value="formData.bio"
                    placeholder="簡介"
                    type="textarea"
                    :autosize="{ minRows: 3, maxRows: 5 }"
                  />
                </n-form-item>
                <n-button type="primary" class="save-btn" @click="submitForm"
                  >儲存</n-button
                >
              </div>
            </n-form>
          </n-card>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
}
.container {
  max-width: 1328px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

.form-wrapper {
  padding: 32px 0;
  width: 320px;
  max-width: 100%;
  button.save-btn {
    background-color: #ED888C !important;
    box-shadow: none;
    border-color: #ED888C;
  }
}
</style>
