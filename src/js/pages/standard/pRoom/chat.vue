<template>
    <div class="wrapper">
        <list>
            <cell v-for="item in messages">
                <text>{{item}}</text>
            </cell>
        </list>
        <div class="input-bottom">
            <wxc-icon class="badge"  name="scanning" type="medium"  @wxcIconClicked="onBadge"></wxc-icon>
            <wxc-icon class="express"  name="cry" type="medium" @wxcIconClicked="onExpression"></wxc-icon>
            <input type="text" auto-appear="false" placeholder="说点什么吧~" class="input" autofocus=false value="" @change="onchange"/>
            <wxc-icon class="package"  name="filter"  @wxcIconClicked="onExpression"></wxc-icon>
        </div>
    </div>
</template>
<style scoped>
    .wrapper{
        width:750px;
        height:250px;
        flex-direction: column;
        /*justify-content: flex-start;*/
        /*background-color: #4fbcff;*/
    }
    f-green{
        color: #fa9427;
    }
    .input-bottom {
        position: fixed;
        height:80px;
        bottom: 0;
        left: 0;
        right: 0;
        flex-direction: row;
        justify-content: space-between;
        border-style: solid;
        border-top-width: 1px;
        border-color: #80828a;
    }
    .badge{
        align-items: flex-start;
    }
    .express{
        align-items: flex-start;
    }
    .package{
        width:100px;
        align-self: center;
        border-left-width: 1px;
        border-style: solid;
        border-color: #797b83;
    }
    .input {
        flex: 1;
        font-size: 40px;
        height: 80px;
     }
</style>
<script>
    import wxcIcon from 'Components/weex-ui/wxc-icon/index.vue';
    let webSocket = weex.requireModule('bmWebSocket');
    export default {
        components: {
            'wxc-icon': wxcIcon
        },
        data() {
            return {
                messages: ['asdawasd', 'asegggdfghfgh']
            }
        },
        created() {
        },
        mounted() {
            console.log(webSocket);
            webSocket.webSocket('ws://192.168.2.46:4000', 'echo-protocol');
            webSocket.onopen = function (e) {
                console.log('onopen', e);
            };
            webSocket.onmessage(function (a, b, c) {
                console.log(a + '   ' + b + '   ' + c);
            });
            webSocket.onerror = function (e) {
                console.log('onerror', e);
            };
            webSocket.onclose = function (e) {
                console.log('onclose', e);
            };
        },
        destroyed() {
            console.log('destroy');
            webSocket.close();
        },
        methods: {
            onBadge() {
                console.log('onBadge');
            },
            onExpression() {
                console.log('onExpression');
            },
            onchange(x) {
                console.log(x);
                webSocket.send(x.value);
            }
        }
    }
</script>
