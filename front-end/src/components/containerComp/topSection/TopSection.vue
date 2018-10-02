<template>
    <div class="top--section" :class="$mq">
        <div class="player">
            <div class="wrap-img">
                <img src="https://ddragon.leagueoflegends.com/cdn/8.16.1/img/profileicon/508.png" alt="">
            </div>
            <div class="content">
                <p class="name">푸르른밤</p>
                <p class="level">레벨 34</p>
                <p class="rank">1,663,883위 (상위 55%)</p>
                <ul class="tier-list">
                    <li>S6 SILVER</li>
                    <li>S7 SILVER</li>
                </ul>
            </div>
        </div>

        <div class="score">
            <div class="content">
                <p class="type">솔로랭크</p>
                <p class="rank">실버2 / 14LP</p>
                <p class="figure">200승 / 222패</p>
                <p class="league">카르마의 주문술사들</p>
            </div>
            <div class="tier-icon bronze"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.top--section{
    margin-bottom:2rem;

    &:after{
        @extend %float-clear;
    }

    .player{
        @extend %box-type-01;
        float:left;
        width:calc(100% - 32rem);

        &:after{
            @extend %float-clear;
        }

        .wrap-img{
            float:left;
            width:100px;
            height:100px;

            img{
                width:100px;
                height:100px;
            }
        }

        .content{
            float:left;
            margin-left:2rem;

            .name{
                margin-top:1rem;
                font-size:2.2rem;
                font-weight: 700;
            }

            .level{
                margin-top:1rem;
                font-size:1.6rem;
            }

            .rank{
                margin-top:.5rem;
                font-size:1.2rem;
            }

            .tier-list{
                margin-top:.5rem;

                &:after{
                    @extend %float-clear;
                }

                li{
                    float:left;
                    margin-left:.5rem;
                    padding:.3rem .5rem;
                    color:$white;
                    font-weight:700;
                    background-color:$grey-lighten-1;
                    border-radius:.2rem;

                    &:first-child{
                        margin-left:0;
                    }
                }
            }
        }
    }

    .score{
        @extend %box-type-01;
        float:right;
        width:30rem;

        &:after{
            @extend %float-clear;
        }

        .content{
            float:left;

            p{
                margin-top:.5rem;
                color:$grey;
                font-size:1.2rem;

                &.type{
                    margin:1rem 0 0 0;
                    color:$black;
                    font-size:1.6rem;
                    font-weight:700;
                }

                &.rank{
                    margin:2rem 0 1rem;
                    color:$black;
                    font-size:1.4rem;
                }
            }
        }

        .tier-icon{
            float:right;
            width:10rem;
            height:10rem;
            background:url('../../../assets/images/tier_img.png') no-repeat 0 0;

            &.bronze{
                background-position:-4px 0;
            }

            &.silver{
                background-position:-98px 0;
            }

            &.gold{
                background-position:-193px 0;
            }

            &.platinum{
                background-position:-291px 0;
            }

            &.diamond{
                background-position:-390px 0;
            }

            &.master{
                background-position:-489px 0;
            }

            &.challenger{
                background-position:-585px 0;
            }
        }
    }

    &.mobile{
        .player{
            float:none;
            width:100%;
        }

        .score{
            float:none;
            margin-top:2rem;
            width:100%;
        }
    }

    &.tablet{
        .player{
            float:none;
            width:100%;
        }

        .score{
            float:none;
            margin-top:2rem;
            width:100%;
        }
    }

    &.laptop{
        .player{
            width:calc(100% - 320px);
        }

        .score{
            width:300px;
        }
    }
}

</style>