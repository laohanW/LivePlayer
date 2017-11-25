<template>
    <div class="wrapper">
        <div class="nav">
            <text class="navText">发现</text>
        </div>
        <list class="bui-list"
            showRefresh="true"
            :style="{ height: (1333 - 40) + 'px' }"
            @refresh="onRefresh">
            <cell class="application">
                <div class="application-item">
                    <bui-icon class="application-item-icon" name="icon-search" size="80px"></bui-icon>
                    <text class="application-item-text">活动中心</text>
                </div>
                <div class="application-item">
                    <bui-icon class="application-item-icon" name="icon-search" size="80px"></bui-icon>
                    <text class="application-item-text">x你问资讯</text>
                </div>
                <div class="application-item">
                    <bui-icon class="application-item-icon" name="icon-search" size="80px"></bui-icon>
                    <text class="application-item-text">找应用</text>
                </div>
                <div class="application-item">
                    <bui-icon class="application-item-icon" name="icon-search" size="80px"></bui-icon>
                    <text class="application-item-text">玩游戏</text>
                </div>
            </cell>
            <cell >
                <video-content :title="wonderfullContent.title" :subTitle="wonderfullContent.subTitle" :items="wonderfullContent.contents"></video-content>
            </cell>
            <cell class="recommand-category">
                <bui-icon name="icon-search"></bui-icon>
                <text class="recommand-category-text">兴趣推荐</text>
            </cell>
            <cell class="">

            </cell>
        </list>
    </div>
</template>

<style scoped>
    .wrapper{
        width:750px;
    }
    .nav{
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width:750px;
        height:140px;
    }
    .navText{
        font-size: 40px;
    }
    .application{
        width:750px;
        flex-direction: row;
        justify-content: space-between;
    }
    .application-item{
        flex-direction:column;
        margin:40px;
        padding-left: 5px;
        padding-right:5px;
    }
    .application-item-icon{
        justify-content: flex-start;
    }
    .application-item-text{
        margin-top:18px;
        justify-content: flex-end;
        font-size: 20px;
    }
    .recommand-category{
        flex-direction: row;
    }
    .recommand-category-text{
        font-size: 20px;
    }
</style>

<script>
    import buiIcon from 'Eros/bui/components/bui-icon.vue'
    import videoContent from 'Components/categoryContent/videoContent.vue'
    export default {
        components:{buiIcon,videoContent},
        methods:{
            onRefresh(){

            }
        },
        data(){
            return{
                wonderfullContent:{
                    title:"神镜头",
                    subTitle:"王者荣耀、gaoxiao、更多精彩",
                    contents:[
                        {
                            index:0,
                            image:"//gtd.alicdn.com/imgextra/TB12yGaNVXXXXX7aXXXSutbFXXX.jpg",
                            playCount:12000,
                            commentCount:253,
                            time:160000,
                            description:"心中单英雄米莱迪！技能"
                        },
                        {
                            index:1,
                            image:"//gtd.alicdn.com/imgextra/TB12yGaNVXXXXX7aXXXSutbFXXX.jpg",
                            playCount:12000,
                            commentCount:253,
                            time:160000,
                            description:"心中单英雄米莱迪！技能"
                        }
                    ]
                }
            }
        }
    }
</script>