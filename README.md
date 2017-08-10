# vue后端渲染脚手架

## 解决问题
- 【手机端首屏渲染问题】
- 【SEO解决搜索引擎抓取问题】
- 【提高页面渲染性能】

### 统一的文件系统结构

- 项目整体目录结构

````bash
├── build
│   ├── setup-dev-server.js
│   ├── vue-loader.config.js
│   ├── webpack.base.config.js
│   ├── webpack.client.config.js
│   └── webpack.server.config.js
├── dist
├── package.json
├── server.js
└── src
    ├── App.vue
    ├── app.js
    ├── assets
    │   ├── images
    │   └── style
    ├── components
    │   ├── Home.vue
    │   ├── Item.vue
    │   ├── conf.js
    │   └── demo
    │       ├── conf.js
    │       ├── demo.vue
    │       ├── index.js
    │       └── mock.js
    ├── entry-client.js
    ├── entry-server.js
    ├── index.template.html
    ├── public
    │   ├── components
    │   ├── conf.js
    │   └── utils
    │       └── api.js
    ├── router
    │   └── index.js
    └── store
        ├── actions.js
        ├── getters.js
        ├── index.js
        ├── modules
        │   └── Home.js
        ├── mutationtypes.js
        └── state.js      
        
````

### 统一的职责划分

- components文件夹下分模块文件，模块文件下下又分模块本身的.vue文件（模版文件），index.js文件（后台数据交互文件），mock.js（本模块的mock假数据），conf.js（配置本模块一些参数，请求路径，模块名称等信息）
- router文件夹下是路由配置
- store文件夹下是数据流状态配置
- public文件夹是公共模块（包含公共组件，工具类函数等）

### 开发自动化

- 自动化搭建本地研发环境，快速响应文件更改并自动刷新浏览器。
- 自动化编译ES6或CommonJS标准的JS代码，自动化生成source map便于浏览器端调试。
- 自动化编译SASS/LESS => CSS文件，自动化添加CSS3的各种浏览器前缀。
- 服务端使用express，前端使用webpack自动化构建打包。


## 安装使用

### 安装

- Mac系统推荐使用 [iterm2](http://iterm2.com/) 及 [oh my zsh](http://ohmyz.sh/)
- 类 Unix 系统，请打开任意终端输入命令执行。
- Windows 用户请先安装 [git](http://git-scm.com/)，然后在 [Git Bash](http://git-for-windows.github.io/) 下执行命令

#### 安装 Node 和 NPM

- 详细过程参考官网 https://nodejs.org (中文网站 http://nodejs.cn/)
- 支持所有Node的发行版本，建议使用最新稳定版 6.x 。
- Ubuntu 用户使用 `apt-get` 安装 node 后，安装的程序名叫 `nodejs`，需要软链成 `node`
- Windows 用户安装完成后需要在 CMD 下确认是否能执行 node 和 npm

#### 全局安装 webpack最新版本

```bash
npm install webpack -g
```

### 运行 Demo 示例项目

#### 安装 NPM 包

- 进入项目 目录执行以下命令

```bash
npm install
```

#### 运行 Demo 示例

- 在项目目录下执行

```bash
npm run build
```
```bash
npm run start
```
## 待续...