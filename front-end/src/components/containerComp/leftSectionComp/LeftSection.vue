<template>
    <div class="main--content" :class="$mq">
        <div class="in-game">
            <button class="btn type--01"><span>인게임 정보보기 <i class="material-icons">youtube_searched_for</i></span></button>
        </div>
        <div class="score">
            <div class="top--area">
                <h2>최근게임전적</h2>
                <ul class="menu">
                    <li class="on">
                        <a href="#n">랭크</a>
                    </li>
                    <li>
                        <a href="#n">일반</a>
                    </li>
                </ul>
            </div>
            <div class="content">
                <div class="tbl-type-01">

                    <ul class="tit">
                        <li class="col type">타입</li>
                        <li class="col record">승패</li>
                        <li class="col champion">챔피언</li>
                        <li class="col grade">평점</li>
                        <li class="col kda">KDA</li>
                        <li class="col kill">킬관여</li>
                        <li class="col detail--info">레벨/골드/cs</li>
                        <li class="col time">플레이타임</li>
                        <li class="col date">날짜</li>
                        <li class="col team">팀정보</li>
                        <li class="col more">더보기</li>
                    </ul>

                    <ul class="list">
                        <li class="row">
                            <div class="wrap-col">
                                <div class="col type">랭크</div>
                                <div class="col record win"><span>승</span></div>
                                <div class="col champion">
                                    <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                    <span class="name">베인</span>
                                </div>
                                <div class="col grade">4.50</div>
                                <div class="col kda">10/10/10</div>
                                <div class="col kill">50%</div>
                                <div class="col detail--info">
                                    <span>16</span>
                                    <span>14,500</span>
                                    <span>164(6.1)</span>
                                </div>
                                <div class="col time">30분30초</div>
                                <div class="col date">10일전</div>
                                <div class="col team">
                                    <ul class="our">
                                        <li>
                                            <a href="#n"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></a>
                                        </li>
                                        <li>
                                            <a href="#n"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></a>
                                        </li>
                                        <li>
                                            <a href="#n"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></a>
                                        </li>
                                        <li>
                                            <a href="#n"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></a>
                                        </li>
                                        <li>
                                            <a href="#n"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></a>
                                        </li>
                                    </ul>
                                    <ul class="enemy">
                                        <li>
                                            <a href="#n"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></a>
                                        </li>
                                        <li>
                                            <a href="#n"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></a>
                                        </li>
                                        <li>
                                            <a href="#n"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></a>
                                        </li>
                                        <li>
                                            <a href="#n"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></a>
                                        </li>
                                        <li>
                                            <a href="#n"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col more">
                                    <a href="#n"><i class="material-icons">expand_more</i></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="bottom--area">
                <a href="#n"><span>더보기 <i class="material-icons">expand_more</i></span></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.main--content{
    float:left;
    width:calc(100% - 640px);

    .in-game{
        @extend %box-type-01;
        
        padding:2rem;

        .btn{
            width:100%;
        }

    }

    .score{
        @extend %box-type-01;
        margin-top:2rem;

        .content{
            .tbl-type-01{
                @extend %tbl-type-01;

                ul.tit, ul.list{
                    .col{
                        &.type{
                            width:5%
                        }

                        &.record{
                            width:5%;
                        }

                        &.champion{
                            width:7%;
                        }

                        &.grade{
                            width:5%;
                        }

                        &.kda{
                            width:9%;
                        }

                        &.kill{
                            width:5%;
                        }

                        &.detail--info{
                            width:11%;
                        }

                        &.time{
                            width:9%;
                        }

                        &.date{
                            width:11%;
                        }

                        &.team{
                            width:28%;
                        }

                        &.more{
                            width:5%;
                        }
                    }
                }

                ul.list{
                    li.row{
                        .wrap-col{
                            .col{
                                &:after{
                                    @extend %float-clear;
                                }

                                &.record{
                                    color:$white;
                                    &.win{
                                        span{
                                            display: inline-block;
                                            width:3rem;
                                            height:3rem;
                                            line-height:3rem;
                                            font-weight:700;
                                            background-color:$red;
                                            border-radius:50%;
                                        }
                                    }
                                }

                                &.champion{
                                    .wrap--img{
                                        display: block;
                                        margin-bottom:.5rem;
                                        img{
                                            width:3rem;
                                            height:3rem;
                                        }
                                    }

                                    .name{
                                        display: block;
                                    }

                                }

                                &.detail--info{
                                    span{
                                        display:block;
                                        margin-top:.4rem;

                                        &:first-child{
                                            margin-top:0;
                                        }
                                    }
                                }

                                &.team{
                                    text-align:center;

                                    ul{
                                        display:block;
                                        margin:0 auto;
                                        width:14rem;

                                        &:after{
                                            @extend %float-clear;
                                        }

                                        &.our{
                                            li{
                                                border:2px solid $blue;
                                            }
                                        }

                                        &.enemy{
                                            margin-top:.5rem;

                                            li{
                                                border:2px solid $red;
                                            }
                                        }
                            
                                        li{
                                            float:left;
                                            margin-left:.5rem;
                                            width:2rem;
                                            height:2rem;

                                            &:first-child{
                                                margin-left:0;
                                            }

                                            a{
                                                display: inline-block;
                                                width:2rem;
                                                height:2rem;

                                                img{
                                                    width:2rem;
                                                    height:2rem;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    &.mobile{
        float:none;
        width:100%;

        .score{
            .content{
                .tbl-type-01{
                    ul.tit, ul.list{
                        .col{
                            &.type{
                                display:none;
                            }
                            
                            &.record{
                                width:11%;
                            }

                            &.champion{
                                width:15%;
                            }

                            &.grade{
                                width:11%;
                            }

                            &.kda{
                                width:19%;
                            }

                            &.kill{
                                width:11%;
                            }

                            &.detail--info{
                                display:none;
                            }

                            &.time{
                                display:none;
                            }

                            &.date{
                                width:21%;
                            }

                            &.team{
                                display:none;
                            }

                            &.more{
                                width:12%;
                            }
                        }
                    }
                }
            }
        }
    }

    &.tablet{
        float:none;
        width:100%;
    }

    &.laptop{
        width:calc(100% - 320px);

        .score{
            .content{
                .tbl-type-01{
                    ul.tit, ul.list{
                        .col{
                            &.type{
                                display:none;
                            }

                            &.record{
                                width:5%;
                            }

                            &.champion{
                                width:7%;
                            }

                            &.grade{
                                width:5%;
                            }

                            &.kda{
                                width:9%;
                            }

                            &.kill{
                                width:6%;
                            }

                            &.detail--info{
                                width:13%;
                            }

                            &.time{
                                width:10%;
                            }

                            &.date{
                                width:11%;
                            }

                            &.team{
                                width:28%;
                            }

                            &.more{
                                width:6%;
                            }
                        }
                        
                        li.row{
                            .wrap-col{
                                .col{
                                    &.type{
                                        display:none;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>

