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
            <div class="update">
                <p class="info">마지막 갱신 : 1일전</p>
                <button class="btn type--01"><span>전체 전적 갱신 <i class="material-icons">autorenew</i></span></button>
            </div>
        </div>

        <div class="score">
            <ul class="menu">
                <li class="on">
                    <a href="#n">솔로랭크</a>
                </li>
                <li>
                    <a href="#n">자유랭크</a>
                </li>
            </ul>
            <div class="box left">
                <div class="content">
                    <p class="type">솔로랭크</p>
                    <p class="rank">실버2 / 14LP</p>
                    <p class="figure">
                        <span class="total">10</span>전
                        <span class="win">4</span>승
                        <span class="loss">6</span>패
                        <span class="rate">(40.00%)</span>
                    </p>
                    <p class="league">카르마의 주문술사들</p>
                </div>
                <div class="tier-icon bronze"></div>
            </div>
            <div class="box right">
                <div class="content">
                    <p class="type">자유랭크</p>
                    <p class="rank">실버2 / 14LP</p>
                    <p class="figure">
                        <span class="total">10</span>전
                        <span class="win">4</span>승
                        <span class="loss">6</span>패
                        <span class="rate">(40.00%)</span>
                    </p>
                    <p class="league">카르마의 주문술사들</p>
                </div>
                <div class="tier-icon silver"></div>
            </div>
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
        padding:2rem;
        width:calc(100% - 64rem);

        &:after{
            @extend %float-clear;
        }

        .top--area{
            padding:0 0 2rem 0;
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

        .update{
            float:right;
            margin-top:5rem;

            .info{
                text-align:right;
                margin-bottom:.4rem;
                color:$grey;
                font-size:1.2rem;
            }
        }
    }

    .score{
        @extend %box-type-01;
        float:right;
        position: relative;
        padding:2rem;
        width:62rem;

        &:before{
            content:'';
            position: absolute;
            top:2rem;
            left:50%;
            width:.1rem;
            height:10rem;
            background-color:$grey-lighten-3;
        }

        &:after{
            @extend %float-clear;
        }

        .menu{
            position:absolute;
            top:2rem;
            left:2rem;
            display:none;

            &:after{
                @extend %float-clear;
            }

            li{
                float:left;
                position: relative;
                margin-left:1rem;
                padding-left:1rem;

                &:first-child{
                    margin-left:0;
                    padding-left:0;

                    &:before{
                        display:none;
                    }
                }

                &:before{
                    content:'';
                    display: block;
                    position: absolute;
                    top:.1rem;
                    left:0;
                    width:.1rem;
                    height:1.1rem;
                    background-color:$grey-lighten-1;
                }

                &.on{
                    a{
                        color:$black;
                        font-weight: bold;
                    }
                }

                a{
                    display: inline-block;
                    color:$grey;
                    font-size:1.4rem;
                    text-decoration:none;
                }
            }
        }

        .box{
            width:260px;
            &.left{
                float:left
            }

            &.right{
                float:right
            }

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
                        margin:2rem 0 1.5rem;
                        color:$black;
                        font-size:1.4rem;
                    }

                    &.figure{
                        span{
                            font-weight: 700;

                            &.win{
                                color:$red;
                            }
                            &.loss{
                                color:$blue;
                            }
                            &.total{
                                color:$black;
                            }
                        }
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
    }

    &.mobile{
        .player{
            float:none;
            width:100%;

            .content{
                text-align:right;
                float:right;
                margin-left:0;
            }

            .update{
                margin-top:0;
                width:100%;
                
                .info{
                    text-align:center;
                    margin:1rem 0 0 0;
                }

                .btn{
                    margin-top:1rem;
                    width:100%
                }
            }
        }

        .score{
            float:none;
            margin-top:2rem;
            width:100%;

            &:before{
                display: none;
            }

            .menu{
                display: block;
            }

            .box{
                width:100%;

                &.right{
                    display:none;
                    float:left;
                }

                .content{
                    .type{
                        display: none;
                    }

                    .rank{
                        margin-top:4rem;
                    }
                }
            }
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

            &:before{
                display: none;
            }

            .menu{
                display: block;
            }

            .box{
                width:100%;

                &.right{
                    display:none;
                    float:left;
                }

                .content{
                    .type{
                        display: none;
                    }

                    .rank{
                        margin-top:4rem;
                    }
                }
            }
        }
    }

    &.laptop{
        .player{
            width:calc(100% - 320px);
        }

        .score{
            width:300px;

            &:before{
                display: none;
            }

            .menu{
                display: block;
            }

            .box{
                width:100%;

                &.right{
                    display:none;
                    float:left;
                }

                .content{
                    .type{
                        display: none;
                    }

                    .rank{
                        margin-top:4rem;
                    }
                }
            }
        }
    }
}

</style>