<template>
    <div class="wrapper">
        <div class="nav">
            <text class="navText">发现</text>
        </div>
        <list
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
                <video-content :title="discovers.wonderfulls.title" :subTitle="discovers.wonderfulls.subTitle" :items="discovers.wonderfulls.contents"></video-content>
            </cell>
            <cell class="recommand-category">
                <bui-icon name="icon-search"></bui-icon>
                <text class="recommand-category-text">{{discovers.recommands.title}}</text>
            </cell>
            <cell class="recommand-item" v-for="v in discovers.recommands.contents">
                <div class="recommand-item-preview">
                    <image class="application-item-preview-image" :src="v.image"></image>
                    <div class="recommand-item-preview-empty"></div>
                    <text class="application-item-preview-count">{{v.count}}</text>
                </div>
                <div class="recommand-item-detail">
                    <text class="recommand-item-detail-description">{{v.description}}</text>
                    <text class="recommand-item-detail-userName">{{v.userName}}</text>
                    <text class="recommand-item-detail-gameName">{[v.gameName}}</text>
                </div>
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
        height:100px;
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
    .recommand-item {
        flex-direction: row;
        margin:8px;
    }
    .recommand-item-preview{
        flex-direction: column;
        width:300px;
        height:200px;
    }
    .application-item-preview-image{
        position: absolute;
        width: 300px;
        height:200px;
        padding:10px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius:20px;
        border-top-left-radius: 20px;
        border-top-right-radius:20px;
    }
    .recommand-item-preview-empty{
        justify-content: flex-start;
    }
    .application-item-preview-count{
        color: rgba(255, 255, 255, 1);
        align-items: flex-end;
        align-self:flex-end;
    }
    .recommand-item-detail{
        flex-direction: column;
        width:450px;
        height:200px;
    }
    .recommand-item-detail-description{
        font-size:30px;
    }
    .recommand-item-detail-userName{
        font-size:20px;
    }
    .recommand-item-detail-gameName{
        font-size:20px;
    }
</style>

<script>
    if(process.env.NODE_ENV === 'development')require('Config')
    import buiIcon from 'Eros/bui/components/bui-icon.vue'
    import videoContent from 'Components/categoryContent/videoContent.vue'
    export default {
        components:{buiIcon,videoContent},
        created(){
          this.$fetch({
              name:"discover"
          }).then(resData=>{
              this.discovers=resData.data
          },error=>{

          })
        },
        methods:{
            onRefresh(){

            }
        },
        data(){
            return{
                discovers:{
                    wonderfulls:{
                        title:"",
                        subTitle:"",
                        contents:[
                            {
                                index:0,
                                image:"",
                                playCount:0,
                                commentCount:0,
                                time:0,
                                description:""
                            }
                        ]
                    },
                    recommands:
                    {
                        title:"",
                        contents:[
                            {
                                image:"",
                                count:111,
                                description:"",
                                userName:"",
                                gameName:""
                            }
                        ]
                    }
                }
            }
        }
    }
</script>