<script setup lang="ts">
import { NIcon, NGrid, NGridItem, NAvatar } from "naive-ui";
import { InstagramFilled, LinkedinFilled, YoutubeFilled } from "@vicons/antd";
import { FacebookRound } from "@vicons/material";
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="logo">
                <picture>
                    <source media="(max-width: 768px)" srcset="@/assets/logo/petknowLogo-262-120.svg" />
                    <img src="@/assets/logo/petknowLogo-856-393.svg" alt="petknow-logo" />
                </picture>
            </div>
            <div class="info-section">
                <ul class="info">
                    <li><router-link to="">關於我們</router-link></li>
                    <li><router-link to="">加入我們</router-link></li>
                    <li><router-link to="">隱私權政策</router-link></li>
                </ul>
                <ul class="sns">
                    <li>
                        <a href="http://"> <n-icon size="32" color="#020202">
                                <FacebookRound />
                            </n-icon></a>
                    </li>
                    <li>
                        <a href="http://">
                            <n-icon size="32" color="#020202">
                                <InstagramFilled />
                            </n-icon>
                        </a>
                    </li>
                    <li>
                        <a href="http://">
                            <n-icon size="32" color="#020202">
                                <LinkedinFilled />
                            </n-icon>
                        </a>
                    </li>
                    <li>
                        <a href="http://">
                            <n-icon size="32" color="#020202">
                                <YoutubeFilled />
                            </n-icon>
                        </a>
                    </li>
                </ul>

            </div>
            <div class="copy-right">
                <p>
                    Copyright © 2023 PetKnow All rights reserved.
                </p>
            </div>

        </div>

    </footer>
</template>

<style lang="scss" scoped>
.footer {
    width: 100vw;
    height: 100%;
    padding-top: 8rem;
    padding-bottom: 2rem;

    @media (max-width: 768px) {
        padding-top: 6rem;
        padding-bottom: 1.5rem;
    }
}


.container {
    max-width: 1328px;
    height: 100%;
    margin: 0 auto;
    padding: 0 1rem;
}


.info-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0;

    @media (max-width: 768px) {
        display: block;
        padding-top: 3rem;
        padding-bottom: 3.6rem;

    }



    ul {
        list-style-type: none;
    }

    .info {
        display: flex;
        padding: 0;


        @media (max-width: 768px) {
            display: block;
            margin-bottom: 3.6rem;

        }

        li {
            margin-right: 2.5rem;
            font-size: 32px;
            font-weight: bold;

            @media (max-width: 768px) {
                font-size: 24px;
                margin-bottom: 1.5rem;

            }

            &:nth-child(3) {
                @media (max-width: 768px) {
                    font-size: 24px;
                    margin-bottom: 0rem;

                }

            }


        }



    }

    .sns {
        display: flex;
        padding: 0;

        li {
            margin-right: 3rem;

            @media (max-width: 768px) {
                margin-right: 1.75rem;

                svg {
                    font-size: 20px;
                }

            }
        }

    }


}


.copy-right {
    @media (max-width: 768px) {
        svg {
            font-size: 18px;
        }

    }
}
</style>