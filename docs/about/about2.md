---
sidebar: auto

---


## 电商项目
  ### 技术栈：Vue、 Vue-Router、 Axios、 Webpack、 git
  ### 项目描述：
  实现一个电商平台的基本使用，包含首页模块、分类模块、购物车模块、我的模块等，通过Axios请求数据接口并呈现在页面。首页访问频率高需要离开时需要留存状态采用keep-alive进行缓存，使用better-scroll可以使得移动端滑动更加顺滑，防止数据请求短时间请求过多采用vue-lazyload懒加载插件。针对不同手机类型的适配, 用了postcss-px-to-viewport插件,方便适配手机类型。

### 项目展示

### 首页
<img :src="$withBase('/assets/img/mall1.png')" alt="foo" style="width: 200px; height:400px;">
<img :src="$withBase('/assets/img/mall2.png')" alt="foo" style="width: 200px; height:400px;">
<img :src="$withBase('/assets/img/mall3.png')" alt="foo" style="width: 200px; height:400px;">

### 详情页
<img :src="$withBase('/assets/img/detail1.png')" alt="foo" style="width: 200px; height:400px;">
<img :src="$withBase('/assets/img/detail2.png')" alt="foo" style="width: 200px; height:400px;">
<img :src="$withBase('/assets/img/detail3.png')" alt="foo" style="width: 200px; height:400px;">
<img :src="$withBase('/assets/img/detail4.png')" alt="foo" style="width: 200px; height:400px;">

### 分类
<img :src="$withBase('/assets/img/category1.png')" alt="foo" style="width: 200px; height:400px;">
<img :src="$withBase('/assets/img/category2.png')" alt="foo" style="width: 200px; height:400px;">

### 购物车
<img :src="$withBase('/assets/img/cart.png')" alt="foo" style="width: 200px; height:400px;">

### 我的
<img :src="$withBase('/assets/img/profile.png')" alt="foo" style="width: 200px; height:400px;">
<img :src="$withBase('/assets/img/profile2.png')" alt="foo" style="width: 200px; height:400px;">
<img :src="$withBase('/assets/img/profile3.png')" alt="foo" style="width: 200px; height:400px;">
<img :src="$withBase('/assets/img/profile4.png')" alt="foo" style="width: 200px; height:400px;">
<img :src="$withBase('/assets/img/profile5.png')" alt="foo" style="width: 200px; height:400px;">

## 基于Keras框架的目标检测web应用软件开发

### 技术栈：html、JavaScript、ajax、Flask

### 项目描述：
 利用Python web搭建一个web服务器，并配置好接口页面，接受传过来的图片数据，后台程序调用封装好的垃圾分类模型，并返回分类结果给web前端，前端提交图片请求后，将通过服务器返 回的分类结果与图片显示在web页面中。
### 首页
<img :src="$withBase('/assets/img/web1.png')" alt="foo" style="width: 800px; height:400px;">

### 选择文件
<img :src="$withBase('/assets/img/web2.png')" alt="foo" style="width: 800px; height:400px;">

### 得到请求后分类并将分类结果与图片显示在网页
<img :src="$withBase('/assets/img/web3.png')" alt="foo" style="width: 800px; height:400px;">