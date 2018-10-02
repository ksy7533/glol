<template>
    <div class="side--content" :class="$mq">
        <div class="mmr">
            <button class="btn type--01">개인랭크 MMR 갱신</button>
        </div>

        <div class="wrap--box">
            <div class="box season--info">
                <div class="top--area">
                    <h2>선호 챔피언</h2>
                </div>
            </div>

            <div class="box tier--graph">
                <div class="top--area">
                    <h2>계급 그래프</h2>
                </div>
            </div>
        </div>

        <footer>
            <p class="copyright">GLOL isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</p>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.side--content{
    float:right;
    margin-left:2rem;
    width:620px;

    .wrap--box{
        margin-top:2rem;

        &:after{
            @extend %float-clear;
        }

        .season--info{
            @extend %box-type-01;
            float:left;
            width:300px;
            height:450px;
        }

        .tier--graph{
            @extend %box-type-01;
            float:left;
            margin-left:2rem;
            width:300px;
            height:450px;
        }

    }

    .mmr{
        @extend %box-type-01;
        
        .btn{
            width:100%;
        }
    }

    footer{
        @extend %box-type-01;
        margin-top:2rem;

        .copyright{
            line-height:1.2rem;
            font-weight:600;
        }
        
    }

    &.mobile{
        float:none;
        margin:0;
        width:100%;

        .mmr{
            margin-top:2rem;
        }

        .wrap--box{
            .box{
                float:none;
                margin:0 0 2rem 0;
                width:100%;
            }
        }
    }

    &.tablet{
        float:none;
        margin:0;
        width:100%;

        .mmr{
            margin-top:2rem;
        }

        .wrap--box{
            .box{
                float:none;
                margin:0 0 2rem 0;
                width:100%;
            }
        }
    }

    &.laptop{
        width:300px;

        .wrap--box{
            .box{
                float:none;
                margin:0 0 2rem 0;
                width:100%;
            }
        }
    }
}
</style>


