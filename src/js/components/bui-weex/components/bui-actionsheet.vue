<template>
    <div :value="value" v-if="visible">
        <bui-mask @click="_maskClick"></bui-mask>

        <div class="bui-actionsheet-box" :style="{'bottom': '-'+bottom+'px'}" ref="actionsheetBox">
            <div class="bui-actionsheet-top">
                <text class="bui-actionsheet-title" v-if="title">{{title}}</text>
                <div class="bui-actionsheet-content">
                    <text class="bui-actionsheet-list" v-for="item in items" @click="_itemClick(item)">{{item}}</text>
                </div>
            </div>
            <div class="bui-actionsheet-bottom">
                <text class="bui-actionsheet-btn" @click="_btnClick">{{button}}</text>
            </div>
        </div>
    </div>

</template>

<script>
    var animation = weex.requireModule('animation');
    module.exports = {
        props: {
            title: {
                default: "请选择操作"
            },
            items: {
                type: Array
            },
            button: {
                default: "取消"
            },
            value: {
                type: Boolean,
                default: false
            }
        },
        data(){
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
        mounted(){
            if (this.value) {
                this.visible = true;
            }
        },
        computed: {
            bottom () {
                return (this.items.length + 1) * 100 + 80;
            }
        },
        methods: {
            show(){
                setTimeout(()=>{
                    this._open();
                },50);
            },
            _animationFn: function (translate, fn) {
                var el = this.$refs.actionsheetBox;
                animation.transition(el, {
                    styles: {
                        transform: translate,
                        transformOrigin: 'center center'
                    },
                    duration: 200,
                    timingFunction: "ease-in",
                    delay: 0
                }, () => {
                    fn && fn();
                })
            },
            _open() {
                var translate = 'translate(0px, -' + (this.bottom + 20) + 'px, 0px)';
                this._animationFn(translate)
            },
            _maskClick () {
                var translate = 'translate(0px, ' + (this.bottom + 20) + 'px, 0px)';
                this._animationFn(translate, () => {
                    this.visible = false;
                    this.$emit("maskClick");
                });
            },
            _itemClick(item) {
                var translate = 'translate(0px, ' + (this.bottom + 20) + 'px, 0px)';
                this._animationFn(translate, () => {
                    this.visible = false;
                    this.$emit('itemClick', item);
                });
            },
            _btnClick() {
                var translate = 'translate(0px, ' + (this.bottom + 20) + 'px, 0px)';
                this._animationFn(translate, () => {
                    this.visible = false;
                    this.$emit('cancel');
                });
            }
        }
    }
</script>

<style lang="sass" src="../css/actionsheet.scss"/>