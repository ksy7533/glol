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
                <div class="content">
                    <table>
                        <colgroup>
                            <col style="width:25%">
                            <col style="width:30%">
                            <col style="width:25%">
                            <col style="width:20%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>챔피언</th>
                                <th>KDA / 평점</th>
                                <th>게임수</th>
                                <th>승률</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="champion">
                                    <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                    <span class="name">베인</span>
                                </td>
                                <td class="score">
                                    <span class="grade">3.00:1</span>
                                    <span class="kda">4.5 / 5.5 / 6.0</span>
                                </td>
                                <td>2</td>
                                <td>60%</td>
                            </tr>
                            <tr>
                                <td class="champion">
                                    <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                    <span class="name">베인</span>
                                </td>
                                <td class="score">
                                    <span class="grade">3.00:1</span>
                                    <span class="kda">4.5 / 5.5 / 6.0</span>
                                </td>
                                <td>2</td>
                                <td>60%</td>
                            </tr>
                            <tr>
                                <td class="champion">
                                    <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                    <span class="name">베인</span>
                                </td>
                                <td class="score">
                                    <span class="grade">3.00:1</span>
                                    <span class="kda">4.5 / 5.5 / 6.0</span>
                                </td>
                                <td>2</td>
                                <td>60%</td>
                            </tr>
                            <tr>
                                <td class="champion">
                                    <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                    <span class="name">베인</span>
                                </td>
                                <td class="score">
                                    <span class="grade">3.00:1</span>
                                    <span class="kda">4.5 / 5.5 / 6.0</span>
                                </td>
                                <td>2</td>
                                <td>60%</td>
                            </tr>
                            <tr>
                                <td class="champion">
                                    <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                    <span class="name">베인</span>
                                </td>
                                <td class="score">
                                    <span class="grade">3.00:1</span>
                                    <span class="kda">4.5 / 5.5 / 6.0</span>
                                </td>
                                <td>2</td>
                                <td>60%</td>
                            </tr>
                        </tbody>
                    </table>
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

        .tier--graph{
            @extend %box-type-01;
            float:left;
            margin-left:2rem;
            width:300px;
            height:450px;
        }

        .season--info{
            @extend %box-type-01;
            float:left;
            width:300px;
            height:450px;

            .content{
                table{
                    @extend %tbl-type-01;

                    tbody{
                        tr{
                            td{

                                &.champion{
                                    .wrap--img{
                                        display: block;
                                        margin-bottom:.5rem;
                                        img{
                                            width:3rem;
                                            height:3rem;
                                        }
                                    }
                                }

                                &.score{
                                    span{
                                        display: block;

                                        &.kda{
                                            margin-top:.4rem;
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

    .mmr{
        @extend %box-type-01;
        padding:2rem;
        
        .btn{
            width:100%;
        }
    }

    footer{
        @extend %box-type-01;
        margin-top:2rem;
        padding:2rem;

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


