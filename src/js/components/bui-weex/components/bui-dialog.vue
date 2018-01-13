<template>
    <div :value="value" v-if="visible">
        <bui-mask @click="_maskClick"></bui-mask>
        <div class="bui-dialog" :style="{top:top}">
            <div class="bui-dialog-title">
                <text class="dialog-title-text">{{title}}</text>
            </div>
            <div class="bui-dialog-content" :style="{height:height}">
                <scroller>
                    <slot>
                    </slot>
                </scroller>
            </div>
            <div class="bui-dialog-footer">
                <text class="dialog-action-text" v-for="btn in getButtons" @click="_click(btn)">{{btn}}</text>
            </div>
        </div>
    </div>
</template>

<style lang="sass" src="../css/dialog.scss"></style>
<script>
    module.exports = {
        props: {
            height: {
                type: String,
                default: '200px'
            },
            top: {
                type: String,
                default: '300px'
            },
            title: {
                type: String,
                default: '标题'
            },
            buttons: {
                type: String,
                default: '取消,确定'
            },
            value: {
                type: Boolean,
                default: false
            }
        },
        data() {
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
        computed: {
            getButtons() {
                return this.buttons.split(',');
            }
        },
        methods: {
            _click(text) {
                this.$emit('btnClick', text);
            },
            _maskClick() {
                this.visible = false;
                this.$emit('maskClick');
            }
        }
    };
</script>
