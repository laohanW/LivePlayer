<template>
    <div class="wrapper">
        <wxc-minibar title="我的"
                    background-color="#ffffff"
                    text-color="#111111"
                    right-text="more">
            <wxc-icon name="cry" slot="left"></wxc-icon>
            <text slot="middle">我的</text>
            <wxc-icon name="clock" slot="right"></wxc-icon>
        </wxc-minibar>
        <list class="content">
            <cell class="cell-border"></cell>
            <cell>
                <wxc-cell :has-arrow="true" :style="{height:'160px;'}" @wxcCellClicked="routeToLogin">
                    <wxc-icon name="cry" type="large" slot="label"></wxc-icon>
                    <div class="cell-info-login" slot="title">
                        <text class="cell-info-login-text">登陆后可查看</text>
                        <wxc-button class="cell-info-login-button" type="yellow" text="立即登录"></wxc-button>
                    </div>
                </wxc-cell>
            </cell>
            <cell>
                <wxc-cell title="我的订阅"
                    :has-arrow="true" >
                    <wxc-icon name="cry" slot="label"></wxc-icon>
                    <text slot="value">登陆后可查看</text>
                </wxc-cell>
                <wxc-cell title="我的粉丝"
                    :has-arrow="true" >
                    <wxc-icon name="cry" slot="label"></wxc-icon>
                    <text slot="value">登陆后可查看</text>
                </wxc-cell>
                <wxc-cell title="我看过的"
                    :has-arrow="true" >
                    <wxc-icon name="cry" slot="label"></wxc-icon>
                </wxc-cell>
            </cell>
            <cell class="cell-border"></cell>
            <cell class="cell-wrapper">
                <div class="cell-wrapper-item" v-for="v in items">
                    <image class="cell-wrapper-item-image" :src="v.image" />
                    <text class="cell-wrapper-item-text">{{v.desc}}</text>
                </div>
            </cell>
        </list>
    </div>
</template>

<style>
    .wrapper{
        padding-top: 40px;
        width:750px;
        flex-direction: column;
    }
    .content{
        width:750px;
        height:1300px;
    }
    .cell-border{
        height:16px;
        background-color: rgba(235, 232, 232, 0.63)
    }
    .cell-info-login{
        flex-direction: column;
        justify-content: flex-start;
    }
    .cell-info-login-text{
        font-size:28px;
        color: rgb(172, 172, 172)
    }
    .cell-info-login-button{
        background-color: rgb(248, 196, 9);
        width:180px;
        height: 35px;
    }
    .cell-wrapper{
        flex-direction: row;
        flex-wrap: wrap;
    }
    .cell-wrapper-item{
        width:187px;
        height:150px;
        flex-direction: column;
        padding:26px;
        justify-content: space-between;
    }
    .cell-wrapper-item-image{
        flex:2;
        margin-left:18px;
        margin-right:18px;
        margin-bottom:8px;
    }
    .cell-wrapper-item-text{
        flex:1;
        font-size:26px;
        align-self: center;
    }
</style>


<script>
    import WxcIcon from 'Components/weex-ui/wxc-icon';
    import WxcMinibar from 'Components/weex-ui/wxc-minibar';
    import WxcCell from 'Components/weex-ui/Wxc-cell';
    import WxcButton from 'Components/weex-ui/Wxc-button';
    export default {
        components: {WxcIcon, WxcMinibar, WxcCell, WxcButton},
        data() {
            return {
                items:[
                    {
                        id: 1,
                        image: '//gtd.alicdn.com/imgextra/TB12yGaNVXXXXX7aXXXSutbFXXX.jpg',
                        desc: '我要充值'
                    },
                    {
                        id: 2,
                        image: '//gtd.alicdn.com/imgextra/TB12yGaNVXXXXX7aXXXSutbFXXX.jpg',
                        desc: '我要充值'
                    },
                    {
                        id: 3,
                        image: '//gtd.alicdn.com/imgextra/TB12yGaNVXXXXX7aXXXSutbFXXX.jpg',
                        desc: '我要充值'
                    },
                    {
                        id: 4,
                        image: '//gtd.alicdn.com/imgextra/TB12yGaNVXXXXX7aXXXSutbFXXX.jpg',
                        desc: '我要充值'
                    },
                    {
                        id: 5,
                        image: '//gtd.alicdn.com/imgextra/TB12yGaNVXXXXX7aXXXSutbFXXX.jpg',
                        desc: '我要充值'
                    },
                    {
                        id: 6,
                        image: '//gtd.alicdn.com/imgextra/TB12yGaNVXXXXX7aXXXSutbFXXX.jpg',
                        desc: '我要充值'
                    }
                ]
            }
        },
        methods:{
            routeToLogin(){
                console.log(weex);
                this.$router.open({
                    name: 'login',
                    type: 'PUSH'
                })
            }
        }
    }
</script>