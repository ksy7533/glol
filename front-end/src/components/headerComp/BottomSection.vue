<template>
    <section class="header-bottom-section">
        <nav class="menu">
            <ul>
                <router-link to="/summoner/score" tag="li"><a>최근게임정보</a></router-link>
                <router-link to="/summoner/champion" tag="li"><a>챔피언정보</a></router-link>
                <router-link to="/summoner/league" tag="li"><a>내가속한리그</a></router-link>
            </ul>
        </nav>
    </section>    
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header-bottom-section{
    padding:0 2rem;
    background-color:$deep-purple-darken-1;
    box-shadow: 0 1rem 2rem rgba(0,0,0,0.25);

    .menu{
        ul{
            @extend %float-clear;

            li{
                float:left;
                margin-left:1.5rem;

                a{
                    display: inline-block;
                    position: relative;
                    padding:1.5rem .5rem;
                    color:$white;
                    font-size:1.4rem;
                    text-decoration: none;
                    opacity: .6;
                    transition: all .2s;

                    &:after{
                        content:'';
                        display: inline-block;
                        position: absolute;
                        bottom:0;
                        left:0;
                        width:0;
                        height:3px;
                        background-color:$white;
                        transition: all .2s;
                    }

                    &:hover{
                        font-weight:700;
                        opacity:1;

                        &:after{
                            width:100%;
                        }
                    }
                }

                &:first-child{
                    margin-left:0;
                }

                &.on{
                    a{
                        font-weight:700;
                        opacity:1;

                        &:after{
                            width:100%;
                        }
                    }
                }
            }
        }
    }
}
</style>

