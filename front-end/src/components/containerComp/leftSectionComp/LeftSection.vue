<template>
    <div class="main-content" :class="$mq">
        <router-view></router-view>
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
</style>

