<script setup lang="ts">
import { NIcon } from 'naive-ui'
import { ArrowRightAltSharp } from '@vicons/material'

</script>
<template>
    <div class="wrapper">
        <div class="hero-section">
            <div class="hero-img">

            </div>
            <div class="scroll-arrow">
                <img src="@/assets/landing-page/scroll-arrow.png" alt="scroll-arrow">
            </div>
            <div class="container">

                <h2>掌握養寵必備知識 共創寵物相伴<br>
                    美好時光</h2>
                <button class="search-btn">
                    <p>搜尋</p>
                    <n-icon class="arrow-icon" size="32" color="#000000">
                        <ArrowRightAltSharp />
                    </n-icon>
                </button>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 100%;
}

.container {
    max-width: 1328px;
    height: 100%;
    margin: 0 auto;
    padding: 0 1rem;

}

.hero-section {
    width: 100%;
    height: 100%;
    padding: 4rem 0 8rem 0;
    position: relative;
    @media (max-width: 768px) {
        padding: 4rem 0 22rem 0;
    }
    .scroll-arrow {
        position: absolute;
        width: 55px;
        height: 21px;
        left: 38%;
        bottom: 14%;
        @media (max-width: 768px) {
            left: 4%;
            bottom: 18%;
        }
    }
    .hero-img {
        position: absolute;
        top: 0;
        right: 0;
        width: 60%;
        height: 100%;
        background-image: url('@/assets/landing-page/hero-img-1168-968.png');
        background-position: bottom;
        background-size: cover;
        @media (max-width: 768px) {
            width: 73%;
            background-image: url('@/assets/landing-page/hero-img-269-812.png');
        }
    }

    h2 {
        font-weight: 900;
        font-size: 160px;
        line-height: 192px;
        margin-bottom: 2rem;
        @media (max-width: 768px) {
            font-weight: 900;
            font-size: 48px;
            line-height: 57.6px;
        }
    }
    .search-btn {
        width: 306px;
        padding: 65.5px 0;
        display: flex;
        justify-content: center;
        border: 4px solid #020202;
        border-radius: 999px;
        background-color: transparent;
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
    }
}
</style>
