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
                <table>
                    <colgroup>
                        <col class="type">
                        <col class="record">
                        <col class="champion">
                        <col class="grade">
                        <col class="kda">
                        <col class="kill">
                        <col class="detail--info">
                        <col class="time">
                        <col class="date">
                        <col class="team">
                        <col class="more">
                    </colgroup>
                    <thead>
                        <tr>
                            <th class="type">타입</th>
                            <th class="record">승패</th>
                            <th class="champion">챔피언</th>
                            <th class="grade">평점</th>
                            <th class="kda">KDA</th>
                            <th class="kill">킬관여</th>
                            <th class="detail--info">레벨/골드/cs</th>
                            <th class="time">플레이타임</th>
                            <th class="date">날짜</th>
                            <th class="team">팀정보</th>
                            <th class="more">더보기</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="type">랭크</td>
                            <td class="record win"><span>승</span></td>
                            <td class="champion">
                                <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                <span class="name">베인</span>
                            </td>
                            <td class="grade">4.50</td>
                            <td class="kda">10/10/10</td>
                            <td class="kill">50%</td>
                            <td class="detail--info">
                                <span>16</span>
                                <span>14,500</span>
                                <span>164(6.1)</span>
                            </td>
                            <td class="time">30분30초</td>
                            <td class="date">10일전</td>
                            <td class="team">
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
                            </td>
                            <td class="more">
                                <a href="#n"><i class="material-icons">expand_more</i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
            table{
                @extend %tbl-type-01;

                colgroup{
                    col{
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

                tbody{
                    tr{
                        td{
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

    &.mobile{
        float:none;
        width:100%;

        .score{
            .content{
                table{
                    colgroup{
                        col{
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

                    thead{
                        tr{
                            th{
                                &.type{
                                    display:none;
                                }

                                &.detail--info{
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

                    tbody{
                        tr{
                            td{
                                &.type{
                                    display:none;
                                }

                                &.detail--info{
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

    &.tablet{
        float:none;
        width:100%;
    }

    &.laptop{
        width:calc(100% - 320px);
    }
}

</style>

