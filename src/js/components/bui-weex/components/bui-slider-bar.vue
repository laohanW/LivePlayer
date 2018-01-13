<template>
    <div :value="value" v-if="visible">
        <bui-mask @click="_maskClick"></bui-mask>
        <div class="bui-slider-bar-box" :style="{'width':width}" :class="['bui-'+type+'-slider-bar-box']" @swipe="_onSwipe($event)"
             ref="navbar">
            <div class="bui-slider-content">
                <scroller>
                    <slot>
                    </slot>
                </scroller>
            </div>
        </div>
    </div>
</template>

<style lang="sass" src="../css/slider-bar.scss"></style>

<script>
    var animation = weex.requireModule('animation');
    module.exports = {
        props: {
            type: {
                type: String,
                default: 'left'
            },
            value: {
                type: Boolean,
                default: false
            },
            width: {
                type: String,
                default: '400px'
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
        methods: {
            _animationFn: function (translate, fn) {
                var el = this.$refs.navbar;
                animation.transition(el, {
                    styles: {
                        transform: translate,
                        transformOrigin: 'center center'
                    },
                    duration: 300,
                    timingFunction: 'ease-in',
                    delay: 0
                }, function () {
                    fn && fn();
                })
            },
            show() {
                setTimeout(() => {
                    this._openBar();
                }, 50);
            },
            _openBar() {
                var translate = '';
                if (this.type === 'right') {
                    translate = 'translate(-600px, 0)';
                } else if (this.type === 'left') {
                    translate = 'translate(600px, 0)';
                }
                this._animationFn(translate);
            },
            _maskClick() {
                var translate = '';
                if (this.type === 'right') {
                    translate = 'translate(600px, 0px)';
                } else if (this.type === 'left') {
                    translate = 'translate(-600px, 0px)';
                }
                this._animationFn(translate, () => {
                    this.visible = false;
                    this.$emit('close');
                });
            },
            _onSwipe(event) {
                switch (this.type) {
                    case 'left':
                        if (event.direction === 'left') {
                            this._maskClick();
                        }
                        break;
                    case 'right':
                        if (event.direction === 'right') {
                            this._maskClick();
                        }
                        break;
                }
            }
        }
    };
</script>
