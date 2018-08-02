# 178518demo

[![NPM version](https://img.shields.io/npm/v/178518demo.svg?style=flat)](https://www.npmjs.org/package/178518demo)
[![node version](https://img.shields.io/badge/node.js-%3E=_8.11.3-green.svg?style=flat)](http://nodejs.org/download/)
[![Build](https://img.shields.io/travis/178518/myDemo.svg)](https://travis-ci.org/178518/myDemo)
[![Codecov](https://codecov.io/gh/178518/myDemo/branch/master/graph/badge.svg)](https://codecov.io/gh/178518/myDemo)
[![NPM Count](https://img.shields.io/npm/dt/178518demo.svg?style=flat)](https://www.npmjs.org/package/178518demo)
[![License](https://img.shields.io/npm/l/178518demo.svg?style=flat)](https://www.npmjs.org/package/178518demo)


## Install

```shell
npm i 178518demo
```


[![178518demo](https://nodei.co/npm/178518demo.png)](https://npmjs.org/package/178518demo)


# React Compontent 开发规约

组件通过内容分发实现值传递，尽量避免props传递。

# 编译器安装

```
npm install -g less autoprefixer postcss-cli

npm install karma karma-jasmine -g
```

# WebStorm配置自动编译

使用WebStorm的自动编译功能，实现对less文件的自动编译，使用postcss的autoprefixer插件实现自动补全功能。

## WebStorm配置

### Less

一般情况下来说，WebStorm会自动检测你电脑中是否已经安装了lessc并获取它的安装位置，然后自动帮你配置。

![Less配置](http://photo.yupoo.com/178518/HwQZvmZV/DVerm.png)

```
WebStorm > Preference > Tools > File Watchers

$FileName$ $FileNameWithoutExtension$.css --source-map

$FileNameWithoutExtension$.css:$FileNameWithoutExtension$.css.map
```

### Autoprefixer

打开Webstorm设置，Preferences -> Tools -> External Tools ;点击新增按钮，如图：

![Autoprefixer](http://photo.yupoo.com/178518/HwQZvt23/xTVjo.png)

![keymap](http://photo.yupoo.com/178518/HwQZvwVZ/o0FcY.png)

```
-u autoprefixer -o $FileDir$/$FileName$ $FileDir$/$FileName$

$ProjectFileDir$
```

现在打开你的WebStrom在css文件按shift+A看看会发生什么神奇的事情吧 😄


# 目录结构

目录规范：
├── dist						      # 编译过的源码,npm发布目录
├── examples						  # 编译过的源码,npm发布目录
│ ├── src
│ │ ├── index.html
│ │ ├── index.js
├── src								    # 组件源码
│ ├── assets
│ │ ├── index.less
│ ├── index.js
├── tests							    # Jest测试相关
│ ├── .babelrc
│ ├── .editorconfig
│ ├── .gitignore
│ ├── HISTORY.md				  # 版本历史相关
│ ├── LICENSE						  # 版权申明
│ ├── README.md					
│ ├── package.json
│ ├── webpack.config 		  # 项目开发demo的时候 需要用到的webpack

