<template>
    <div>
        <bui-mask v-if="show" @click="_maskClick"></bui-mask>
        <div ref="popupBox"
             v-if="show"
             :height="popupHeight"
             :hack="isNeedShow"
             :class="['bui-popup', pos]"
             :style="popupStyle">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
    .bui-popup {
        position: fixed;
        width: 750px;
    }

    .top {
        left: 0;
        right: 0;
    }

    .bottom {
        left: 0;
        right: 0;
    }

    .left {
        bottom: 0;
        top: 0;
    }

    .right {
        bottom: 0;
        top: 0;
    }

</style>

<script>
    const animation = weex.requireModule('animation');
    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            },
            pos: {
                type: String,
                default: 'bottom'
            },
            backgroundColor: {
                type: String,
                default: '#FFFFFF'
            },
            height: {
                type: [Number, String],
                default: 840
            },
            width: {
                type: [Number, String],
                default: 750
            }
        },
        computed: {
            isNeedShow () {
                setTimeout(()=>{
                    this.appearPopup(this.show);
                },50);
                return this.show;
            },
            popupHeight () {
                this.appearPopup(this.show, 150);
                return this.height;
            },
            popupStyle () {
                const { pos, width, height, backgroundColor } = this;
                let style = {
                    width: `${width}px`,
                    backgroundColor: backgroundColor
                };
                if(pos=="top"){
                    style = Object.assign(style, {
                        top: `${-height}px`,
                        height: `${height}px`
                    });
                }
                if(pos=="bottom"){
                    style = Object.assign(style,{
                        bottom: `${-height}px`,
                        height: `${height}px`
                    })
                }
                if(pos=="left"){
                    style = Object.assign(style,{
                        left: `${-width}px`
                    });
                }
                if(pos=="right"){
                    style =Object.assign(style,{
                        right: `${-width}px`
                    })
                }
                return style;
            }
        },
        methods: {
            _maskClick () {
                this.show=false;
                this.appearPopup(false);
            },
            appearPopup (bool) {
                const popupEl = this.$refs['popupBox'];
                if (!popupEl) {
                    return;
                }
                animation.transition(popupEl, {
                    styles: {
                        transform: this.getTransform(this.pos, this.width, this.height, !bool)
                    },
                    duration:300,
                    delay: 0,
                }, () => {
                    if (!bool) {
                        this.$emit('maskClick', { pos: this.pos });
                    }
                });
            },
            getTransform (pos, width, height, bool) {
                let _size = pos === 'top' || pos === 'bottom' ? height : width;
                let _transform;
                bool && (_size = 0);
                switch (pos) {
                    case 'top':
                        _transform = `translateY(${_size}px)`;
                        break;
                    case 'bottom':
                        _transform = `translateY(-${_size}px)`;
                        break;
                    case 'left':
                        _transform = `translateX(${_size}px)`;
                        break;
                    case 'right':
                        _transform = `translateX(-${_size}px)`;
                        break;
                }
                return _transform;
            }
        }
    }
</script>