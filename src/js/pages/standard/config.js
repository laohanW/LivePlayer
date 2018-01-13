export const tabConfig = [
    {
        icon: 'icon-appreciate',
        name: '首页',
        key: 'home',
        src: `${weex.config.eros.jsServer}/dist/js/pages/standard/home/index.js`,
        visibility: 'visible'
    },
    {
        icon: 'icon-appreciate',
        name: '娱乐',
        key: 'entertain',
        src: `${weex.config.eros.jsServer}/dist/js/pages/standard/entertain/index.js`,
        visibility: 'hidden'
    },
    {
        icon: 'icon-appreciate',
        name: '发现',
        key: 'discover',
        src: `${weex.config.eros.jsServer}/dist/js/pages/standard/discover/index.js`,
        visibility: 'hidden'
    },
    {
        icon: 'icon-appreciate',
        name: '我的',
        key: 'mine',
        src: `${weex.config.eros.jsServer}/dist/js/pages/standard/mine/index.js`,
        visibility: 'hidden'
    }
];
