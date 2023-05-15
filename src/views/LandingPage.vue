<script setup lang="ts" >
import { NIcon } from 'naive-ui'
import { ArrowRightAltSharp } from '@vicons/material'
import CourseCard416451 from '@/components/CourseCard-416-451.vue'
import CourseCard351697 from '@/components/CourseCard-351-697.vue'
import CourseCard416160 from '@/components/CourseCard-416-160.vue'
import CourseCard856517 from '@/components/CourseCard-856-517.vue'
import SearchButton from '@/components/SearchButton.vue'
import AccordionComponent from '@/components/AccordionComponent.vue'
import courseCardImg from '@/assets/landing-page/course-card-img.png'
import courseCardImg416160 from '@/assets/landing-page/course-card-img-416-160.png'
import courseCardImg416451 from '@/assets/landing-page/course-card-img-416-451.png'
import carouselImg from '@/assets/landing-page/carousel-img.png'
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
                <SearchButton :text="'搜尋'" />
            </div>
        </div>
        <div class="user-recommend-section">
            <div class="container">
                <div class="just-for-you-section">
                    <h3 class="en-title mb-2 d-flex align-items-center"> <span class="dot"></span> JUST FOR YOU</h3>
                    <p class="mb-4">陳曉明，開始學習</p>
                    <n-grid cols="3" :x-gap="24" :y-gap="24" item-responsive>
                        <n-grid-item span="3 769:1" v-for="(item, index) in 3" :key="index">
                            <div class="flex-center">
                                <CourseCard-416-160 :imageUrl="courseCardImg416160" :tag="'貓咪的貓叫聲'"
                                    :title="'第一章：不同種類的喵叫聲及其含義'" :info="'1.嬉鬧聲'" :time="30" />
                            </div>
                        </n-grid-item>
                    </n-grid>
                </div>
                <div class="next-step-section-pc">
                    <h3 class="en-title mb-2 d-flex align-items-center"><span class="dot"></span> NEXT STEP</h3>
                    <p class="cn-title mb-9 ">為您挑選</p>
                    <SearchButton :text="'立即上課'" />
                    <div class="course-card-section">
                        <CourseCard-856-517 :imageUrl="courseCardImg" :level="'初階'" :title="'寵物攝影達人：捕捉寵物最佳畫面與構圖技巧'"
                            :info="'學會寵物攝影的專業技巧，捕捉最佳畫面與構圖技巧，讓你的寵物照片更加生動、有趣與吸睛。'" :teacher="'陳曉明'" :time="16" :courseNum="52"
                            :price="1600" />
                    </div>
                </div>
                <div class="next-step-section-phone">
                    <h3 class="en-title mb-2 d-flex align-items-center"><span class="dot"></span> NEXT STEP</h3>
                    <p class="cn-title position-absolute z-index-top">為您挑選</p>
                    <div class="course-card-section flex-center mb-2">
                        <CourseCard-351-697 :imageUrl="courseCardImg" :level="'初階'" :title="'寵物攝影達人：捕捉寵物最佳畫面與構圖技巧'"
                            :info="'學會寵物攝影的專業技巧，捕捉最佳畫面與構圖技巧，讓你的寵物照片更加生動、有趣與吸睛。'" :teacher="'陳曉明'" :time="16" :courseNum="52"
                            :price="1600" />
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
        <div class="carousel-section">
            <div class="container">
                <div class="">
                    <h3 class="en-title mb-2 d-flex align-items-center"><span class="dot"></span> YOU MIGHT LIKE IT</h3>
                    <p class="cn-title mb-4">你可能會喜歡</p>
                    <n-carousel effect="card" prev-slide-style="transform: translateX(-150%) translateZ(-640px);"
                        next-slide-style="transform: translateX(50%) translateZ(-640px);" style="height:640px"
                        :show-dots="false">
                        <n-carousel-item v-for="item, index in 3" :key="index" :style="{ width: '60%' }">
                            <img class="carousel-img" :src="carouselImg">
                        </n-carousel-item>
                    </n-carousel>
                </div>
            </div>

        </div>

        <div class="course-list-section">
            <div class="container">
                <div class="">
                    <h3 class="en-title mb-2 d-flex align-items-center"><span class="dot"></span> EVERYONE IS LEARNING</h3>
                    <p class="cn-title mb-4 d-flex align-items-center">大家都在學 <span class="arrow-circle">
                            <n-icon class="arrow-icon" size="32" color="#000000">
                                <ArrowRightAltSharp />
                            </n-icon>
                        </span></p>
                    <div class="mb-2 flex-between align-items-center">
                        <h4 class="sub-title">熱門課程</h4>
                        <p>看更多
                            <n-icon class="arrow-icon" size="16" color="#000000">
                                <ArrowRightAltSharp />
                            </n-icon>
                        </p>
                    </div>
                    <n-grid cols="3" :x-gap="24" :y-gap="24" item-responsive>
                        <n-grid-item span="3 769:1" v-for="(item, index) in 3" :key="index">
                            <div class="flex-center">
                                <CourseCard-416-451 :imageUrl="courseCardImg416451" :title="'寵物訓練實拍：實戰技巧教學與寵物互動樂趣'"
                                    :teacher="'寵物訓練大師 Mr. Chen'" :price="2500" />
                            </div>
                        </n-grid-item>
                    </n-grid>
                </div>
            </div>

        </div>
        <div class="faq-section">
            <div class="container">
                <n-grid cols="2" item-responsive>
                    <n-grid-item span="2 769:1">
                        <div class="" style="">
                            <h3 class="en-title mb-2 d-flex align-items-center"><span class="dot"></span> F&Q</h3>
                            <p class="cn-title mb-4">常見問題</p>
                        </div>
                    </n-grid-item>
                    <n-grid-item span="2 769:1">
                        <AccordionComponent />
                    </n-grid-item>
                </n-grid>
            </div>

        </div>
        <div class="topics-section">
            <div class="container">
                <div class="">
                    <h3 class="en-title mb-2 d-flex align-items-center"><span class="dot"></span> FEATURED TOPICS</h3>
                    <p class="cn-title mb-4">精選主題</p>
                </div>
            </div>
            <div class="topic-scrollbar">
                <div v-for="(item, index) in 12" :key="index">
                    <button class="topic-button-272-120">
                        <p>寵物洗澡教學</p>
                    </button>
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

.course-list-section {
    padding: 8rem 0;
    .arrow-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 120px;
        margin-left: 20px;
        border: 4px solid #020202;
        border-radius: 50%;

        @media (max-width: 768px) {
            width: 48px;
            height: 48px;
            margin-left: 143px;
        }
    }
}
.carousel-section {
    padding-top: 8rem;
    padding-bottom: 0;
    .carousel-img {
        width: 100%;
        height: 640px;
        object-fit: contain;
    }
}

.faq-section {
    padding: 8rem 0;
}

.topics-section {
    background-color: #F8F8F8;
    padding: 8rem 2rem;
    @media (max-width: 768px) {
        padding: 8rem 2rem;
    }
    .topic-scrollbar {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
        margin-bottom: 8rem;
        .topic-button-272-120 {
            width: 272px;
            height: 120px;
            padding: 45.5px 0;
            border: 4px solid #020202;
            border-radius: 999px;
            background-color: transparent;
            margin-right: 8px;
            margin-bottom: 16px;

            p {
                font-weight: 900;
                font-size: 24px;
                line-height: 120%;
            }

            @media (max-width: 768px) {
                width: 192px;
                height: 80px;
                padding: 28px 0;
            }
        }
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

.dot {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: #ED888C;
    margin-right: 24px;
}

.sub-title {
    font-weight: 900;
    font-size: 48px;
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

.d-flex {
    display: flex;
}

.align-items-center {
    align-items: center
}
.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}
.flex-between {
    display: flex;
    justify-content: space-between;
}

</style>
