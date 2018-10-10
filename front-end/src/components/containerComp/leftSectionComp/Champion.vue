<template>
<div class="wrap-content" :class="$mq">
    <div class="champion">
        <div class="top-area">
            <h2>챔피언정보</h2>
            <ul class="menu">
                <li class="on">
                    <a href="#n">솔로랭크</a>
                </li>
                <li>
                    <a href="#n">5대5 자유랭크</a>
                </li>
            </ul>
        </div>
        <div class="wrap-box">
            <div class="tbl-type-01">
                <ul class="tit">
                    <li class="col rank">순위</li>
                    <li class="col champion">챔피언</li>
                    <li class="col record">승패</li>
                    <li class="col grade">평점</li>
                    <li class="col kill">킬</li>
                    <li class="col death">데스</li>
                    <li class="col assist">어시스트</li>
                    <li class="col gold">골드</li>
                    <li class="col cs">CS</li>
                </ul>

                <ul class="list">
                    <li class="row">
                        <div class="wrap-col">
                            <div class="col rank">1</div>
                            <div class="col champion">
                                <span class="wrap-img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                <span class="name">베인</span>
                            </div>
                            <div class="col record"><span class="win">7승</span> / <span class="loss">8패</span></div>
                            <div class="col grade">4.50</div>
                            <div class="col kill">2.50</div>
                            <div class="col death">11.50</div>
                            <div class="col assist">3.50</div>
                            <div class="col gold">3,000</div>
                            <div class="col cs">180</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>    
</div>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
.wrap-content{
    .champion{
        @extend %box-type-01;
        margin-top:2rem;

        .wrap-box{
            .tbl-type-01{
                @extend %tbl-type-01;

                ul.tit, ul.list{
                    .col{
                        &.rank{
                            width:10%
                        }

                        &.champion{
                            width:11%;
                        }

                        &.record{
                            width:13%;
                        }

                        &.grade{
                            width:11%;
                        }

                        &.kill{
                            width:11%;
                        }

                        &.death{
                            width:11%;
                        }

                        &.assist{
                            width:11%;
                        }

                        &.gold{
                            width:11%;
                        }

                        &.cs{
                            width:11%;
                        }
                    }
                }

                ul.list{
                    li.row{
                        .wrap-col{
                            .col{
                                @extend %float-clear;

                                &.champion{
                                    .wrap-img{
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
                            }
                        }
                    }
                }
            }
        }
    }

    &.mobile{
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

                            &.detail-info{
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

                        li.row{
                            .wrap-col{
                                .col{
                                    &.type{
                                        display:none;
                                    }

                                    &.detail-info{
                                        display:none;
                                    }

                                    &.time{
                                        display:none;
                                    }

                                    &.team{
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

    &.tablet{
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

                            &.detail-info{
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

    &.laptop{
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

                            &.detail-info{
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

