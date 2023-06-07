<script setup lang="ts">
import { NIcon } from 'naive-ui'
import { ArrowRightAltSharp } from '@vicons/material'

const props = defineProps(['text'])

console.log(props.text)
</script>
<template>
  <button class="search-btn">
    <p>{{ text }}</p>
    <n-icon class="arrow-icon" size="32">
      <ArrowRightAltSharp />
    </n-icon>
  </button>
</template>

<style lang="scss" scoped>
.search-btn {
  width: 306px;
  height: 160px;
  padding: 60.5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #020202;
  border-radius: 999px;
  background-color: transparent;
  color: #000000;

  p {
    font-weight: 900;
    font-size: 24px;
    line-height: 28.8px;
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    width: 269px;
    padding: 40.5px 0;
  }

  @media (hover: hover) {
    &:hover, &:hover svg {
      cursor: pointer;
      color: #ED888C;
      border-color: #ED888C;
    }
  }
}
</style>
