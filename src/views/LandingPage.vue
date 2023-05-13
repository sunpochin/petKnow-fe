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
                <h2 class="mb-2">掌握養寵必備知識 共創寵物相伴<br>
                    美好時光</h2>
                <button class="search-btn">
                    <p>搜尋</p>
                    <n-icon class="arrow-icon" size="32" color="#000000">
                        <ArrowRightAltSharp />
                    </n-icon>
                </button>
            </div>
        </div>
        <div class="user-recommend-section">
            <div class="container">
                <div class="just-for-you-section">
                    <h3 class="en-title mb-2">JUST FOR YOU</h3>
                    <p class="mb-4">陳曉明，開始學習</p>
                    <n-grid cols="3" :x-gap="24" :y-gap="24" item-responsive>
                        <n-grid-item span="3 769:1" v-for="(item, index) in 3" :key="index">
                            <div class="flex-center">
                                <div class="couse-card-horizontal">
                                    <div class="card-img">
                                        <img src="@/assets/landing-page/course-card-img.png" alt="course-img">
                                    </div>
                                    <div class="card-content">
                                        <span>貓咪的貓叫聲</span>
                                        <h3 class="title">第一章：不同種類的喵叫聲及其含義</h3>
                                        <p class="info">1.嬉鬧聲</p>
                                        <p class="time">作業・30分鐘</p>
                                    </div>

                                </div>
                            </div>
                        </n-grid-item>
                    </n-grid>
                </div>
                <div class="next-step-section-pc">
                    <h3 class="en-title mb-2">NEXT STEP</h3>
                    <p class="cn-title mb-9 ">為您挑選</p>
                    <button class="search-btn">
                        <p>立即上課</p>
                        <n-icon class="arrow-icon" size="32" color="#000000">
                            <ArrowRightAltSharp />
                        </n-icon>
                    </button>
                    <div class="course-card-section">
                        <div class="course-card">
                            <div class="card-img">
                                <img src="@/assets/landing-page/course-card-img.png" alt="course-img">
                            </div>
                            <div class="card-content">
                                <span>屬於初階課程</span>
                                <p class="time">共計 16 小時｜52 堂講座</p>
                                <h3 class="title">寵物攝影達人：捕捉寵物最佳畫面與構圖技巧</h3>
                                <p class="info">學會寵物攝影的專業技巧，捕捉最佳畫面與構圖技巧，讓你的寵物照片更加生動、有趣與吸睛。</p>
                                <p class="teacher">by 陳曉明</p>
                                <p class="price">NT$1,600</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="next-step-section-phone">
                    <h3 class="en-title">NEXT STEP</h3>
                    <p class="cn-title position-absolute z-index-top">為您挑選</p>
                    <div class="course-card-section flex-center mb-2">
                        <div class="couse-card-vertical">
                            <div class="card-img">
                                <img src="@/assets/landing-page/course-card-img.png" alt="course-img">
                            </div>
                            <div class="card-content">
                                <span>屬於初階課程</span>
                                <p class="time">共計 16 小時｜52 堂講座</p>
                                <h3 class="title">寵物攝影達人：捕捉寵物最佳畫面與構圖技巧</h3>
                                <p class="info">學會寵物攝影的專業技巧，捕捉最佳畫面與構圖技巧，讓你的寵物照片更加生動、有趣與吸睛。</p>
                                <p class="teacher">by 陳曉明</p>
                                <p class="price">NT$1,600</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex-center">
                        <button class="search-btn-phone">
                            <p>立即上課</p>
                            <n-icon class="arrow-icon" size="32" color="#000000">
                                <ArrowRightAltSharp />
                            </n-icon>
                        </button>

                    </div>

                </div>
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

        @media (max-width: 768px) {
            font-weight: 900;
            font-size: 48px;
            line-height: 57.6px;
        }
    }

}

.user-recommend-section {
    width: 100%;
    height: 100%;
    padding: 4rem 0;

    .just-for-you-section {
        padding-bottom: 8rem;

        p {
            font-weight: 900;
            font-size: 48px;
            line-height: 57.6px;
        }
    }

    .next-step-section-pc {
        @media (max-width: 768px) {
            display: none;
        }

        .course-card-section {
            position: absolute;
            top: 0;
            right: 0;
            z-index: -2;
        }

    }

    .next-step-section-phone {
        display: none;

        @media (max-width: 768px) {
            display: block;

            .search-btn-phone {
                width: 269px;
                padding: 40.5px 0;
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
            }
        }
    }
}

.course-card {
    width: 856px;
    height: 517px;
    border-radius: 0px 0px 0px 80px;
    overflow: hidden;
    display: flex;

    p {
        margin-bottom: 0;
    }

    .card-img {
        width: 64%;
        height: 100%;
    }

    .card-content {
        padding: 2rem 2.5rem;
        width: 36%;
        height: 100%;

        .time {
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 1rem;
        }

        .title {
            font-weight: 900;
            font-size: 32px;
            line-height: 38.4px;
            margin-bottom: 1rem;
        }

        .info,
        .teacher {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 1rem;
        }

        .price {
            font-weight: 900;
            font-size: 32px;
            line-height: 38.4px;
            color: #ED888C;
        }
    }
}

.couse-card-vertical {
    width: 351px;
    height: 691px;

    .card-img {
        width: 100%;
        height: 50%;
        border-radius: 80px 0px 0px 0px;
        overflow: hidden;
    }

    .card-content {
        width: 100%;
        height: 50%;
        padding: 1.5rem;

        span {
            font-weight: 700;
            font-size: 14px;
            line-height: 21px;
        }

        .time {
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 0.75rem;
        }

        .title {
            font-weight: 900;
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 0.75rem;
        }

        .info,
        .teacher {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 0.75rem;
        }

        .price {
            font-weight: 900;
            font-size: 32px;
            line-height: 38.4px;
            color: #ED888C;
        }
    }
}

.couse-card-horizontal {
    width: 416px;
    height: 160px;
    background-color: white;
    overflow: hidden;
    display: flex;

    .card-img {
        width: 47%;
        height: 100%;
        border-radius: 0px 0px 80px 0px;
        overflow: hidden;
    }

    .card-content {
        width: 53%;
        height: 100%;
        padding: 0 1.5rem;

        span {
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 0.75rem;
        }

        .title {
            font-weight: 900;
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 1.5rem;
        }

        .info {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 1.3rem;
        }

        .time {
            font-weight: 700;
            font-size: 14px;
            line-height: 21px;
        }
    }
}

.search-btn {
    width: 306px;
    height: 160px;
    padding: 60.5px 0;
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

.en-title {
    font-weight: 900;
    font-size: 32px;
    line-height: 38.4px;

    @media (max-width: 768px) {
        font-weight: 900;
        font-size: 20px;
        line-height: 24px;
    }
}

.cn-title {
    font-weight: 900;
    font-size: 120px;
    line-height: 144px;

    @media (max-width: 768px) {
        font-weight: 900;
        font-size: 48px;
        line-height: 57.6px;
    }
}

.mb-4 {
    margin-bottom: 4rem;
}

.mb-2 {
    margin-bottom: 2rem;
}

.mb-9 {
    margin-bottom: 9rem;
}

.position-absolute {
    position: absolute;
}

.z-index-top {
    z-index: 3;
}

.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
