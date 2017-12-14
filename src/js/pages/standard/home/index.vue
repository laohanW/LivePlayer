<template>
    <div class="wrapper">
        <header :items="items" @itemClick="onItem" @categoryClick="onCategory"></header>
    </div>
</template>
<style scoped>
    .wrapper{

    }
</style>
<script>
    if(process.env.NODE_EVN === 'development') require('Config')
    import header from './header';

    export default {
        components: {
            'header': header
        },
        methods: {
            onItem(result) {

            },
            onCategory(result) {

            }
        },
        created(){
          this.$fetch('',{
              method:'GET',

          })
        },
        data() {
            return {
                items:[]
            }
        }
    };
</script>
