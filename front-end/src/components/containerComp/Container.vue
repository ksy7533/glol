<template>
    <section class="container" :class="$mq">
        <top-section></top-section>
        <left-section></left-section>
        <right-section></right-section>
    </section>
</template>

<script>
import TopSection from './topSection/TopSection.vue';
import LeftSection from './leftSectionComp/LeftSection.vue';
import RightSection from './rightSectionComp/RightSection.vue';

export default {
    components : {
        'top-section' : TopSection,
        'left-section' : LeftSection,
        'right-section' : RightSection
    }
}
</script>

<style lang="scss" scoped>
.container{
    @extend %float-clear;
    padding:12.4rem 2rem 2rem;

    &.mobile{
        padding-top:17rem;
    }
}
</style>

