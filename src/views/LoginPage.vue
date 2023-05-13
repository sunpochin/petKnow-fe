<template>
  <n-grid
    cols="12"
    item-responsive
    responsive="screen"
    class="fit"
    style="heigh: 100%"
  >
    <n-grid-item span="0 m:12 l:4" class="center">
      <div style="width: 300px">
        <n-tabs type="segment">
          <n-tab-pane name="signin" tab="登入">
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
          <n-tab-pane name="signup" tab="註冊">
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
            <n-button type="primary" block secondary strong> 註冊 </n-button>
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
    <n-grid-item span="0 m:12 l:8">
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
// console.log()
// import { useAuthStore } from 'src/stores/auth.js'
import { useRouter } from 'vue-router'
// import { useNotification } from 'naive-ui'

// const notification = useNotification()
// const authStore = useAuthStore()
const router = useRouter()
// const route = useRoute()

const loginData = reactive({
  email: 'test1',
  password: 'p@$$w0rd'
})

async function handleLogin () {
  try {
    // Login
    const loginResult = await authStore.login(loginData)
    if (loginResult) {
      // Redirect
      // const redirectUrl = ${route.query.redirect || "/"};
      router.push('/')
    } else {
      // notification.error({
      //   content: '登入失敗，請確認帳號密碼是否正確',
      //   // meta: '想不出来',
      //   duration: 2500,
      //   keepAliveOnHover: true
      // })
      // $q.notify({
      //   type: "negative",
      //   message: "登入失敗，請確認帳號密碼是否正確",
      //   position: "top",
      // });
    }
  } catch (err) {
    if (err instanceof Error) {
      // $q.notify({
      //   type: "negative",
      //   message: String(err),
      //   position: "top",
      // });
    }
  }
}

const userRegister = ref({
  name: '',
  email: '',
  password: ''
})

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
