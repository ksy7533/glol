<template>
    <section class="container">
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
    padding:2rem;
    &:after{
        @extend %float-clear;
    }
}
</style>

