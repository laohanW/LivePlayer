<template>
    <stream-page type="entertain"></stream-page>
</template>

<script>
    if(process.env.NODE_ENV === 'development')require('Config')
    import streamPage from './common/streamPage.vue'
    export default {
        components:{streamPage}
    }
</script>
