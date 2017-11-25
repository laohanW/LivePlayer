module.exports = {
    "appName": "eros-template",
    "appBoard": '/config/index.js',
    "version": {
        "android": "1.0.0",
        "iOS": "1.0.0"
    },
    "page": {
        "homePage": "/pages/eros-tests/index.js",
        "mediatorPage": "/mediator/index.js",
        "navBarColor": "#ffffff",
        "navItemColor": "#333"
    },
    "url": {
        "request": "http://app.weex-eros.com",
        "jsServer": "http://app.weex-eros.com",

        "image": "https://lev-inf.benmu-health.com/test/xxx",
        "bundleUpdate": "http://localhosts:3001/app/check"
    },
    "zipFolder": {
        "iOS": "/ios/WeexEros/WeexEros",
        "android": "/android/WeexFrameworkWrapper/app/src/main/assets"
    },
    "getui": {
        "enabled": "false",
        "appId": "",
        "appKey": "",
        "appSecret": ""
    },
    "umeng": {
        "enabled": "false",
        "iOSAppKey": "",
        "androidAppKey": ""
    },
    "wechat": {
        "enabled": "false",
        "appId": "",
        "appSecret": ""
    },
    "amap": {
        "enabled": "true",
        "iOSAppKey": "623c0396a9b879461c971a14baa678fb",
        "androidAppKey": ""
    }
}