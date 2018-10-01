<template>
    <div class="side--menu" :class="$mq">
        <div class="">
            계급그래프
        </div>

        <div>
            MMR
        </div>

        <div>
            시즌별 게임정보
        </div>

        <footer>
            푸터
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.side--menu{
    float:right;
    width:320px;

    border:1px solid black;

    &.mobile{
        float:none;
        width:100%;
    }

    &.tablet{
        float:none;
        width:100%;
    }
}

</style>


