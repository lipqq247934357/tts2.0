# tts3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 插件介绍：

    "normalize.css" 重置默认的css
    "axios" ajax请求工具
    "element-ui"  vue中后台UI框架
    "js-cookie" 获取cookie用的
    "nprogress":  页面顶部进度条
    "path-to-regexp":  对path进行正则处理的，不太清楚怎么用
    "qs"  转换json的工具
    "lodash" js工具库
    "async-validator" 校验输入工具

##plugin

###
date插件: [dayjs](https://github.com/iamkun/dayjs)
###
工具方法 [lodash](https://github.com/lodash/lodash)

###
目前由于文件打包之后内容过大，而且存在源码泄露的风险，所以优化webpack打包
1.
使用：webpack-bundle-analyzer插件
npm install --save-dev webpack-bundle-analyzer
然后查看打包之后的代码大小

2.[element-ui支持在babel中增加配置，然后后编译加载](https://element.eleme.cn/#/zh-CN/component/quickstart)


3. A Quesition:
an issue about @ begin for root Dir
this is [result](https://github.com/palantir/tslint/issues/3364)
but i use ~ replace @  ,also need update vue.config.js
4.scss parsed typescript need declare .d.ts file

TODO 
1.next step:卡路里计算器，在吃饭的时候可以统计自己的热量，不一定靠谱，就是玩一玩
2.增加正则校验的抽象封装
