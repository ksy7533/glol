<template>
    <header class="header">
        <top-section></top-section>
        <bottom-section></bottom-section>
    </header>
</template>

<script>
import topSection from './TopSection.vue';
import bottomSection from './BottomSection.vue';

export default {
    components: {
        'top-section' : topSection,
        'bottom-section' : bottomSection
    }
}
</script>

<style lang="scss" scoped>
.header{
    z-index:1000;
    position: fixed;
    top:0;
    left:0;
    width:100%;
}

</style>

