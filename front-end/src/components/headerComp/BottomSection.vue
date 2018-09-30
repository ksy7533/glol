<template>
    <section class="header__bottom--section">
        <nav class="menu">
            <ul>
                <li class="on">
                    <a href="#n">최근게임정보</a>
                </li>
                <li>
                    <a href="#n">시즌별게임정보</a>
                </li>
                <li>
                    <a href="#n">내가속한리그</a>
                </li>
            </ul>
        </nav>
    </section>    
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header__bottom--section{
    padding:0 2rem;
    background-color:$deep-purple-darken-1;
    box-shadow: 0 1rem 2rem rgba(0,0,0,0.25);

    .menu{
        ul{
            &:after{
                @extend %float-clear;
            }

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

