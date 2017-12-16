<template>
    <div class="app-wrapper">
        <embed v-for="(item,index) in items" :src="item.src" type="weex" class="content" :style="{visibility:item.visibility}">
        <tab-bar @tabTo="onTabTo" :items="items"></tab-bar>
    </div>
</template>

<style>
body {
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
}
</style>
<style scoped>
    .iconfont {
        font-family: iconfont;
    }
    .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin-top: 0;
        /*margin-bottom: 100;*/
    }
    .app-wrapper{
        background-color: #f4f4f4;
    }
</style>

<script>
    if (process.env.NODE_ENV === 'development') require('Config')
//    import he from './utils/he';
//    import util from './utils/utils';
    import tabBar from './common/tabBar';
    import {tabConfig} from './config'

//    Vue.filter('iconFilter', function (value) {
//        return he.decode(value);
//    });
    export default {
        components: {
            'tab-bar':tabBar
        },
        created(){
//            util.initIconFont();
        },
        data(){
            return{
                items:tabConfig
            }
        },
        methods:{
            onTabTo(_result){
                let _key=_result.data.key || '';
                this.items.forEach(val => {
                    if (val.key === _key) {
                        val.visibility = 'visible'
                        return
                    }
                    val.visibility = 'hidden'
                });
            }
        }
    }
</script>
