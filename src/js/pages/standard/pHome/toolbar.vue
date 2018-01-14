<template>
    <scroller class="toolbar-scroller"
            show-scrollbar=false
            scroll-direction="horizontal"
            flex-direction="row">
        <text class="toolbar-text" :class="[pIndexKey == index ? 'active' : '']" v-for="(x,index) in items" @click="selectedClick(x.key,index)">{{x.name}}</text>
    </scroller>
</template>
<style scoped>
    .toolbar-text {
        padding:8px;
    }
    .toolbar-scroller {
        width:750px;
        height:45px;
        margin-top: 8px;
        margin-bottom: 8px;
        flex-direction:row;
    }
    .active {
        background-color: coral;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius:20px;
    }

</style>
<script>
    export default {
        props: {
            items: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                pIndexKey: 0
            };
        },
        methods: {
            selectedClick(key, index) {
                this.pIndexKey = index;
                this.$emit('selectedClick', {
                    key: key,
                    index: index
                });
            }
        }
    };
</script>
