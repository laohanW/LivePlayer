<template>
    <div class="wrapper">
        <div class="live-stream">

        </div>
        <div class="tab-bar">
            <div v-for="(item,index) in tabs" :key="index" class="bar-item" @click="tabTo(index)">
                <text class="bar-txt" :class="[pIndexKey == index ? 'bar-active' : '']">{{item}}</text>
            </div>
            <div class="tab-bar-subscribe" @click="subscribe">
                <text>订阅</text>
                <text>440825</text>
            </div>
        </div>
        <chat class="tab-content" v-if="pIndexKey == 0"></chat>
        <anchor class="tab-content" v-else-if="pIndexKey == 1"></anchor>
        <ranking class="tab-content" v-else-if="pIndexKey == 2"></ranking>
        <vip class="tab-content" v-else></vip>
    </div>
</template>
<style scoped>
    .wrapper{
        flex-direction: column;
        justify-content: flex-start;
    }
    .live-stream{
        width:750px;
        height:420px;
        background-color: rgba(34, 41, 51, 0.48);
    }
    .tab-bar{
        width:750px;
        height:50px;
        flex-direction: row;
        justify-content: space-between;
        border-top-width:1px;
        border-top-color:#d9d9d9;
        background-color: #fafafa;
    }
    .bar-item{
        flex:1;
    }
    .tab-content {
        flex: 1;

    }
    .tab-bar-subscribe{
        width:140px;
        flex-direction: row;
        background-color: #fa9427;
    }
    .bar-active{
        color:#b4282d;
        border-bottom-color: #b4282d;
        border-style: solid;
        border-bottom-width: 2px;
    }
    .bar-txt{
        text-align: center;
        align-content: center;
        font-size:32px;
        padding-top:2px;
    }
</style>
<script>
    import chat from './chat.vue';
    import ranking from './ranking.vue';
    import vip from './vip.vue';
    import anchor from './anchor.vue';

    export default {
        components: {
            'chat': chat,
            'ranking': ranking,
            'anchor': anchor,
            'vip': vip
        },
        data() {
            return {
                tabs: ['聊天', '主播', '排行', '贵宾'],
                pIndexKey: 0
            }
        },
        methods: {
            tabTo(index) {
                this.pIndexKey = index;
                console.log(this.pIndexKey);
            },
            subscribe() {

            }
        }
    };
</script>
