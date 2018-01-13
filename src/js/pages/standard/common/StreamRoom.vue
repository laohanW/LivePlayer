<template>
    <div class="wrapper">

    </div>
</template>
<style scoped>

</style>
<script>
    let webSocket = weex.requireModule('bmWebSocket');
    export default {
        props: {

        },
        created() {
            webSocket.webSocket('ws://192.168.2.46:4000/', 'echo-protocol');
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
        }
    }
</script>
