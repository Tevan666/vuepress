---
sidebar: auto

---

## Element-UI
Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库

Element Plus，一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库

### vue-cli2


#### 1.安装

npm i element-ui

#### 2.配置main.js文件

```javascript
 import 'element-ui/lib/theme-chalk/index.css'
 import ElementUI from 'element-ui'   //element-ui所有组件
 
 Vue.use(ElementUI)

```

element包在node_modules中

### vue-cli3

#### 1.引入

命令行输入`vue add element`后

**How do you want to import Element?**

1. fully import 全局引用 2.import on demand 按需导入

目录src\plugins\element.js 其他文件相同

### 组件网址

https://element.eleme.cn/#/zh-CN/component/installation