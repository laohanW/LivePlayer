<template>
    <div :class="[changeDirection,'flex-fluid']">
        <div class="radio-box flex-row" :class="[v.disabled ? 'disabled':'']" v-for="v in radioItems" @click="select(v)">
            <div class="bui-icon-box" v-if="v.select"><bui-icon @click="select(v)"  :size="iconSize" name="ion-android-radio-button-on" :color="selectedColor"></bui-icon></div>
            <div class="bui-icon-box" v-if="!v.select"><bui-icon @click="select(v)"  :size="iconSize" name="ion-android-radio-button-off" :color="unSelectedColor"></bui-icon></div>
            <text class="radio-label" :style="{'font-size':fontSize}">{{v.title}}</text>
        </div>
    </div>
</template>
<style lang="sass" src="../css/radio.scss"></style>

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
            changeDirection () {
                return this.direction=="horizontal"? "flex-row":"flex-column";
            }
        },
        data() {
          return{
              radioItems:[]
          }
        },
        methods: {
            select (v) {
                if(v.disabled) return;
                var self = this;
                self.radioItems.forEach(function (val, index) {
                    val.select = false;
                });
                v.select = true;
                this.$emit("change", v);
            }
        },
        created(){
            this.radioItems=JSON.parse(JSON.stringify(this.items));
        }
    }
</script>
