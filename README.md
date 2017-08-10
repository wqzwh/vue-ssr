# vue后端渲染脚手架

## 解决问题
- 【手机端首屏渲染问题】
- 【SEO解决搜索引擎抓取问题】
- 【提高页面渲染性能】

### 统一的文件系统结构

- 项目整体目录结构

````bash
src
└── assets
    ├── style
    └── images
        ├── module1
        │   ├── index.js
        │   ├── index.hbs
        │   └── service.js
        ├── module2
        │   ├── index.vue
        │   └── service.js
        └── module3
            ├── index.js
            ├── module3-1
            │   ├── index.js
            │   ├── index.jade
            │   └── service.js
            └── module3-2
                ├── index.vue
                └── service.js
````

- 样式目录结构

````bash
static
└── styles
    ├── page1
    │   ├── module1.less
    │   ├── module2.less
    │   └── module3.less
    ├── page1.less
    ├── page2
    │   ├── module1.scss
    │   ├── module2.scss
    │   └── module3.scss
    └── page2.scss
````

- 图片目录结构

````bash
static
└── images
    └── page1
        ├── 1.jpg
        ├── 2.jpg
        └── folder
            ├── 1.png
            ├── 2.png
            └── 3.png
````

#### 统一的职责划分

- Service.js `专职提供各种方法处理API数据`
- .hbs 或 .jade `负责页面的html模板`
- index.js 或 index.vue `负责数据展现和交互操作`

> 规范化在项目中对于后续功能的扩展和可维护性起着非常重要的作用，直接影响项目的开发质量和功能迭代速度。

- 【目录结构规范化】FEZ支持可定制化的目录结构
- 【代码规范化】FEZ可开启JSHint对JS代码做规范性的自动化检测
- 【前后端接口规范化】FEZ 附带有[API文档编写平台](http://doc.hestudy.com)

### 开发自动化

> FEZ 集成了大量自动化前端工作流。任何机械的重复性的工作都应该交给 FEZ 来完成。

- 自动化搭建本地研发环境，快速响应文件更改并自动刷新浏览器。
- 自动化编译ES6或CommonJS标准的JS代码，自动化生成source map便于浏览器端调试。
- 自动化编译SASS/LESS => CSS文件，自动化添加CSS3的各种浏览器前缀。
- 自动化处理第三方库样式、项目公共样式、页面样式并自动化注入到页面。
- 自动化处理第三方库脚本、项目公共脚本、页面逻辑脚本并自动化注入到页面。
- 自动化搜索、下载、更新、管理开源库资源，根据配置并做自动化的资源合并。
- 自动化压缩JS、CSS、HTML、图片、字体等静态资源。
- 自动化SVG转ICON图标、雪碧图合成、移动端@2x/@3X图片适配，并自动化生成对应样式。
- 自动化转换所有CSS样式中的PX单位为REM单位。
- 自动化转换所有图片为WebP格式并生成对应样式文件。
- 自动化注入WebP浏览器支持检测脚本并替换所有的WebP文件。
- 自动化生成所有静态资源的MD5版本号。
- 自动化将所有静态资源添加CDN前缀。
- 自动化搭建用于测试上线代码的多终端测试环境。
- 自动化通过SFTP部署上线、或部署静态资源。


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

#### 全局安装 Gulp4.0

```bash
npm install gulpjs/gulp#4.0 -g
```

- 详情请参考 Github 社区 [Gulp](https://github.com/gulpjs/gulp)

> 目前Gulp发行版本是3.9.1，如果安装过全局的非4.0版本 gulp 请先卸载 `npm uninstall gulp -g`

#### 全局安装 Bower

```bash
npm install bower -g
```
> 使用Bower主要是为了管理第三方框架库，通过页面自动化注入技术解决页面框架库的引入和管理问题，如果想用固定的CDN资源，或手动的引入页面，可以不安装，并在 项目根目录.fezrc 配置文件中将此配置关闭

### 运行 Demo 示例项目

#### 安装 NPM 包

- 进入fez 目录执行以下命令

```bash
npm install
```

#### 安装 Bower 包
- 进入项目 demo 目录执行以下命令

```bash
bower install
```

#### 运行 Demo 示例

- 在项目目录下执行

```bash
gulp
```

> FEZ 会自动打开默认浏览器进入研发环境，项目任意文件的更改都会自动刷新浏览器，请尽情享用FEZ为你带来的愉悦开发体验！

## 命令说明

- 研发环境

````bash
gulp
````

> FEZ 会自动打开系统默认浏览器进入研发环境，您可以打开多个不同终端和不同类型的浏览器访问同一开发页面，开发过程中任何文件的更改，或是在任何一个终端的浏览器中的操作行为，都会同步到每个终端界面，实时查看在每个终端的修改效果。

- 生产部署

````bash
gulp dist
````

> FEZ 会自动化编译源码目录中的所有文件(js、sass、less、html、图片、字体等)，自动化生成md5版本号，并将编译后的上线代码发布到`dist`目录。之后通过其它途径、或流程工具发布`dist`目录到线上服务器。

- 本地测试上线代码

````bash
gulp test
````

> FEZ 会自动化构建本地测试环境，并自动打开系统默认浏览器对`dist`上线目录中的代码真实性的模拟服务器上的操作效果，可以让测试人员打开多个不同终端和不同类型的浏览器一次性测试所有平台、所有浏览器中的最终产品的交互和操作。

- SSH上传

````bash
gulp sftp
````

> FEZ 会调用项目目录中`.fezrc`的`sftp`配置信息，通过SSH方式快速部署`dist` 中的上线代码，或是部署`dist`目录中的静态资源。

- 打包压缩

````bash
gulp zip
````

> FEZ 会自动化将`dist`目录中所有上线代码打包成`dist.zip`文件，用于通过其它流程工具部署上线。

- svg => icon 转换

````bash
gulp svg2icon
````
> FEZ 会调用项目目录中`.fezrc`的`svgIcons`配置信息，自动化转换svg图标为icon字体文件并生成对应的样式文件。

## 待续...




