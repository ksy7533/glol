<template>
    <div class="main--content" :class="$mq">
        <!-- <div class="player">
            <h2>플레이어정보</h2>
            <div class="content">
                플레이어 정보입니다<br>플레이어 정보입니다<br>플레이어 정보입니다<br>플레이어 정보입니다<br>플레이어 정보입니다<br>플레이어 정보입니다<br>플레이어 정보입니다<br>플레이어 정보입니다<br>플레이어 정보입니다<br>
            </div>
        </div> -->
        <div class="score">
            <div class="top--area">
                <h2>최근게임전적</h2>
                <ul class="menu">
                    <li>
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
                        <col style="width:5%">
                        <col style="width:5%">
                        <col style="width:7%">
                        <col style="width:5%">
                        <col style="width:9%">
                        <col style="width:5%">
                        <col style="width:11%">
                        <col style="width:9%">
                        <col style="width:11%">
                        <col style="width:14%">
                        <col style="width:14%">
                        <col style="width:5%">
                    </colgroup>
                    <thead>
                        <tr>
                            <th>타입</th>
                            <th>승패</th>
                            <th>챔피언</th>
                            <th>평점</th>
                            <th>KDA</th>
                            <th>킬관여</th>
                            <th>레벨/골드/cs</th>
                            <th>플레이타임</th>
                            <th>날짜</th>
                            <th style="text-align:left">우리팀</th>
                            <th style="text-align:left">적팀</th>
                            <th>더보기</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>랭크</td>
                            <td class="record win"><span>승</span></td>
                            <td class="champion">
                                <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                <span class="name">베인</span>
                            </td>
                            <td>4.50</td>
                            <td>10/10/10</td>
                            <td>50%</td>
                            <td class="detail--info">
                                <span>16</span>
                                <span>14,500</span>
                                <span>164(6.1)</span>
                            </td>
                            <td>30분30초</td>
                            <td>10일전</td>
                            <td class="team--list our">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이</span></a></li>
                                </ul>
                            </td>
                            <td class="team--list enemy">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일</span></a></li>
                                </ul>
                            </td>
                            <td>
                                <i class="material-icons">expand_more</i>
                            </td>
                        </tr>
                        <tr>
                            <td>랭크</td>
                            <td class="record win"><span>승</span></td>
                            <td class="champion">
                                <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                <span class="name">베인</span>
                            </td>
                            <td>4.50</td>
                            <td>10/10/10</td>
                            <td>50%</td>
                            <td class="detail--info">
                                <span>16</span>
                                <span>14,500</span>
                                <span>164(6.1)</span>
                            </td>
                            <td>30분30초</td>
                            <td>10일전</td>
                            <td class="team--list our">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이</span></a></li>
                                </ul>
                            </td>
                            <td class="team--list enemy">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일</span></a></li>
                                </ul>
                            </td>
                            <td>
                                <i class="material-icons">expand_more</i>
                            </td>
                        </tr>
                        <tr>
                            <td>랭크</td>
                            <td class="record win"><span>승</span></td>
                            <td class="champion">
                                <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                <span class="name">베인</span>
                            </td>
                            <td>4.50</td>
                            <td>10/10/10</td>
                            <td>50%</td>
                            <td class="detail--info">
                                <span>16</span>
                                <span>14,500</span>
                                <span>164(6.1)</span>
                            </td>
                            <td>30분30초</td>
                            <td>10일전</td>
                            <td class="team--list our">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이</span></a></li>
                                </ul>
                            </td>
                            <td class="team--list enemy">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일</span></a></li>
                                </ul>
                            </td>
                            <td>
                                <i class="material-icons">expand_more</i>
                            </td>
                        </tr>
                        <tr>
                            <td>랭크</td>
                            <td class="record win"><span>승</span></td>
                            <td class="champion">
                                <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                <span class="name">베인</span>
                            </td>
                            <td>4.50</td>
                            <td>10/10/10</td>
                            <td>50%</td>
                            <td class="detail--info">
                                <span>16</span>
                                <span>14,500</span>
                                <span>164(6.1)</span>
                            </td>
                            <td>30분30초</td>
                            <td>10일전</td>
                            <td class="team--list our">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이</span></a></li>
                                </ul>
                            </td>
                            <td class="team--list enemy">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일</span></a></li>
                                </ul>
                            </td>
                            <td>
                                <i class="material-icons">expand_more</i>
                            </td>
                        </tr>
                        <tr>
                            <td>랭크</td>
                            <td class="record win"><span>승</span></td>
                            <td class="champion">
                                <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                <span class="name">베인</span>
                            </td>
                            <td>4.50</td>
                            <td>10/10/10</td>
                            <td>50%</td>
                            <td class="detail--info">
                                <span>16</span>
                                <span>14,500</span>
                                <span>164(6.1)</span>
                            </td>
                            <td>30분30초</td>
                            <td>10일전</td>
                            <td class="team--list our">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이</span></a></li>
                                </ul>
                            </td>
                            <td class="team--list enemy">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일</span></a></li>
                                </ul>
                            </td>
                            <td>
                                <i class="material-icons">expand_more</i>
                            </td>
                        </tr>
                        <tr>
                            <td>랭크</td>
                            <td class="record win"><span>승</span></td>
                            <td class="champion">
                                <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                <span class="name">베인</span>
                            </td>
                            <td>4.50</td>
                            <td>10/10/10</td>
                            <td>50%</td>
                            <td class="detail--info">
                                <span>16</span>
                                <span>14,500</span>
                                <span>164(6.1)</span>
                            </td>
                            <td>30분30초</td>
                            <td>10일전</td>
                            <td class="team--list our">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이</span></a></li>
                                </ul>
                            </td>
                            <td class="team--list enemy">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일</span></a></li>
                                </ul>
                            </td>
                            <td>
                                <i class="material-icons">expand_more</i>
                            </td>
                        </tr>
                        <tr>
                            <td>랭크</td>
                            <td class="record win"><span>승</span></td>
                            <td class="champion">
                                <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                <span class="name">베인</span>
                            </td>
                            <td>4.50</td>
                            <td>10/10/10</td>
                            <td>50%</td>
                            <td class="detail--info">
                                <span>16</span>
                                <span>14,500</span>
                                <span>164(6.1)</span>
                            </td>
                            <td>30분30초</td>
                            <td>10일전</td>
                            <td class="team--list our">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이</span></a></li>
                                </ul>
                            </td>
                            <td class="team--list enemy">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일</span></a></li>
                                </ul>
                            </td>
                            <td>
                                <i class="material-icons">expand_more</i>
                            </td>
                        </tr>
                        <tr>
                            <td>랭크</td>
                            <td class="record win"><span>승</span></td>
                            <td class="champion">
                                <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                <span class="name">베인</span>
                            </td>
                            <td>4.50</td>
                            <td>10/10/10</td>
                            <td>50%</td>
                            <td class="detail--info">
                                <span>16</span>
                                <span>14,500</span>
                                <span>164(6.1)</span>
                            </td>
                            <td>30분30초</td>
                            <td>10일전</td>
                            <td class="team--list our">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이</span></a></li>
                                </ul>
                            </td>
                            <td class="team--list enemy">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일</span></a></li>
                                </ul>
                            </td>
                            <td>
                                <i class="material-icons">expand_more</i>
                            </td>
                        </tr>
                        <tr>
                            <td>랭크</td>
                            <td class="record win"><span>승</span></td>
                            <td class="champion">
                                <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                <span class="name">베인</span>
                            </td>
                            <td>4.50</td>
                            <td>10/10/10</td>
                            <td>50%</td>
                            <td class="detail--info">
                                <span>16</span>
                                <span>14,500</span>
                                <span>164(6.1)</span>
                            </td>
                            <td>30분30초</td>
                            <td>10일전</td>
                            <td class="team--list our">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이</span></a></li>
                                </ul>
                            </td>
                            <td class="team--list enemy">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일</span></a></li>
                                </ul>
                            </td>
                            <td>
                                <i class="material-icons">expand_more</i>
                            </td>
                        </tr>
                        <tr>
                            <td>랭크</td>
                            <td class="record win"><span>승</span></td>
                            <td class="champion">
                                <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                <span class="name">베인</span>
                            </td>
                            <td>4.50</td>
                            <td>10/10/10</td>
                            <td>50%</td>
                            <td class="detail--info">
                                <span>16</span>
                                <span>14,500</span>
                                <span>164(6.1)</span>
                            </td>
                            <td>30분30초</td>
                            <td>10일전</td>
                            <td class="team--list our">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이</span></a></li>
                                </ul>
                            </td>
                            <td class="team--list enemy">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일</span></a></li>
                                </ul>
                            </td>
                            <td>
                                <i class="material-icons">expand_more</i>
                            </td>
                        </tr>
                        <tr>
                            <td>랭크</td>
                            <td class="record win"><span>승</span></td>
                            <td class="champion">
                                <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                <span class="name">베인</span>
                            </td>
                            <td>4.50</td>
                            <td>10/10/10</td>
                            <td>50%</td>
                            <td class="detail--info">
                                <span>16</span>
                                <span>14,500</span>
                                <span>164(6.1)</span>
                            </td>
                            <td>30분30초</td>
                            <td>10일전</td>
                            <td class="team--list our">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이</span></a></li>
                                </ul>
                            </td>
                            <td class="team--list enemy">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일</span></a></li>
                                </ul>
                            </td>
                            <td>
                                <i class="material-icons">expand_more</i>
                            </td>
                        </tr>
                        <tr>
                            <td>랭크</td>
                            <td class="record win"><span>승</span></td>
                            <td class="champion">
                                <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                <span class="name">베인</span>
                            </td>
                            <td>4.50</td>
                            <td>10/10/10</td>
                            <td>50%</td>
                            <td class="detail--info">
                                <span>16</span>
                                <span>14,500</span>
                                <span>164(6.1)</span>
                            </td>
                            <td>30분30초</td>
                            <td>10일전</td>
                            <td class="team--list our">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이</span></a></li>
                                </ul>
                            </td>
                            <td class="team--list enemy">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일</span></a></li>
                                </ul>
                            </td>
                            <td>
                                <i class="material-icons">expand_more</i>
                            </td>
                        </tr>
                        <tr>
                            <td>랭크</td>
                            <td class="record win"><span>승</span></td>
                            <td class="champion">
                                <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                <span class="name">베인</span>
                            </td>
                            <td>4.50</td>
                            <td>10/10/10</td>
                            <td>50%</td>
                            <td class="detail--info">
                                <span>16</span>
                                <span>14,500</span>
                                <span>164(6.1)</span>
                            </td>
                            <td>30분30초</td>
                            <td>10일전</td>
                            <td class="team--list our">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이</span></a></li>
                                </ul>
                            </td>
                            <td class="team--list enemy">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일</span></a></li>
                                </ul>
                            </td>
                            <td>
                                <i class="material-icons">expand_more</i>
                            </td>
                        </tr>
                        <tr>
                            <td>랭크</td>
                            <td class="record win"><span>승</span></td>
                            <td class="champion">
                                <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                <span class="name">베인</span>
                            </td>
                            <td>4.50</td>
                            <td>10/10/10</td>
                            <td>50%</td>
                            <td class="detail--info">
                                <span>16</span>
                                <span>14,500</span>
                                <span>164(6.1)</span>
                            </td>
                            <td>30분30초</td>
                            <td>10일전</td>
                            <td class="team--list our">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이</span></a></li>
                                </ul>
                            </td>
                            <td class="team--list enemy">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일</span></a></li>
                                </ul>
                            </td>
                            <td>
                                <i class="material-icons">expand_more</i>
                            </td>
                        </tr>
                        <tr>
                            <td>랭크</td>
                            <td class="record win"><span>승</span></td>
                            <td class="champion">
                                <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                <span class="name">베인</span>
                            </td>
                            <td>4.50</td>
                            <td>10/10/10</td>
                            <td>50%</td>
                            <td class="detail--info">
                                <span>16</span>
                                <span>14,500</span>
                                <span>164(6.1)</span>
                            </td>
                            <td>30분30초</td>
                            <td>10일전</td>
                            <td class="team--list our">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이</span></a></li>
                                </ul>
                            </td>
                            <td class="team--list enemy">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일</span></a></li>
                                </ul>
                            </td>
                            <td>
                                <i class="material-icons">expand_more</i>
                            </td>
                        </tr>
                        <tr>
                            <td>랭크</td>
                            <td class="record win"><span>승</span></td>
                            <td class="champion">
                                <span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span>
                                <span class="name">베인</span>
                            </td>
                            <td>4.50</td>
                            <td>10/10/10</td>
                            <td>50%</td>
                            <td class="detail--info">
                                <span>16</span>
                                <span>14,500</span>
                                <span>164(6.1)</span>
                            </td>
                            <td>30분30초</td>
                            <td>10일전</td>
                            <td class="team--list our">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이</span></a></li>
                                </ul>
                            </td>
                            <td class="team--list enemy">
                                <ul>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일까요</span></a></li>
                                    <li><a href="#N"><span class="wrap--img"><img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png" alt=""></span><span class="name">이것은아이디일</span></a></li>
                                </ul>
                            </td>
                            <td>
                                <i class="material-icons">expand_more</i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="bottom--area">
                <button class="btn type--01">더보기</button>
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

    // .player{
    //     background-color:$white;

    //     h2{
    //         padding:2rem;
    //         font-size:1.8rem;
    //         font-weight: 700;
    //         border-bottom:2px solid $grey-lighten-3;
    //     }

    //     .content{
    //         margin-top:1.5rem;
    //     }
    // }

    .score{
        position: relative;
        padding:2rem;
        background-color:$white;

        .top--area{

            &:after{
                @extend %float-clear;
            }

            h2{
                float:left;
                font-size:1.8rem;
                font-weight: 700;
            }

            .menu{
                float:left;
                margin:.3rem 0 0 2rem;

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
                        display: inline-block;
                        position: absolute;
                        top:.1rem;
                        left:0;
                        width:.1rem;
                        height:1.1rem;
                        background-color:$grey-lighten-1;
                    }

                    a{
                        display: inline-block;
                        color:$black;
                        font-size:1.4rem;
                        text-decoration: none;
                    }
                }
            }
        }

        .content{
            margin-top:2rem;

            table{
                width:100%;

                thead{
                    th{
                        padding:1rem 0;
                        font-size:1.2rem;
                        font-weight:700;
                        border-bottom:2px solid #dbdbdb;
                    }
                }

                tbody{
                    tr{
                        &:first-child{
                            td {
                                border-top:0;
                            }
                        }

                        td{
                            text-align:center;
                            vertical-align: middle;
                            padding:.5rem 0;
                            font-size:1.2rem;
                            border-top:1px solid #dbdbdb;

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

                            &.team--list{
                                text-align:left;

                                ul{
                                    li {
                                        margin-top:.2rem;

                                        a{
                                            display: block;
                                            text-decoration: none;
                                            letter-spacing: -.8px;
                                            color:$black;
                                            font-size:1.1rem;

                                            &:after{
                                                @extend %float-clear;
                                            }

                                            .wrap--img{
                                                display: inline-block;
                                                float:left;
                                                width:1.5rem;
                                                height:1.5rem;

                                                img{
                                                    width:1.5rem;
                                                    height:1.5rem;
                                                }
                                            }

                                            .name{
                                                display: inline-block;
                                                float:left;
                                                margin-left:.3rem;

                                                height: 1.5rem;
                                                line-height:1.5rem;


                                                text-overflow:ellipsis;
                                                white-space:nowrap;
                                                word-wrap:normal;
                                                width:70%;
                                                overflow:hidden;
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

        .bottom--area{
            margin-top:2rem;

            .btn{
                width:100%;
            }
        }
    }

    &.mobile{
        float:none;
        width:100%;
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

