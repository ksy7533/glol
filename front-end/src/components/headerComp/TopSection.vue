<template>
    <section class="header-top-section" :class="$mq">
        <div class="left-area">
            <h1>
                <a href="#n">
                    <i class="material-icons">assessment</i>
                    <span>GLOL</span>
                </a>
            </h1>
            <nav class="menu">
                <ul>
                    <li class="on">
                        <a href="#n">소환사정보</a>
                    </li>
                    <li>
                        <a href="#n">통계</a>
                    </li>
                    <li>
                        <a href="#n">랭킹</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="right-area">
            <div class="search">
                <i class="material-icons">search</i>
                <input type="text" placeholder="소환사명 입력">
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.header-top-section{
    @extend %float-clear;
    position: relative;
    padding:1rem 2rem;
    background-color:$deep-purple;

    .left-area{
        @extend %float-clear;
        float:left;

        h1{
            float:left;
            margin-top:1rem;

            a{
                display: inline-block;
                position: relative;
                padding-left:2.7rem;
                text-decoration:none;

                i{
                    position:absolute;
                    top:0;
                    left:0;
                    color:$white;
                }

                span{
                    display: inline-block;
                    margin-top:.4rem;
                    color:$white;
                    font-size:2.2rem;
                    font-weight: 700;
                    font-family:'NanumSquare ExtraBold';
                    text-shadow: 2px 2px rgba(0,0,0,0.25);
                }
            }
        }

        .menu{
            float:left;
            position: relative;
            margin:1.5rem 0 0 2rem;
            padding-left:2rem;

            &:before{
                content:'';
                display:block;
                position:absolute;
                top:0;
                left:0;
                width:.1rem;
                height:1.6rem;
                background-color:$white;
            }

            ul{
                @extend %float-clear;

                li{
                    float:left;
                    margin-left:1.5rem;

                    &:first-child{
                        margin-left:0;
                    }

                    a{
                        display: inline-block;
                        color:$grey-lighten-3;
                        font-size:1.6rem;
                        text-decoration:none;
                    }

                    &.on{
                        a{
                            color:$white;
                            font-weight:700;
                        }
                    }
                }
            }
        }
    }

    .right-area{
        @extend %float-clear;
        float:right;
        
        .search{
            float:right;
            position: relative;

            i{
                z-index:10;
                position: absolute;
                top:1rem;
                left:1rem;
                color:$white;
            }

            input{
                display:inline-block;
                box-sizing: border-box;
                padding:2rem 1rem 2rem 4.5rem;
                width:23rem;
                height:1.8rem;
                line-height:1.8rem;
                color:$white;
                font-size:1.6rem;
                outline:none;
                border:none;
                border-radius:0.2rem;
                opacity: .8;
                background-color:$deep-purple-lighten-1;
                box-shadow: 0 .1rem .2rem rgba(0,0,0,0.25);
                transition: all .2s;

                &::placeholder {
                    color: $white;
                }
                &:-ms-input-placeholder {
                    color: $white;
                }
                &::-ms-input-placeholder {
                    color: $white;
                }

                &:focus{
                    width:40rem;
                    color:$black;
                    box-shadow: 0 1rem 2rem rgba(0,0,0,0.25);
                    background-color:$white;

                    &::placeholder {
                        color: $grey-lighten-1;
                    }
                    &:-ms-input-placeholder {
                        color: $grey-lighten-1;
                    }
                    &::-ms-input-placeholder {
                        color: $grey-lighten-1;
                    }
                }
            }
        }
    }

    /* mobile */
    &.mobile{
        .left-area{
            float:none;

            .menu{
                float:right;
                margin-left:1rem;

                &:before{
                    display:none;
                }
            }
        }

        .right-area{
            float:none;
            margin-top:1rem;

            .search{
                float:none;

                input{
                    width:100%;

                    &:focus{
                        width:100%;
                    }
                }
            }
        }
    }
}
</style>

