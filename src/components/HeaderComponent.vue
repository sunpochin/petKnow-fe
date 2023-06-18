<template>
  <header class="header">
    <div class="container">
      <n-grid cols="3" item-responsive responsive="self">
        <n-grid-item span="2  769:1">
          <div class="logo" @click="router.push('/')" style="cursor: pointer">
            <picture>
              <source
                media="(max-width: 768px)"
                srcset="@/assets/logo/petknowLogo-88-40.svg"
              />
              <img
                src="@/assets/logo/petknowLogo-140-64.svg"
                alt="petknow-logo"
              />
            </picture>
          </div>
        </n-grid-item>
        <n-grid-item span="0  769:1">
          <div class="search-bar">
            <div class="search-box">
              <n-icon size="17.5" color="#919191">
                <Search />
              </n-icon>
              <input @keyup.enter="searchKeyword" v-on:input="inputKeyword" type="text" placeholder="搜尋" class="search-input" />
            </div>
          </div>
        </n-grid-item>
        <n-grid-item span="1  769:1">
          <div class="d-flex-end">
            <n-button v-if="isLogin" quaternary class="my-course" @click="router.push('/manage/learning')">
              我的課堂
            </n-button>
            <n-button
              v-if="isLogin"
              quaternary
              type="error"
              class="sign-out"
              @click="authStore.logout"
            >
              登出
            </n-button>
            <n-button quaternary class="cart" @click="router.push('/cart')">
              <n-icon size="20" color="#020202">
                <Cart />
              </n-icon>
            </n-button>
            <n-button quaternary circle v-if="isLogin" @click="router.push('/manage/profile')">
              <n-icon size="20">
                <PersonSharp/>
              </n-icon>
            </n-button>
            <n-button v-else @click="router.push('/login')" strong secondary type="info"> 登入/註冊 </n-button>
            <!--
            <div class="become-teacher">
              <button class="button">
                <p class="button-text">成為講師</p>
                <n-icon class="arrow-icon" size="28" color="#ffffff">
                  <ArrowRightAltSharp />
                </n-icon>
              </button>
            </div>
            -->
            <!-- RWD mobile menu -->
            <div class="menu-phone" @click="isOpenMenu = !isOpenMenu">
              <n-icon size="20" color="#020202">
                <Menu />
              </n-icon>
            </div>
          </div>
        </n-grid-item>
      </n-grid>
    </div>
  </header>
  <div class="menuWrap">
    <div
      class="menu-dropdown"
      ref="toggleMenu"
      :class="{ 'end-100': isOpenMenu }"
    >
      <div>
        <div class="member-info">
          <n-avatar
            round
            :size="40"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
          <div class="member-text">
            <p class="name">陳曉明</p>
            <p class="email">chenxiaomin@gmail.com</p>
          </div>
        </div>
        <ul v-if="isLogin">
          <li>個人資料</li>
          <li>我的課堂</li>
          <li>我開的課</li>
          <li>購買紀錄</li>
          <li>成為講師</li>
          <li @click="authStore.logout">登出</li>
        </ul>
        <ul v-else>
          <router-link to="/login">
            <li>登入/註冊</li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup land="ts">
import { ref, onMounted } from 'vue'
import { Search, Cart, Menu, PersonSharp } from '@vicons/ionicons5'
// import { ArrowRightAltSharp } from '@vicons/material'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
const router = useRouter()
const authStore = useAuthStore()

const isOpenMenu = ref(false)
const isLogin = ref(false)
const keyword = ref('')

onMounted(() => {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) isLogin.value = true
})

const searchKeyword = () => {
  router.push(`/search/${keyword.value}`)
}
const inputKeyword = (event) => {
  keyword.value = event.target.value
}

</script>
<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 112px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    height: 80px;
  }
}

.container {
  max-width: 1328px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

.search-bar {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .search-box {
    width: 416px;
    height: 64px;
    border-radius: 16px;
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    padding: 0 32px;

    .search-input {
      margin-left: 12px;
      flex: 1;
      font-size: 24px;
      border: none;
      outline: none;
      background-color: transparent;
      color: #333;
    }
  }
}

.d-flex-end {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.cart {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.member-photo {
  margin-right: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
}

.become-teacher {
  display: flex;
  align-items: center;
  justify-content: center;

  .button {
    display: flex;
    align-items: center;

    cursor: pointer;
    padding: 11.5px 30px;
    border-radius: 1rem;
    background-color: #ed888c;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    transition: all 0.3s ease;
    border: transparent 4px solid;

    &:hover {
      border: #ed888c 4px solid;
      background-color: transparent;
      color: #ed888c;

      svg {
        color: #ed888c;
      }
    }

    .button-text {
      font-weight: 900;
      margin: 0;
      display: inline-block;
    }

    .arrow-icon {
      display: inline-block;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
}

.menu-phone {
  margin-right: 1.6875rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
}
.end-100 {
  right: 0% !important;
}
.menuWrap {
  position: absolute;
  right: 0%;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .menu-dropdown {
    background-color: #ffffff;
    z-index: 999;
    right: -100%;
    transition: all 0.5s;
    @media screen and (min-width: 768px) {
      display: none;
    }
    .member-info {
      display: flex;
      align-items: center;
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 12px;

      .member-text {
        margin-left: 1rem;

        .name {
          font-weight: 900;
          font-size: 20px;
          line-height: 120%;
        }

        .email {
          font-weight: 400;
          font-size: 14px;
          line-height: 150%;
          color: #919191;
        }
      }
    }

    ul {
      list-style-type: none;
      padding-left: 0;
    }

    li {
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 12px;
      border: 1px solid #f2f2f2;
    }
  }
}

.my-course,
.sign-out {
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>
