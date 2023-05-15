<script setup lang="ts">
</script>
<template>
    <div class="col">
        <div class="tabs">
            <div class="tab">
                <input type="checkbox" id="chck1">
                <label class="tab-label" for="chck1">我可以在這個平台學習到什麼?</label>
                <div class="tab-content">
                    我們的線上學習平台提供多樣化的寵物知識課程，讓您可以學習如何與寵物建立更好的溝通關係、培養寵物的好習慣和技能，以及解決寵物的不良行為，讓您和您的寵物共同享受快樂的生活。
                </div>
            </div>
            <div class="tab">
                <input type="checkbox" id="chck2">
                <label class="tab-label" for="chck2">我可以在這個平台學習到什麼?</label>
                <div class="tab-content">
                    我們的線上學習平台提供多樣化的寵物知識課程，讓您可以學習如何與寵物建立更好的溝通關係、培養寵物的好習慣和技能，以及解決寵物的不良行為，讓您和您的寵物共同享受快樂的生活。
                </div>
            </div>
            <div class="tab">
                <input type="checkbox" id="chck2">
                <label class="tab-label" for="chck2">我可以在這個平台學習到什麼?</label>
                <div class="tab-content">
                    我們的線上學習平台提供多樣化的寵物知識課程，讓您可以學習如何與寵物建立更好的溝通關係、培養寵物的好習慣和技能，以及解決寵物的不良行為，讓您和您的寵物共同享受快樂的生活。
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
input {
    position: absolute;
    opacity: 0;
    z-index: -1;
}

// Layout
.row {
    display: flex;

    .col {
        flex: 1;

        &:last-child {
            margin-left: 1em;
        }
    }
}

/* Accordion styles */
.tabs {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
}

.tab {
    width: 100%;
    color: rgb(29, 22, 22);
    overflow: hidden;

    &-label {
        display: flex;
        justify-content: space-between;
        padding: 1em;
        background: 'black';
        font-weight: bold;

        font-weight: 900;
        font-size: 32px;
        line-height: 120%;
        cursor: pointer;

        /* Icon */
        &:hover {
            background: 'black';
        }

        &::after {
            content: "\276F";
            width: 64px;
            height: 64px;
            // border-radius: 50%;
            // border: 1px solid black;
            text-align: center;
            transition: all .35s;
        }
    }

    &-content {
        max-height: 0;
        padding: 0 1em;
        color: 'black';
        background: white;
        transition: all .35s;
    }

    &-close {
        display: flex;
        justify-content: flex-end;
        padding: 1em;
        font-size: 0.75em;
        background: 'black';
        cursor: pointer;

        &:hover {
            background: 'black';
        }
    }
}

// :checked
input:checked {
    +.tab-label {
        background: 'black';

        &::after {
            transform: rotate(90deg);
        }
    }

    ~.tab-content {
        max-height: 100vh;
        padding: 1em;
    }
}
</style>
