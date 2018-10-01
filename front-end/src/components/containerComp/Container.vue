<template>
    <section class="container">
        <left-section></left-section>
        <right-section></right-section>
    </section>
</template>

<script>
import LeftSection from './leftSectionComp/LeftSection.vue';
import RightSection from './rightSectionComp/RightSection.vue';

export default {
    components : {
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

