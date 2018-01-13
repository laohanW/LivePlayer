<template>
    <image v-bind:src="imagePath"
           v-bind:placeholder="placeholderPath"
           v-bind:style="{'border-radius':radius, 'width': width, 'height': height}"
           v-bind:resize="resize"
           @click="_click($event)"
           @load="_load()"></image>
</template>

<script>
    module.exports = {
        computed: {
            imagePath() {
                if (this.src.startsWith('http')) {
                    return this.src;
                }
                return this._getContext() + this.src;
            },
            placeholderPath() {
                if (this.placeholder != '') {
                    if (this.placeholder.startsWith('http')) {
                        return this.placeholder;
                    }
                    return this._getContext() + this.placeholder;
                }
            }
        },
        props: {
            width: {default: '0px'},
            height: {default: '0px'},
            src: {
                type: String
            },
            resize: {
                type: String,
                default: 'stretch'
            },
            placeholder: {
                type: String,
                default: ''
            },
            radius: {
                default: '0px'
            }
        },
        methods: {
            _click(e) {
                this.$emit('click', e);
            },
            _load() {
                this.$emit('load');
            },
            _getContext() {
                var bundleUrl = weex.config.bundleUrl;
                var url = bundleUrl.split('/').slice(0, -1).join('/');
                if (bundleUrl.indexOf('weex.html') > 0) {
                    url += '/dist/';
                }
                return url;
            }
        }
    };
</script>
