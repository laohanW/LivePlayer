<template>
    <stream-page pageType=0></stream-page>
</template>

<script>
    if (process.env.NODE_ENV === 'development')require('Config')
    import streamPage from '../common/streamPage.vue'

    export default {
        components: {streamPage},
        created() {

        }
    };
</script>
