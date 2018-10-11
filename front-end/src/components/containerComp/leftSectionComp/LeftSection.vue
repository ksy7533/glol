<template>
    <div class="main-content" :class="$mq">
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import Score from './Score.vue';

export default {
    components : {
        score : Score
    }
}
</script>
<style lang="scss" scoped>
.main-content{
    float:left;
    width:calc(100% - 640px);

    &.mobile{
        float:none;
        width:100%;
    }

    &.tablet{
        float:none;
        width:100%;
    }

    &.laptop{
        width:calc(100% - 320px);
    }
}

.slide-enter-active{
    animation: fade-in 200ms ease-out forwards;
}

.slide-leave-active{
    animation: fade-out 200ms ease-out forwards;
}
</style>

