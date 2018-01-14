<template>
    <list class="wrapper">
        <cell class="desc">
            <image class="desc-head" src="https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg"></image>
            <div class="desc-content">
                <div class="desc-content-name">
                    <text>安静苦笑大官人</text>
                    <wxc-icon class="report"  name="scanning" type="small"  @wxcIconClicked="onReport"></wxc-icon>
                </div>
                <div class="desc-content-gameCate">
                    <text class="desc-content-gameCate-text">英雄联盟</text>
                </div>
            </div>
            <wxc-button class="desc-guard" text="守护主播" type="highlight"
                        @wxcButtonClicked="wxcButtonClicked"></wxc-button>
        </cell>
        <cell class="cell-border-min"></cell>
        <cell class="notice">
            <text class="notice-title">主播公告</text>
            <text class="notice-descrition">每天晚上7点左右开播</text>
        </cell>
        <cell class="cell-border"></cell>
        <cell class="endorsement" @click="onEndorsement">
            <text class="endorsement-title">带盐团</text>
            <wxc-icon class="endorsement-right"  name="scanning" type="small"></wxc-icon>
        </cell>
        <cell class="cell-border"></cell>
        <cell class="dynamic" @click="onDynamic">
            <text class="dynamic-title">TA的动态</text>
            <text class="dynamic-right">更多</text>
            <wxc-icon class="dynamic-right"  name="scanning" type="small"></wxc-icon>
        </cell>
        <cell class="cell-border"></cell>
        <cell>
            <div class="cell-content" v-for="x in v.categoryContent">
                <div class="category-recom">
                    <text class="category-recom-text">{{x.title}}</text>
                    <text class="category-recom-sub-text">{{x.subTitle}}</text>
                </div>
                <video-content :items="x.contents"></video-content>
            </div>
        </cell>
    </list>
</template>
<style scoped>
    .wrapper{
        width: 750px;
    }
    .cell-border-min{
        height:2px;
        background-color: rgba(46, 47, 51, 0.67);
        width: 750px;
        margin-top: 8px;
        margin-bottom:8px;
    }
    .cell-border{
        height:16px;
        background-color: rgba(145, 146, 150, 0.29);
        width: 750px;
        margin-top: 8px;
        margin-bottom:8px;
    }
    .desc{
        margin-left:16px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .desc-head {
        width: 120px;
        height: 120px;
    }
    .desc-content{
        flex: 1;
        flex-direction: column;
        margin-left:24px;
    }
    .desc-content-name{
        flex-direction: row;
        justify-content: flex-start;
        margin-bottom: 5px;
    }
    .desc-content-gameCate{
        margin-top: 5px;
        flex-direction: row;
        justify-content: flex-start;
    }
    .desc-guard {
        width: 180px;
        height: 70px;
        margin-right: 20px;
        background-color: rgba(255, 255, 255, 0);
        border-color: #EE9900;
        border-width: 1px;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
        /*align-items: flex-end;*/
    }
    .desc-content-gameCate-text{
        height:40px;
        border-color: #443d3a;
        border-width: 1px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    .notice{
        margin-left:16px;
        flex-direction: column;
    }
    .notice-title{
        font-size: 40px;
        margin-top:18px;
        margin-bottom: 8px;
    }
    .notice-descrition{
        font-size:30px;
        margin-top:8px;
        margin-bottom: 18px;
    }
    .endorsement{
        flex-direction: row;
        align-items: center;
    }
    .endorsement-title{
        align-self: flex-start;
    }
    .endorsement-right{
        align-self: flex-end;
    }
    .dynamic{
        flex-direction: row;
        align-items: center;
    }
    .dynamic-title{
        align-self: flex-start;

    }
    .dynamic-right{
        align-self: flex-end;
    }
</style>
<script>
    import WxcButton from 'Components/weex-ui/wxc-button';
    export default {
        components: {WxcButton},
        data() {
            return {

            }
        },
        methods: {
            onReport() {

            },
            onEndorsement() {

            }
        }
    }
</script>
