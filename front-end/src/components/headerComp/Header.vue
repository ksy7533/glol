<template>
    <header>
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
