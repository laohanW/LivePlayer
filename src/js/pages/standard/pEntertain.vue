<template>
    <stream-page pageType=1></stream-page>
</template>

<script>
    if (process.env.NODE_ENV === 'development')require('Config')
    import streamPage from './pHome/streamPage.vue'

    export default {
        components: {streamPage}
    };
</script>
