<template>
    <wxc-tab-page class="list-wrapper"
                  ref="wxc-tab-page"
                  :tab-titles="tabTitles"
                  :tab-styles="tabStyles"
                  title-type="text"
                  :needSlider="needSlider"
                  :is-tab-view="isTabView"
                  :tab-page-height="tabPageHeight"
                  :spm-c="4307989"
                  @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
        <list v-for="(v,index) in tabContents"
              :ref="'list_'+index"
              class="item-container"
              showRefresh="true"
              :style="{ height: (1333 - tabStyles.height) + 'px' }"
              @refresh="onRefresh(index)">
            <cells class="cell-border" >
            </cells>
            <cell class="cell-search">
                <a class="searchbar">
                    <text class="searchbar-text">搜索明星大神/网络游戏</text>
                </a>
            </cell>
            <cell class="cell-eqSlider">
                <bui-image-slider :items="v.bannerItems" :sliderStyle="{width:'750px',height:'250px'}"></bui-image-slider>
            </cell>
            <cell class="cell-border"></cell>
            <cell v-if="index === 0">

            </cell>
            <cell class="cell-content" v-for="x in v.categoryContent" v-else>
                <stream-content :title="x.title" :subTitle="x.subTitle" :items="x.contents"></stream-content>
            </cell>
        </list>
    </wxc-tab-page>
</template>

<style scoped>
    .list-wrapper{

    }
    .item-container{

    }
    .cell-border{
        background-color: #f2f3f4;
        width: 750px;
        height: 24px;
        align-items: center;
        justify-content: center;
        border-bottom-width: 1px;
        border-style: solid;
        border-color: #e0e0e0;
    }
    .cell-eqSlider{

    }
    .cell-search{
        width:750px;
        justify-items: center;
        align-items: center;
        height:60px;
    }
    .searchbar{
        background-color: #ffffff;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        border-bottom-style: solid;
        border-top-style: solid;
        padding-left: 20px;
        padding-right: 20px;
        width:700px;
        align-items: center;
    }
    .searchbar-text{
        padding:8px;
        font-size: 22px;
        color: rgba(29, 14, 1, 0.67);
    }
    .cell-content{
        width:750px;
    }
</style>

<script>
    if(process.env.NODE_ENV === 'development')require('Config')
    import {WxcTabPage} from 'Eros/weex-ui'
    import buiImageSlider from 'Eros/bui/components/bui-image-slider.vue'
    import streamContent from './common/streamContent.vue'
    import buiIcon from 'Eros/bui/components/bui-icon.vue'
    export default {
        props:{
            pageType:{
                type:Number
            }
        },
        components:{WxcTabPage,buiImageSlider,streamContent,buiIcon},
        created(){
            this.$fetch({
                method:'POST',
                name:'category.recomList',
                data:{
                    type:pageType
                }
            }).then(resData=>{
                console.log(resData.data)
                this.tabTitles=resData.data
                this.tabContents=new Array(this.tabTitles.length)
                for(let i=0;i<this.tabTitles.length;i++)
                {
                    this.tabContents[i]={
                        categoryId:this.tabTitles[i].categoryId,
                        bannerItems:[],
                        categoryContent:[]
                    }
                }
                console.log(this.tabContents)
                this.selectRecommendPage();
            },error=>{
                console.log(error)
            })
        },
        methods:{
            wxcTabPageCurrentTabSelected(e){
                console.log(e)
                this.selectedTab=e.page
                if(this.selectedTab === 0)
                {
                    this.selectRecommendPage();
                } else {
                    this.selectTabPage(this.tabContents[e.page].categoryId)
                }
            },
            onRefresh(index)
            {

            },
            selectRecommendPage(){

            },
            selectTabPage(categoryId){
                this.$fetch({
                    name:'showTab'+categoryId
                }).then(resData=>{
                    this.tabContents=this.tabContents.map((val,index)=>{
                        if(val.categoryId===resData.data.categoryId) {
                            return resData.data
                        }
                        return val
                    })
                },error=>{

                })
            }
        },
        data(){
            return{
                selectedTab:0,
                btnSearchStyle:{
                    borderColor:"#2e2f33",
                    borderBottomLeft:"40px",
                    borderBottomRight:"40px"
                },
                textSearchStyle:{
                    fontSize:20
                },
                needSlider:true,
                isTabView:true,
                tabPageHeight:1333,
                tabList:[0,1,2,3,4,5,6,7,8],
                tabContents:[
                    {
                        categoryId:"01",
                        bannerItems:[],
                        categoryContent:[]
                    }
                ],
                tabTitles:[
                    {
                        title: '',
                        activeIcon: '',
                        categoryId: "01"
                    }
                ],
                tabStyles:{
                    bgColor: '#FFFFFF',
                    titleColor: '#666666',
                    activeTitleColor: '#3D3D3D',
                    activeBgColor: '#FFFFFF',
                    isActiveTitleBold: true,
                    iconWidth: 70,
                    iconHeight: 70,
                    width: 160,
                    height: 120,
                    fontSize: 24,
                    hasActiveBottom: true,
                    activeBottomColor: '#FFC900',
                    activeBottomHeight: 6,
                    activeBottomWidth: 120,
                    textPaddingLeft: 10,
                    textPaddingRight: 10
                }
            }
        }
    }
</script>
