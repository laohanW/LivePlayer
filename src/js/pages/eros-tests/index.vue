<template>
    <tabs :tabItems="tabItems"></tabs>
</template>

<style scoped>

</style>

<script>
    import tabs from 'Components/tabs/bar'
    export default{
        components:{tabs},
        data(){
            return{
                tabItems:[
                    {
                        index:0,
                        title:"首页",
                        titleColor:"#ffffff",
                        src:`${weex.config.eros.jsServer}/dist/js/pages/eros-tests/home/index.js`,
                        visibility:"visible"
                    },
                    {
                        index:1,
                        title:"娱乐",
                        titleColor:"#ffffff",
                        src:`${weex.config.eros.jsServer}/dist/js/pages/eros-tests/home/index.js`,
                        visibility:"hidden"
                    },
                    {
                        index:2,
                        title:"发现",
                        titleColor:"#ffffff",
                        src:`${weex.config.eros.jsServer}/dist/js/pages/eros-tests/discover/index.js`,
                        visibility:"hidden"
                    },
                    {
                        index:3,
                        title:"我的",
                        titleColor:"#ffffff",
                        src:`${weex.config.eros.jsServer}/dist/js/pages/eros-tests/home.index.js`,
                        visibility:"hidden"
                    }
                ]
            }
        }

    }
</script>