<template>
    <wxc-tab-page class="list-wrapper"
                  ref="wxc-tab-page"
                  :tab-titles="tabTitles"
                  :tab-styles="tabStyles"
                  title-type="text"
                  :needSlider="true"
                  :is-tab-view="true"
                  :tab-page-height="tabPageHeight"
                  :spm-c="4307989"
                  @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
        <list v-for="(v,index) in tabContents"
              :ref="'list_'+index"
              class="item-container"
              showRefresh="true"
              :style="{ height: (1333 - tabStyles.height) + 'px' }"
              @refresh="onRefresh(index)">
            <cell class="cell-border" >
            </cell>
            <cell class="cell-search">
                <a class="searchbar">
                    <text class="searchbar-text">搜索明星大神/网络游戏</text>
                </a>
            </cell>
            <cell class="cell-eqSlider">
                <bui-image-slider :items="v.bannerItems" :sliderStyle="{width:'750px',height:'250px'}"></bui-image-slider>
            </cell>
            <cell class="cell-border"></cell>
            <cell  v-if="index === 0">
                <div class="cell-content" v-for="x in v.categoryContent">
                    <div class="category-recom">
                        <text class="category-recom-text">{{x.title}}</text>
                        <text class="category-recom-sub-text">{{x.subTitle}}</text>
                    </div>
                    <stream-content :items="x.contents"></stream-content>
                </div>
            </cell>
            <cell class="cell-content" v-else>
                <tool-bar :items="v.list" @selectedClick="onSelectedChildCategory"></tool-bar>
                <stream-content :items="v.content"></stream-content>
            </cell>
        </list>
    </wxc-tab-page>
</template>

<style scoped>
    .list-wrapper{

    }
    .item-container{

    }
    .category-recom {
        margin-top: 20px;
        padding-left: 24px;
        width: 750px;
        flex-direction: row;
        justify-content: space-between;
    }
    .category-recom-text {
        color: #000;
        font-weight: 600;
        font-size: 28px;
        align-self: flex-start;
    }
    .category-recom-sub-text{
        color: rgba(0, 0, 0, 0.48);
        font-weight: 600;
        font-size: 28px;
        align-self: flex-end;
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
    import {WxcTabPage} from 'Eros/weex-ui'
    import buiImageSlider from 'Eros/bui/components/bui-image-slider.vue'
    import streamContent from './streamContent.vue'
    import buiIcon from 'Eros/bui/components/bui-icon.vue'
    import toolBar from './toolbar.vue'

    export default {
        props:{
            pageType:{
                type:Number
            }
        },
        components:{WxcTabPage,buiImageSlider,streamContent,buiIcon,toolBar},
        created(){
            this.$fetch({
                method: 'POST',
                name: 'other.categoryRecomList',
                data: {
                    type: this.pageType
                }
            }).then(resData => {
                let list = resData.data.list;
                let recomContent = resData.data.content;
                let recomBanner = resData.data.bannerItems;
                this.tabTitles.unshift(
                    {
                        title: '推荐',
                        activeIcon: 'https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png',
                    });
                list.forEach(el => {
                    this.tabTitles.push({
                        title: el.name,
                        activeIcon: 'https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png',
                        categoryId: el.categoryId
                    });
                });
                this.tabContents = new Array(this.tabTitles.length)
                for (let i = 0; i < this.tabContents.length; i++) {
                    if (i === 0) {
                        let recom = {
                            bannerItems: recomBanner,
                            categoryContent: recomContent
                        };
                        this.$set(this.tabContents, 0, recom)
                    } else {
                        let cont = {
                            list: [],
                            bannerItems: [],
                            content: []
                        };
                        this.$set(this.tabContents, i, cont)
                    }
                }
            }, error => {
                console.log(error)
            });
        },
        methods:{
            wxcTabPageCurrentTabSelected(e){
                this.currentSelectedPage = e.page;
                if(e.page === 0)
                {
                    this.selectRecommendPage();
                } else {
                    this.selectTabPage(e.page)
                }
            },
            onRefresh(index)
            {
                if (index === 0) {
                    this.selectRecommendPage();
                } else {
                    this.selectTabPage(index);
                }
            },
            selectRecommendPage(){
                this.$fetch({
                    method: 'POST',
                    name: 'liveStream.categoryRecomContent',
                    data: {
                        type: this.pageType
                    }
                }).then(resData => {
                    let recom= {
                        bannerItems: resData.data.bannerItems,
                        categoryContent: resData.data.content
                    };
                    this.$set(this.tabContents,0,recom)
                }, error => {
                    console.log(error);
                });
            },
            selectTabPage(page){
                let categoryId = this.tabTitles[page].categoryId;
                this.$fetch({
                    method:'POST',
                    name:'other.childCategoryRecomList',
                    data:{
                        categoryId:categoryId
                    }
                }).then(resData=>{
                    let list = [];
                    resData.data.list.forEach(val => {
                        list.push({
                            name:val.name,
                            key:val.childCategoryId
                        })
                    });
                    list.unshift({
                        name: '全部',
                        key: categoryId
                    });
                    let data = {
                        bannerItems: resData.data.bannerItems,
                        list: list,
                        content: resData.data.content
                    };
                    this.$set(this.tabContents,page, data);
                },error=>{
                    console.log(error);
                })
            },
            onSelectedChildCategory({key,index}){
                console.log(key)
                if (index === 0) {
                    this.$fetch({
                        method: 'POST',
                        name: 'liveStream.childCategoryRecomContent',
                        data: {
                            categoryId: key
                        }
                    }).then(resData => {
                        this.tabContents[this.currentSelectedPage].content.length = 0;
                        resData.data.forEach(val => {
                            this.tabContents[this.currentSelectedPage].content.push(val);
                        });
                    }, error => {
                        console.log(error);
                    });
                } else {
                    this.$fetch({
                        method: 'POST',
                        name: 'liveStream.list',
                        data: {
                            childCategoryId: key
                        }
                    }).then(resData => {
                        this.tabContents[this.currentSelectedPage].content.length = 0;
                        resData.data.forEach(val=>{
                            this.tabContents[this.currentSelectedPage].content.push(val);
                        })
                    }, error => {
                        console.log(error);
                    });
                }
            }
        },
        data(){
            return{
                currentSelectedPage:0,
                btnSearchStyle:{
                    borderColor:"#2e2f33",
                    borderBottomLeft:"40px",
                    borderBottomRight:"40px"
                },
                textSearchStyle:{
                    fontSize:20
                },
                tabPageHeight:1333,
                tabContents:[],
                tabTitles:[],
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
