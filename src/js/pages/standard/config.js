export const tabConfig = [
    {
        icon: 'icon-appreciate',
        name: '首页',
        key: 'home',
        src: `${weex.config.eros.jsServer}/dist/js/pages/standard/pHome/index.js`,
        visibility: 'visible'
    },
    {
        icon: 'icon-appreciate',
        name: '娱乐',
        key: 'entertain',
        src: `${weex.config.eros.jsServer}/dist/js/pages/standard/pEntertain.js`,
        visibility: 'hidden'
    },
    {
        icon: 'icon-appreciate',
        name: '发现',
        key: 'discover',
        src: `${weex.config.eros.jsServer}/dist/js/pages/standard/pDiscover.js`,
        visibility: 'hidden'
    },
    {
        icon: 'icon-appreciate',
        name: '我的',
        key: 'mine',
        src: `${weex.config.eros.jsServer}/dist/js/pages/standard/pMine.js`,
        visibility: 'hidden'
    }
];
