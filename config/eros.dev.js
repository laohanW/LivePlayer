// appBoard，mediator 不建议进行修改 如果修改了 也请对应修改
module.exports = {
    'exports': [
        // appBoard 
        'js/config/index.js',
        // mediator
        'js/mediator/index.vue',
        // home
        'js/pages/standard/index.vue',
        'js/pages/standard/pHome/index.vue',
        'js/pages/standard/pDiscover.vue',
        'js/pages/standard/pEntertain.vue',
        'js/pages/standard/pMine.vue',

        'js/pages/standard/pRoom/index.vue',
        'js/pages/standard/pLogin/index.vue'
        // 'js/pages/eros-demos/index.vue',
        //
        // 'js/pages/eros-demos/tab1/tab-page/index.vue',
        // 'js/pages/eros-demos/tab2/index.vue',
        // 'js/pages/eros-demos/tab3/index.vue',
        //
        // 'js/pages/eros-demos/tab2/router.vue',
        // 'js/pages/eros-demos/tab2/amap.vue',
        // 'js/pages/eros-demos/tab2/iconfont.vue',
        //
        // 'js/pages/eros-demos/tab3/demo/index.vue',
        // 'js/pages/eros-demos/tab3/waterfall.vue'
    ],
    'alias': {
        'Components': 'js/components',
        'Common': 'js/common',
        'Config': 'js/config',
        'Widget': 'js/widget',
        'Pages': 'js/pages',
        'Utils': 'js/utils'
    },
    'eslint': true,
    'diff': {
        'pwd': '/Users/yangmingzhe/Work/opensource/eros-diff-folder',
        'proxy': 'https://app.weex-eros.com/source'
    },
    'server': {
        'path': './',
        'port': 8889
    },
    'mockServer': {
        'port': 52077,
        'mockDir': './dist/mock'
    }
};
