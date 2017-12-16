<template>
    <div class="wrapper">
        <div v-for="(i,index) in items" :key="index" class="bar-item" @click="tabTo(i,key)">
            <bui-icon :name="i.icon" class="bar-ic iconfont" :class="[pIndexKey == i.key ? 'bar-active' : '']"></bui-icon>
            <text class="bar-txt" :class="[pIndexKey == i.key ? 'bar-active' : '']">{{i.name}}</text>
        </div>
    </div>
</template>
<style scoped>
    .wrapper{
        position:fixed;
        bottom:0;
        left:0;
        right:0;
        height:90px;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-top-width:1px;
        border-top-color:#d9d9d9;
        background-color: #fafafa;
    }
    .bar-item{
        flex:1;
    }
    .bar-txt, .bar-ic{
        color: #666;
        text-align: center;
    }
    .bar-active{
        color:#b4282d;
    }
    .bar-ic{
        padding-top: 14px;
        font-size:38px;
    }
    .bar-txt{
        font-size:22px;
        padding-top:2px;
    }
</style>
<script>
    import buiIcon from 'Eros/bui/components/bui-icon.vue'
    export default {
        props: {
            items: {
                type:Array
            }
        },
        data(){
            return {
                pIndexKey:'home'
            }
        },
        components:{buiIcon},
        methods:{
            tabTo(_key){
                if(this.pIndexKey === _key) return;
                this.pIndexKey =_key;
                this.$emit('tabTo', {
                    status: 'tabTo',
                    data: {
                        key: _key
                    }
                });
            }
        }
    }
</script>
