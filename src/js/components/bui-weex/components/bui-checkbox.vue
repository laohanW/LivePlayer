<template>
    <div :class="[changeDirection,'flex-fluid']">
        <div class="radio-box flex-row" :class="[v.disabled ? 'disabled':'']" @click="select(v)" v-for="v in checkboxItems">
            <div v-if="v.select"><bui-icon @click="select(v)" :size="iconSize" name="ion-ios-checkmark" :color="selectedColor"></bui-icon></div>
            <div v-if="!v.select"><bui-icon @click="select(v)" :size="iconSize" name="ion-ios-checkmark-outline" :color="unSelectedColor"></bui-icon></div>
            <text class="radio-label" :style="{'font-size':fontSize}">{{v.title}}</text>
        </div>
    </div>
</template>


<script>
    module.exports = {
        props: {
            "direction": {
                type: String,
                default: 'horizontal' // horizontal | vertical
            },
            "items": {
                type: Array,
                default: []
            },
            "fontSize":{
              type:String,
                default:"32px"
            },
            "iconSize":{
                type:String,
                default:"48px"
            },
            "selectedColor":{
                type: String,
                default:"#00cc66"
            },
            "unSelectedColor":{
                type: String,
                default:"#9ea7b4"
            }
        },
        computed:{
            changeDirection(){
                return this.direction=="horizontal"? "flex-row":"flex-column";
            }
        },
        data () {
            return {
                selectItems: [],
                checkboxItems: []
            }
        },
        methods: {
            select (v) {
                var self = this;
                v.select = !v.select;

                //选择组数据
                var newAry = [];
                self.checkboxItems.forEach(function (val, i) {
                    if(val.select) newAry.push(val);
                });
                this.$emit("change", v, newAry);
            }
        },
        created () {
            this.checkboxItems = JSON.parse(JSON.stringify(this.items));
        }
    }
</script>
<style lang="sass" src="../css/radio.scss"></style>