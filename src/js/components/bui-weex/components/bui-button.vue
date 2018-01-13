<template>
    <div class="btn-block"
         :style="exBtnStyle"
         @longpress="_longPress"
         @click="_click">
        <slot></slot>
        <text class="btn-text" :style="exTextStyle" v-if="value!=''" :value="value"></text>
    </div>
</template>

<style>
    .btn-block {
        width: 700px;
        height: 88px;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        flex-direction: row;
    }

    .btn-text {
        text-overflow: ellipsis;
        lines: 1;
        font-size: 36px;
        color: #FFFFFF;
    }
</style>

<script>
    const STYLE_MAP = {
        default: {
            backgroundColor: '#FFFFFF',
            borderColor: '#A5A5A5',
            borderWidth: '1px'
        },
        text:{
            borderWidth:'0px'
        },
        highlight: {
            backgroundColor: '#FFFFFF',
            borderColor: '#EE9900',
            borderWidth: '1px'
        },
        primary: {
            backgroundColor: '#3399ff'
        },
        success: {
            backgroundColor: '#00cc66'
        },
        warning: {
            backgroundColor: '#ff9900'
        },
        danger: {
            backgroundColor: '#ff4e24'
        }
    };

    const TEXT_STYLE_MAP = {
        default: {
            color: '#3D3D3D'
        },
        text:{
            color: '#3D3D3D'
        },
        highlight: {
            color: '#EE9900'
        },
        primary: {
            color: '#ffffff'
        },
        success: {
            color: '#ffffff'
        },
        warning: {
            color: '#ffffff'
        },
        danger: {
            color: '#ffffff'
        }
    };

    module.exports = {
        props: {
            value: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'default'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            btnStyle: Object,
            textStyle: Object
        },
        computed: {
            exBtnStyle() {
                const {type, disabled, btnStyle} = this;
                const exBtnStyle = Object.assign(STYLE_MAP[type], btnStyle);
                return disabled ? Object.assign(exBtnStyle, {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    borderWidth: 0
                }) : exBtnStyle;
            },
            exTextStyle() {
                const {type, disabled, textStyle} = this;
                const exTextStyle = Object.assign(TEXT_STYLE_MAP[type], textStyle);
                return disabled ? Object.assign(exTextStyle, {color: '#ffffff'}) : exTextStyle;
            }
        },
        methods: {
            _click(e) {
                if (!this.disabled) this.$emit('click', e)
            },
            _longPress(e) {
                if (!this.disabled) this.$emit('longpress', e)
            }
        }
    };
</script>

