<template>
    <div class='number-input'>
        <bui-icon class="number-control" name="ion-minus" size="35px" @click="minusClicked" :style="controlStyle"></bui-icon>
        <input type="number"  disabled=true v-model="value" :style="inputStyle"/>
        <bui-icon class="number-control" name="ion-plus" size="35px" @click="plusClicked" :style="controlStyle"></bui-icon>
    </div>
</template>

<style>
    .number-input {
        flex-direction: row;
    }
    .number-control {
        background-color: #f5f5f5;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
    }
</style>

<script>
    module.exports = {
        data() {
            return {
            }
        },
        props: {
            value: {
                type: Number,
                default: 1,
            },
            step: {
                type: Number,
                default: 1,
            },
            controlSize: {
                default: 70,
            },
            min:{
                type:Number,
                default:0
            },
            max:{
                type:Number,
                default:100
            }
        },
        computed: {
            inputStyle() {
                const extraWidth = 20;
                const digitWidth = 20;
                return {
                    // TODO: 数字的宽度？
                    width: digitWidth * this.value.toString().length + extraWidth,
                    "margin-left": digitWidth,
                    "margin-right": digitWidth - extraWidth,
                }
            },
            controlStyle() {
                return {
                    width: this.controlSize,
                    height: this.controlSize,
                    "line-height": this.controlSize,
                }
            }
        },
        watch: {
            value(newValue) {
                this.$emit('input', Number(newValue));
                this.$emit("change",this.value);
            }
        },
        methods: {
            minusClicked() {
                if(this.value <= Number(this.min)) return;
                this.value = Number(this.value) - Number(this.step);

            },
            plusClicked() {
                if(this.value >= Number(this.max)) return;
                this.value = Number(this.value) + Number(this.step);
            },
        }
    }
</script>
