<template>
  <n-grid
    cols="12"
    item-responsive
    responsive="screen"
    class="fit"
    style="heigh: 100%"
  >
    <n-grid-item span="12 m:12 l:4" class="center">
      <div style="width: 300px">
        <n-tabs type="segment" v-model:value="selectedTab">
          <n-tab-pane name="login" tab="登入">
            <n-form :model="loginData" :rules="validateRules">
              <n-form-item-row label="Email" path="email">
                <n-input
                  v-model:value="loginData.email"
                  placeholder="test@gmail.com"
                />
              </n-form-item-row>
              <n-form-item-row label="密碼" path="password">
                <n-input
                  type="password"
                  show-password-on="mousedown"
                  placeholder="輸入密碼"
                  :maxlength="8"
                  v-model:value="loginData.password"
                />
              </n-form-item-row>
            </n-form>
            <n-button
              type="primary"
              block
              secondary
              strong
              @click="handleLogin"
            >
              登入
            </n-button>
          </n-tab-pane>
          <n-tab-pane name="register" tab="註冊">
            <n-form :model="userRegister" :rules="validateRules">
              <n-form-item-row label="姓名" path="name">
                <n-input
                  v-model:value="userRegister.name"
                  placeholder="輸入 姓名"
                />
              </n-form-item-row>
              <n-form-item-row label="Email" path="email">
                <n-input
                  v-model:value="userRegister.email"
                  placeholder="test@gmail.com"
                />
              </n-form-item-row>
              <n-form-item-row label="密碼" path="password">
                <n-input
                  type="password"
                  show-password-on="mousedown"
                  placeholder="輸入密碼"
                  :maxlength="8"
                  v-model:value="userRegister.password"
                />
              </n-form-item-row>
            </n-form>
            <n-button
              type="primary"
              block
              secondary
              strong
              @click="handleRegister"
            >
              註冊
            </n-button>
          </n-tab-pane>
          <n-tab-pane name="forgerPassword" tab="忘記密碼">
            <n-form :model="forgerPassword" :rules="validateRules">
              <n-form-item-row label="Email" path="email">
                <n-input
                  v-model:value="forgerPassword.email"
                  placeholder="test@gmail.com"
                />
              </n-form-item-row>
            </n-form>
            <n-button type="primary" block secondary strong> 送出 </n-button>
          </n-tab-pane>
        </n-tabs>
      </div>
    </n-grid-item>
    <n-grid-item span="12 m:12 l:8">
      <div class="p-20" style="height: 100%">
        <img
          class="loginImg"
          src="https://www.10wallpaper.com/wallpaper/1366x768/1608/Dog_puppy_white_pet-Animal_Photos_HD_Wallpaper_1366x768.jpg"
        />
      </div>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import { useRouter } from 'vue-router'
import { useNotification } from 'naive-ui'

import Auth from '@/api/auth.js'
const notification = useNotification()
const authStore = useAuthStore()
const router = useRouter()

const selectedTab = ref('login')

const loginData = reactive({
  email: 'Abc1231@gmail.com',
  password: 'Abc123'
})
async function handleLogin () {
  // Login 登入
  const loginResult = await authStore.login(loginData)
  console.log('loginResult', loginResult)
  if (loginResult.success) {
    if (localStorage.getItem('fromVisitorCart')) {
      router.push('/cart')
    } else {
      router.push('/')
    }
    notification.success({
      content: '登入成功',
      duration: 1500,
      keepAliveOnHover: false,
      closable: false
    })
  } else {
    notification.error({
      content: '登入失敗',
      meta: '請確認帳號密碼是否正確',
      duration: 1500,
      keepAliveOnHover: false,
      closable: false
    })
  }
}

const userRegister = ref({
  name: '',
  email: '',
  password: ''
})
async function handleRegister () {
  // Register 註冊
  const emailRule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (emailRule.test(userRegister.value.email)) {
    const registerResult = await Auth.apiPostRegister(userRegister.value)
    try {
      if (registerResult) {
        selectedTab.value = 'login'
        notification.success({
          content: '註冊成功',
          meta: '請重新登入',
          duration: 1500,
          keepAliveOnHover: false,
          closable: false
        })
      } else {
        notification.error({
          content: '註冊失敗',
          meta: '請與相關人員聯繫',
          duration: 1500,
          keepAliveOnHover: false,
          closable: false
        })
      }
    } catch {
      notification.error({
        content: '註冊失敗',
        meta: '請與相關人員聯繫',
        duration: 1500,
        keepAliveOnHover: false,
        closable: false
      })
    }
  } else {
    notification.error({
      content: 'email格式錯誤',
      meta: '請輸入正確的email格式',
      duration: 1500,
      keepAliveOnHover: false,
      closable: false
    })
  }
}

const forgerPassword = ref({
  email: ''
})

const validateRules = {
  name: {
    required: true,
    message: '輸入姓名',
    trigger: ['input', 'blur']
  },
  email: {
    required: true,
    message: '輸入email',
    trigger: ['input', 'blur']
  },
  password: {
    required: true,
    message: '輸入密碼',
    trigger: ['input', 'blur']
  }
}
</script>
<style lang="scss" scoped>
.fit {
  width: 100vw;
  height: 100vh;
}
.loginImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 60px 0 0 60px;
  box-shadow: 10px 8px 8px rgb(174, 171, 171);
}
.p-20 {
  padding: 20px;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
