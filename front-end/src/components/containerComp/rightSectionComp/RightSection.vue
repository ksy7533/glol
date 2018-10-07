<template>
    <div class="side--content" :class="$mq">
        <div class="mmr">
            <button class="btn type--01"><span>개인랭크 MMR 갱신 <i class="material-icons">autorenew</i></span></button>
        </div>

        <div class="wrap--box">
            <div class="box prefer-champion">
                <div class="top--area">
                    <h2>선호 챔피언</h2>
                </div>
                <div class="content">
                    <div class="txt-info">
                        <p class="name"><span>푸르른밤</span>님은</p>
                        <p class="type"><span>베인</span>을 가장 선호합니다.</p>
                    </div>
                    <table>
                        <colgroup>
                            <col style="width:20%">
                            <col style="width:30%">
                            <col style="width:20%">
                            <col style="width:15%">
                            <col style="width:15%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>챔피언</th>
                                <th>KDA</th>
                                <th>평점</th>
                                <th>게임수</th>
                                <th>승률</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="champion">
                                    <!-- <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span> -->
                                    <span class="name">베인</span>
                                </td>
                                <td class="kda">
                                    <span class="kill">4.0</span> /
                                    <span class="death">2.0</span> /
                                    <span class="assist">9.0</span>
                                </td>
                                <td>3.00:1</td>
                                <td>2</td>
                                <td class="rate">60%</td>
                            </tr>
                            <tr>
                                <td class="champion">
                                    <!-- <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span> -->
                                    <span class="name">베인</span>
                                </td>
                                <td class="kda">
                                    <span class="kill">4.0</span> /
                                    <span class="death">2.0</span> /
                                    <span class="assist">9.0</span>
                                </td>
                                <td>3.00:1</td>
                                <td>2</td>
                                <td class="rate">60%</td>
                            </tr>
                            <tr>
                                <td class="champion">
                                    <!-- <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span> -->
                                    <span class="name">베인</span>
                                </td>
                                <td class="kda">
                                    <span class="kill">4.0</span> /
                                    <span class="death">2.0</span> /
                                    <span class="assist">9.0</span>
                                </td>
                                <td>3.00:1</td>
                                <td>2</td>
                                <td class="rate">60%</td>
                            </tr>
                            <tr>
                                <td class="champion">
                                    <!-- <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span> -->
                                    <span class="name">베인</span>
                                </td>
                                <td class="kda">
                                    <span class="kill">4.0</span> /
                                    <span class="death">2.0</span> /
                                    <span class="assist">9.0</span>
                                </td>
                                <td>3.00:1</td>
                                <td>2</td>
                                <td class="rate">60%</td>
                            </tr>
                            <tr>
                                <td class="champion">
                                    <!-- <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span> -->
                                    <span class="name">베인</span>
                                </td>
                                <td class="kda">
                                    <span class="kill">4.0</span> /
                                    <span class="death">2.0</span> /
                                    <span class="assist">9.0</span>
                                </td>
                                <td>3.00:1</td>
                                <td>2</td>
                                <td class="rate">60%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="box prefer-position">
                <div class="top--area">
                    <h2>선호 포지션</h2>
                </div>
                <div class="content">
                    <div class="txt-info">
                        <p class="name"><span>푸르른밤</span>님은</p>
                        <p class="type"><span>원딜</span>을 가장 선호합니다.</p>
                    </div>
                    <table>
                        <colgroup>
                            <col style="width:25%">
                            <col style="width:25%">
                            <col style="width:25%">
                            <col style="width:25%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>포지션</th>
                                <th>비중</th>
                                <th>전적</th>
                                <th>승률</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>탑</td>
                                <td>70%</td>
                                <td class="score">
                                    <span class="win">1</span>승
                                    <span class="loss">2</span>패
                                </td>
                                <td class="rate">60%</td>
                            </tr>
                            <tr>
                                <td>정글</td>
                                <td>70%</td>
                                <td class="score">
                                    <span class="win">1</span>승
                                    <span class="loss">2</span>패
                                </td>
                                <td class="rate">60%</td>
                            </tr>
                            <tr>
                                <td>미드</td>
                                <td>70%</td>
                                <td class="score">
                                    <span class="win">1</span>승
                                    <span class="loss">2</span>패
                                </td>
                                <td class="rate">60%</td>
                            </tr>
                            <tr>
                                <td>원딜</td>
                                <td>70%</td>
                                <td class="score">
                                    <span class="win">1</span>승
                                    <span class="loss">2</span>패
                                </td>
                                <td class="rate">60%</td>
                            </tr>
                            <tr>
                                <td>서포터</td>
                                <td>70%</td>
                                <td class="score">
                                    <span class="win">1</span>승
                                    <span class="loss">2</span>패
                                </td>
                                <td class="rate">60%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <footer>
            <p class="copyright">GLOL isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</p>
        </footer>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.side--content {
    float: right;
    margin-left: 2rem;
    width: 62rem;

    .wrap--box {
        margin-top: 2rem;

        &:after {
            @extend %float-clear;
        }

        .box{
            .txt-info{
                text-align:center;
                padding:0 2rem 2rem;
                font-size:1.2rem;

                .name{
                    span{
                        color:$blue;
                        font-size:1.4rem;
                        font-weight: 700;
                    }
                }

                .type{
                    margin-top:.5rem;
                    span{
                        color:$red;
                        font-size:1.8rem;
                        font-weight: 700;
                        text-decoration:underline;
                    }
                }
            }

            &.prefer-champion {
                @extend %box-type-01;
                float: left;
                width: 30rem;

                .content {
                    table {
                        @extend %tbl-type-02;

                        tbody {
                            tr {
                                td {
                                    &.kda{
                                        .kill{
                                            color:$blue;
                                        }
                                        .death{
                                            color:$red;
                                        }
                                        .assist{
                                            color:$grey;
                                        }
                                    }

                                    &.rate{
                                        font-weight:700;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            &.prefer-position {
                @extend %box-type-01;
                float: left;
                margin-left: 2rem;
                width: 30rem;

                .content {
                    table {
                        @extend %tbl-type-02;

                        tbody{
                            tr{
                                td{
                                    &.score{
                                        .win{
                                            color:$red;
                                        }

                                        .loss{
                                            color:$blue;
                                        }
                                    }

                                    &.rate{
                                        font-weight:700;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .mmr {
        @extend %box-type-01;
        padding: 2rem;

        .btn {
            width: 100%;
        }
    }

    footer {
        @extend %box-type-01;
        margin-top: 2rem;
        padding: 2rem;

        .copyright {
            line-height: 1.2rem;
            font-weight: 600;
        }
    }

    &.mobile {
        float: none;
        margin: 0;
        width: 100%;

        .mmr {
            margin-top: 2rem;
        }

        .wrap--box {
            .box {
                float: none;
                margin: 0 0 2rem 0;
                width: 100%;
            }
        }
    }

    &.tablet {
        float: none;
        margin: 0;
        width: 100%;

        .mmr {
            margin-top: 2rem;
        }

        .wrap--box {
            .box {
                float: none;
                margin: 0 0 2rem 0;
                width: 100%;
            }
        }
    }

    &.laptop {
        width: 30rem;

        .wrap--box {
            .box {
                float: none;
                margin: 0 0 2rem 0;
                width: 100%;
            }
        }
    }
}
</style>


