<script setup lang="ts">
import { NIcon, NGrid, NGridItem, NAvatar } from "naive-ui";
import { Search, Cart, Menu } from "@vicons/ionicons5";
import { ArrowRightAltSharp } from "@vicons/material";
</script>

<template>
  <header class="header">
    <div class="container">
      <n-grid cols="3" item-responsive responsive="self">
        <n-grid-item span="2  769:1">
          <div class="logo">
            <picture>
              <source media="(max-width: 768px)" srcset="@/assets/logo/petknowLogo-88-40.svg" />
              <img src="@/assets/logo/petknowLogo-140-64.svg" alt="petknow-logo" />
            </picture>
          </div>
        </n-grid-item>
        <n-grid-item span="0  769:1">
          <div class="search-bar">
            <div class="search-box">
              <n-icon size="17.5" color="#919191">
                <Search />
              </n-icon>
              <input type="text" placeholder="搜尋" class="search-input" />
            </div>
          </div>
        </n-grid-item>
        <n-grid-item span="1  769:1">
          <div class="d-flex-end">
            <div class="cart">
              <n-icon size="20" color="#020202">
                <Cart />
              </n-icon>
            </div>
            <div class="member-photo">
              <div class="member-photo-background">
                <n-avatar round :size="40" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
              </div>
            </div>
            <div class="become-teacher">
              <button class="button">
                <p class="button-text">成為講師</p>
                <n-icon class="arrow-icon" size="28" color="#ffffff">
                  <ArrowRightAltSharp />
                </n-icon>
              </button>
            </div>
            <div class="menu">
              <n-icon size="20" color="#020202">
                <Menu />
              </n-icon>
            </div>
          </div>
        </n-grid-item>
      </n-grid>
    </div>
  </header>
</template>

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
  margin-right: 1.6875rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.member-photo {
  margin-right: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }

  .member-photo-background {
    width: 40px;
    height: 40px;
    background-color: #f2f2f2;
    border-radius: 50%;
    overflow: hidden;

    img {
      max-width: 100%;
      height: auto;
    }
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
    font-size: 24px;
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

.menu {
  margin-right: 1.6875rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
}
</style>
