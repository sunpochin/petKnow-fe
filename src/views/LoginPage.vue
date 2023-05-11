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
            <n-form :model="userLogin" :rules="validateRules">
              <n-form-item-row label="Email" path="email">
                <n-input
                  v-model:value="userLogin.email"
                  placeholder="test@gmail.com"
                />
              </n-form-item-row>
              <n-form-item-row label="密碼" path="password">
                <n-input
                  type="password"
                  show-password-on="mousedown"
                  placeholder="輸入密碼"
                  :maxlength="8"
                  v-model:value="userLogin.password"
                />
              </n-form-item-row>
            </n-form>
            <n-button @click="LoginBtn" type="primary" block secondary strong> 登入 </n-button>
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
import { ref } from 'vue'
import { useAuthStore } from '@/stores';

const userLogin = ref({
  email: '',
  password: ''
})

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

const LoginBtn = async () => {
  console.log('userLogin email: ', userLogin.value.email)
  console.log('userLogin password: ', userLogin.value.password)
  try {
    const authStore = useAuthStore()
    const { email, password } = userLogin.value
    await authStore.login(email, password)
  } catch (error) {
    // alertStore.error(error);
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
