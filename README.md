## Intro
eros 是基于 [weex](https://weex-project.io/cn/) 封装面向前端的 vue 写法的解决方案，由于 app 开发的特殊性，eros 则更偏重关心于整个 app 项目。
## Advantage
* 详细的文档来解决环境搭建过程中的坑。
* 一套代码编译成 ios，android 两端原生应用。
* 封装了大量 weex module，让前端开发方便进行原生的操作。
* 可以通过 `appboard` 机制来减少多页面项目中的代码冗余，减少包体积，并可以对其实时修改。
* 内置了一套完整的 JS 二次封装 module (widget) ，直接通过 vue 插件系统注入，直接在 `this` 上调用，可根据业务自行修改。
* 内置了中介者服务，来进行多个页面间的交互，并可以管理业务。
* 内置了服务器端增量发布更新逻辑，可以搭配着开源的简易增量发布系统一起使用。
* 支持真机和模拟器通过 `weex debug` 来断点调试，程序报错均会有报错日志弹窗提示。
* 可以通过脚手架：
    * 直接生成开发最新模板。
    * 启动服务进行实时开发效果查看和 debug 调试。
    * 更新开发平台所需 eros 依赖。
    * 直接 `pack` 对应平台内置 `JS Bundle`。
    * 支持生成全量包，增量包，并内置与更新服务器交互逻辑。
    * 支持同步更新模板内容。
    * 支持 weex 的 vue 入口和 js 入口两种开发方式。
* 支持市面上流行的组件库：
    * [weex-ui](https://github.com/alibaba/weex-ui) ( 阿里出品，推荐使用 )
    * [bui](https://github.com/bingo-oss/bui-weex)

## Disadvantage
> eros 开发中也有很多限制，需要开发者自行斟酌。
* weex 代码在浏览器端还有很多兼容性问题，所有 eros 目前不支持浏览器端
* eros 暂时不能自动使用 weex 市场，但如果您有原生开发经验可以自行接入。
* 由于 eros 对 **JS Bundle** 运行机制采用了 appboard 机制来减少了 js bundle 的大小，导致 weex debug 需要特定的处理。
* eros 打出来的包体积稍大，为解决这个问题，eros 客户端依赖可配置正在开发中。
* 如果遇到复杂的页面，如 IM 之类的，eros 建议用原生实现，weex 应付此类需求还是比较吃力。

## Principle

![工作原理](http://on-img.com/chart_image/59c5d743e4b0d34a18d69580.png)
[大图地址](http://on-img.com/chart_image/59c5d743e4b0d34a18d69580.png)

## Situation
目前 `eros` 已有数十个 app 在开发中和上线的状态，其中有正在开发中的国外应用 **starLife（100+页面）**，也有国内正在开发的**蜂觅（60+ 页面）**，还有**已上线的应用都在 0-50+ 页面不等**，涉及行业分布于资讯，医疗，招商，购物，政府，办公等等。

而本木医疗（京医通）技术团队本身也基于 weex 开发了三个已上线的 app，均可在苹果商店和应用宝下载：
* 健康首都（京医通 app版，100+页面，很多功能还未开放）
* 本木医疗助手（30+页面）
* 本木医生助理（20+页面）

所以开发者大可放心，这不是一个 KPI 项目（公司没有 KPI ），已基于 MIT 协议开源。
## Docs
* [eros 文档地址](https://github.com/bmfe/eros-template/wiki/eros) (持续更新中...)
## Required
开发之前您需要学习 weex 知识，并且能熟练使用 vue 开发，文档地址如下。
* [weex](http://weex.apache.org/cn/guide/)
* [vue](https://cn.vuejs.org/v2/guide/)

## Support 
> 跟随着 weex 的支持性，`但目前我们并不支持开发代码兼容 web 端`

* Android 4.1 (API 16)
* iOS 8.0+ 
* WebKit 534.30+ 

## Environment
以下为不同 OS 开发不同客户端所需环境。

#### hosts
为了真机调试，我们推荐配置 `hosts` 文件，添加如下地址，当然您也可以默认为公司固定资源文件访问地址，这样通过证书还能进行线上抓包分析问题。
```
127.0.0.1   app.weex-eros.com
```
#### 脚手架所需环境:
darwin: 
* Node.js (>=6.x), npm version 4+ 

windows: 
* Git bash 

> 因为脚手架依赖了`node-sass`，安装失败有很多解决办法，可自行查找。

#### 脚手架安装:
```
$ npm i eros-cli -g
```
如果你在中国地区，我们还是推荐您使用 [cnpm](https://npm.taobao.org/) 安装或者直接修改为`淘宝源`。
```
$ cnpm i eros-cli -g 
```
#### darwin 开发 iOS:
* Xcode
* CocoaPods
    * 升级 Ruby 环境：`$ sudo gem update --system`
    * 移除现有 Ruby 镜像：`$ gem sources --remove https://rubygems.org/`
    * 添加ruby-china镜像：`$ gem source -a https://gems.ruby-china.org/`
    * 安装 CocoaPods：`$ sudo gem install cocoapods`
    * 如果以上命令报错则执行：`$ sudo gem install -n /usr/local/bin cocoapods --pre`
    * 最后执行：`$ pod setup 过程比较漫长，请耐心等待执行完成`

#### darwin/windows/linux 开发 Android:
* 下载并安装 [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)。
* 下载并安装 [Android Studio](https://developer.android.google.cn/studio/index.html)。

JDK 是 JAVA 开发包，AndroidStudio 是 Android开发IDE，这两项不再做过多介绍。

> 如果您使用虚拟机进行跨平台开发，也需要配置好对应平台的所需环境。

### 模拟器安装
* ios 开发中 xcode 已经自带了模拟器
* android 开发者推荐下载 `Genymotion`模拟器

>当然市面上的如 `夜神模拟器` 也是可以的，[调试教程](http://blog.csdn.net/qq_34653571/article/details/53007044?locationNum=14&fps=1)，但是在 weex 0.17 中会出现 weex 实例化失败的问题，所以还是推荐 `Genymotion`。

## Start
1. 首先通过脚手架自动生成开发模板(我们不推荐用 `sudo` 来执行脚手架的任何指令)
```
$ eros init
```
按提示选择模板，填写 app/项目名称和版本后在当前路径下会生成对应模板，然后 `cd` 到项目中

2. 下载所需依赖
前端依赖
```
$ npm install
```
客户端依赖
```
$ eros install
```
3. 安装完依赖之后:
* iOS: 会自动打开 `Xcode` ，然后选择一个模拟器，点击左上角的播放(运行)按钮，即可看到内置包中已经内置好的 eros demo.

* Android:开发者需要多几个步骤:
1. 点击AndroidStudio上方的 **File---&gt;New---&gt;Import Project。**
![](https://img.benmu-health.com/gitbook/1505963461481.jpg)
2. 找到eros在你本地的地址，选择 **platforms/android/WeexFrameworkWrapper** ,点击**OK。**
![](https://img.benmu-health.com/gitbook/1505963624252.jpg)
3. 待项目构建完成，点击 AndroidStudio 上方工具栏的 **Run** ，即可运行项目。![](https://img.benmu-health.com/gitbook/1505963683163.jpg)

注意：
> 第一次打开 AndroidStuido 时，由于本地环境未配置好，AndroidStuido 会提示错误，按照 IDE 提示，大部分环境问题都可以解决。

于是 eros 的 demo 便能在模拟器中跑起来了。

![eros-demo](http://upload.ouliu.net/i/20171212233540q8alw.gif)

在 eros demo 中我们可以看到：
* tab1 中内置了 weex-ui 的 demo
* tab2 中有大部分 widget 使用的实例
* tab3 中跑了官方的瀑布流例子和我们编写一个支持手势滑动的多个 List 的类似新闻的实例。

> eros 的 demo 很重要，建议在开发中，首先跟随 demo 编写几个页面，并保留其代码作为使用参考。
## Quick Query 
* [Hello World](https://github.com/bmfe/eros-template/wiki/eros-%7C-%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97)
* [更新总览](https://github.com/bmfe/eros-template/wiki/update-all)
## Ecosystem
| Project | Description |
|---------|-------------|
| [eros-cli](https://github.com/bmfe/eros-cli) | 简单的 eros 项目构建工具，可以提供搭建，开发，调试和发布等功能。 |
| [eros-publish](https://github.com/bmfe/eros-publish) | 简单的服务器差分包更新逻辑，需要和脚手架搭配使用。 |
| [eros-ios-library](https://github.com/bmfe/Benmu-iOS-Library) | eros ios Weex 项目依赖库。 |
| [eros-ios-sdk](https://github.com/bmfe/WeexiOSSDK) | eros ios Weex sdk。 |
| [eros-android-framework](https://github.com/bmfe/WeexErosFramework) | eros weex 移动解决方案安卓端框架。 |
| [eros-android-widget](https://github.com/bmfe/BMWidget) | eros 安卓组件库。 |
| [eros-android-sdk](https://github.com/bmfe/WeexSDK) | eros 安卓移动解决方案安卓端 WeexSDK。 |

### 此处应有打赏，请简单粗暴地爱我们！
![](https://github.com/bmfe/eros-template/wiki/image/shang.jpeg)

帮我买杯咖啡，继续创作，谢谢大家！
