<template>
    <div class="wrapper">
        <scroller class="box" scroll-direction="horizontal" flex-direction="row" show-scrollbar="false">
            <text class="item" v-for="(i,index) in items" @click="itemClick(index)" :class="[pIndexKey==key?'active':'']"></text>
        </scroller>
        <text class="category" @click="categoryClick">&#xe70a;</text>
    </div>
</template>
<style scoped>
    .iconfont{
        font-family:iconfont;
    }
    .wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 114px;
        padding-top: 44px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        z-index: 101;
        background-color: #fafafa;
        opacity: .99;
    }
    .item{

    }
    .box {
        width: 726px;
    }
    .category{
        width: 24px;
    }
    .active{
        color:#b4282d;
    }
</style>
<script>
    export default {
        props:{
          item:{
              type:Array
          }
        },
        data(){
            return {
                pIndexKey: 0
            };
        },
        methods:{
            categoryClick(){
                this.$emit('categoryClick', {});
            },
            itemClick(_key){
                this.$emit('itemClick', {
                    key: _key
                });
            }
        }
    }
</script>
