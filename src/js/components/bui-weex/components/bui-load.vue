<template>
    <div :value="value" v-if="visible">
        <bui-mask @click="_maskClick"></bui-mask>
        <div class="load-block">
            <bui-icon name="ion-load-b" class="load-icon"></bui-icon>
            <text class="load-text">{{message}}</text>
        </div>
    </div>
</template>

<script>
//    var animation = weex.requireModule('animation');
    module.exports = {
        props: {
            message: {
                type: String,
                default: '加载中...'
            },
            value: {
                type: Boolean,
                default: false
            }
        },
        data: function () {
            return {
                visible: false
            }
        },
        watch: {
            value(val) {
                this.visible = val;
            },
            visible(val) {
                this.$emit('input', val);
            }
        },
        mounted() {
            if (this.value) {
                this.visible = true;
            }
        },
        methods: {
            _maskClick() {
                this.visible = false;
                this.$emit('maskClick');
            }
        }
    };
</script>

<style lang="sass" src="../css/loading.scss"></style>
