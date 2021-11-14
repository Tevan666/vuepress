---
sidebar: auto

---

# angular
Angular 是一个基于 TypeScript 构建的开发平台。它包括：

*一个基于组件的框架，用于构建可伸缩的 Web 应用

*一组完美集成的库，涵盖各种功能，包括路由、表单管理、客户端-服务器通信等

*一套开发工具，可帮助你开发、构建、测试和更新代码

借助 Angular，无论单人项目还是企业级应用，你都能获得平台带来的优势。 Angular 的设计目标之一就是让更新更容易，因此你可以用最小的成本升级到最新的 Angular 版本。最重要的是，Angular 的生态系统由包括 170 万名开发人员、库作者和内容创作者在内的多元团队构成。
### 符号

[ ]绑定属性  ()绑定事件

### 声明类

public 公有(默认) 可以在当前类使用，也可以在类外面使用

protected 保护类型 只有在当前类和子类使用

private 私有 只有在当前类才可以使用

## 指令

带有前缀ng-

### ng-app

初始化一个angular应用程序

### ng-init

初始化应用程序数据

### *ngFor

普通循环

### *ngIf

判断语句

### *ngSwitch

格式

```html
<h2 [ngSwitch="order"]>
	<p *ngSwitchCase = "1">true</p>
	<p *ngSwitchCase = "2">false</p>
    <p *ngSwitchDefault  = "2">false</p>
</h2>
```

### [ngClass]

动态添加类

```
<div [ngClass] = "'red': true"> </div>
```

### [ngStyle]

动态添加样式

```
<div [ngStyle]="{'color':'blue'}"></div>
```



## 管道

[管道](https://angular.cn/guide/glossary#pipe)用来对字符串、货币金额、日期和其他显示数据进行转换和格式化。data | function

angular常用的内置管道

- [`DatePipe`](https://angular.cn/api/common/DatePipe)：根据本地环境中的规则格式化日期值。
- [`UpperCasePipe`](https://angular.cn/api/common/UpperCasePipe)：把文本全部转换成大写。
- [`LowerCasePipe`](https://angular.cn/api/common/LowerCasePipe) ：把文本全部转换成小写。
- [`CurrencyPipe`](https://angular.cn/api/common/CurrencyPipe) ：把数字转换成货币字符串，根据本地环境中的规则进行格式化。
- [`DecimalPipe`](https://angular.cn/api/common/DecimalPipe)：把数字转换成带小数点的字符串，根据本地环境中的规则进行格式化。
- [`PercentPipe`](https://angular.cn/api/common/PercentPipe) ：把数字转换成百分比字符串，根据本地环境中的规则进行格式化。



## 事件声明

(事件名)



## 双向数据绑定

只针对表单，需要在根组件的module.ts导入FormsModule并在组件实例中的imports进行声明。

[(ngModel='value')]



## angular服务

服务是在多个“互相不知道”的类之间共享信息的好办法。

### 创建服务

ng g service name

#### 指定目录

ng g service module/filename

### 使用

在根组件导入import StorageService from './my-service.service'并在根组件的providers中声明导入。

**在其他组件使用时仍然需要导入并声明**



## ViewChild

属性装饰器，用于配置一个视图查询。 **变更检测器会在视图的 DOM 中查找能匹配上该选择器的第一个元素或指令**。 如果视图的 DOM 发生了变化，出现了匹配该选择器的新的子节点，该属性就会被更新。

#### 导入

import {[ViewChild](https://angular.cn/api/core/ViewChild)} from '@angular/core';

#### 获取dom节点

写在类(即构造函数)中。

@viewChild('dom') 变量名(赋值)

#### 获取dom元素

在ngAfterViewInit生命周期函数获取dom

this.变量名.nativeElement

### 获取一个实例(组件)

#### 1.给子组件取名

```html
<app-child-component #child></app-child-componen>
```

#### 2.获取一个组件

@viewChild('child') child:any

#### 3.调用子组件方法

this.child.func()



## 父子间通信及组件之间通信

### 父组件给子组件传值@input

父组件传递简单的数据，还可以把自己的方法以及整个父组件传给子组件。

1.父组件调用子组件的时候传入数据

[msg]="parentMsg"

2.子组件引入input模块

import Input from '@angular/core'

3.子组件@input接受父组件传过来的数据

@Input() msg:string(类型)

4.子组件调用值

this.msg

#### 子组件获取父组件的方法

1.父组件调用子组件的时候传入方法

[run]='parentRun'

2.子组件引入input模块

3.子组件接收方法

@input() run:any

4.子组件调用方法

this.run()

#### 父组件传整个组件给子组件

调用子组件时传入

[home]='this'

通过home调用父组件方法 

this.home.run()

### 父组件获取子组件值和方法 

@viewChild

### 子组件通过@output触发父组件的方法

1.子组件引入Output和EventEmitter

import {Output，EventEmitter} from '@angular/core'

@Output() private outer = new EventEmitter()

2.子组件将事件发送出去 

this.outer.emit('子组件数据');

3.父组件调用子组件时接收

(outer) = "父组件function()" //参数有$event为子组件给父组件发送的数据



## 非父子间通信

通过服务service实现。



## Angular中的生命周期函数

组件创建、更新、销毁时会触发的一系列方法。

#### ngOnChanges()

当被绑定的输入属性的值发生变化时调用(父子组件传值的时候会触发)。

#### ▲ngOnInit()

在angular第一次显示数据绑定和设置指令/组件输入属性之后，初始化指令/组件。

使用场景：

1.在构造函数之后马上执行复杂的初始化逻辑。

2.在angular设置完输入属性后，对该组件进行准备。

#### ngDoCheck()

检测，并在发生angular无法或不愿意自己检测的变化时做出反应。在每个angular变更检测周期中调用，ngOnchanges()和ngOnInit()之后。

#### ngAfterContentInit()

当把内容投影进组件之后调用，第一次ngDocheck()之后调用，只调用一次。

#### ngAfterContentChecked()

每次被投影组件内容的变更检测之后调用，ngAfterContentInit()和每次ngAfterContentChecked()之后调用。

#### ▲ngAfterViewInit()

初始化组件视图极其子视图之后调用，第一ngAfterContentChecked()之后调用，只调用一次。 **dom操作放在这里**。

#### ngAfterViewChecked()

每次做完组件视图和其子视图的变更检测之后调用。ngAfterViewInit()和每次ngAfterContentChecked()之后调用。

#### ▲ngOnDestroy()

每当angular销毁指令/组件之前调用并清扫，在这反订阅可观察对象和分离事件处理器，以防内存泄漏。

## RxJS

针对异步数据流的编程。将一切数据、http请求、DOM事件或者普通数据等包装成流的形式，然后用强大丰富的操作符对流进行处理。
```javaScript
import {Observable} from 'rxjs' **//导入Observable**

let stream = new Observable(observer => {

​	setTimeout(() => {

​		observer.next('observable timeout');

​		observer.error('失败的数据')

​	})

})

stream.subscribe(value => console.log(value));
```

与promise基本用法类似，promise用的是then()和resolve()，RxJS用的是next()和subscribe()。

**实例**

```javaScript
getRxJSdata() {

​	return new Observable((observer) => {

​		setTimeout(() => {

​			var username='data';

​			observer.next(username);

​			//observer.error('失败的数据');

​		}, 2000)

​	})

}
```



**获取数据**
```javaScript
var data  = this.request.getRxJSdata();  **//request是服务service名**

data.subscribe(data) => {

​	console.log(data)

}
```


### unsubscribe取消订阅

promise创建之后，动作是无法撤回的。Observable动作可以通过ubsubscrible()方法中途撤回，而且Observable在内部做了只能处理。

data.unsubscribe() //取消订阅

### RxJS订阅后多次执行

promise只能触发一次，resolve或者reject。Observable可以不断触发下一个值。

### RxJS的操作符

#### map

对返回的数据进行处理并返回处理后的数据。
```javaScript
import {map} from 'rxjs/operators'

data.pipe(

​	map(value) => {

​		return value*value //返回对数据的操作

​	}

)
```

#### filter

对返回的数据进行过滤。
```javaScript
import {filter} from 'rxjs/operators'

data.pipe(

​	filter((value) => {

​		if(value%2 == 0) {

​			return true;  **//对数据的处理操作，返回true则可以返回值**

​			}

​	})

)
```


## angular请求数据

### 一、angular get请求数据

angular5.x以后get、post和服务器交互使用的是httpClientModule模块。

#### 1.在app.module.ts中引入HttpClientModule并注入

import {HttpClientModule} from '@angular/common/http'

imports: [BrowserModule,

​				HttpClientModule

]

#### 2.在引用的地方引入HttpClient并在构造函数中声明

import {HttpClient} from '@angular/common/http'

constructor(public http:HttpClient) {}

#### 3.get请求数据

var api = "http://url"

this.http.get(api).subscribe(response => {

​	console.log(response)

})

### 二、angular post提交数据

#### 1.在app.module.ts中引入HttpClientModule并注入

import {HttpClientModule} from '@angular/common/http'

imports: [BrowserModule,

​				HttpClientModule

]

#### 2.在引用的地方引入HttpClient、HttpHeaders并在构造函数中声明

import {HttpClient, HttpHeaders} from '@angular/common/http'

constructor(public http:HttpClient) {}

#### 3.post提交数据

```javaScript
const httpOptions = {

​	headers: new HttpHeaders({'Content-Type': 'application/json'})

};

var api = "url"

this.http:post(url, { username:'tevan', age: '20' }.subscribe(response => {

​	console.log(response)

}))
```


### 三、angular Jsonp请求数据

#### 1.在app.module.ts中引入HttpClientModule，HttpClientJsonpModule并注入。

import {HttpClientModule，HttpClientJsonpModule} from '@angular/common/http'

imports: [BrowserModule,

​				HttpClientModule，

​				HttpClientJsonpModule

]

#### 2.在使用的地方引入HttpClient并在构造函数中声明

import {HttpClient} from '@angular/common/http'

constructor(public http:HttpClient) {}

#### 3.jsonp请求数据

var api = 'url'

this.http.jsonp(api,'callback').subscibe(response => {

​	console.log(response);

})

### angular 使用axios请求数据

在服务service封装一个axios。

#### 1.安装axios

npm install axios --save

#### 2.用到的地方引入

import axios from 'axios'

#### 3.封装并暴露出去
```javaScript
export class axiosService {

​	constructor() {}

​	axiosGet(api) {

​		return new Promise((resolve,reject) => {

​			axios.get(api).then(function(res) {

​				resolve(res)

​			})

​		})	

​	}

}
```


#### 4.在app.module.ts中导入并声明

import {axiosService} from './service/axiosService.service'



providers: [axiosService]

#### 5.在使用的地方引入并在构造函数中声明

import {axiosService} from './service/axiosService.service'

constructor(public http:HttpClient, public httpService:HttpserviceService) {}

#### 6.使用

let api='url'

this.httpService.axiosGet(api).then(res) => {

​	console.log(res)

}

## angular路由

与vue类似

不是通过router-link而是<a routerLink="/url"></a>

不是通过router-view而是router-outlet显示路由

### 重定向

{

  path: '**',   //匹配不到路由的时候加载或跳转的路由

  redirectTo: 'home'

 }

### routerLinkActive默认选中路由

设置routerLink默认选中路由，给选中的路由绑定一个默认类。

<a routerLink="/home"routerLinkActive="active">home</a>

### get传值

通过a-routerLink的参数[queryParams]动态绑定参数

#### 获取queryParams的值

1.导入

import { ActivatedRoute } from '@angular/router'

2.router-link动态绑定路由

```html
<li *ngFor="let item of list; let key = index">

    <a routerLink="/home" [queryParams]="{aid:key}">去到home</a>

 </li>
```

获取url传值

1.在构造函数中注入

constructor(public route: ActivatedRoute)

2.异步获取param值

this.route.queryParams.subscribe((res) => {

​	console.log(res)

})

### 动态路由

1.在路由配置文件中配置路由的path

path: 'homenav/:aid'

2.routerLink动态绑定key

<a [routerLink]="['/home', key]">动态路由</a>

获取url传值

1.在构造函数中注入

constructor(public route: ActivatedRoute)

2.异步获取param值

this.route.queryParams.subscribe((res) => {

​	console.log(res)

})

### 动态路由JS跳转

1.导入Router

import {Router} from '@angular/router'

2.注入构造函数

constructorpublic router: Router) { }

3.路由跳转

this.router.navigate(['/url', '参数'])



### get传值路由JS跳转
```javaScript
1.导入NavigationExtras

import {Router，NavigationExtras} from '@angular/router'

2.定义一个方法执行跳转，用NavigationExtras配置传参

GoHome() {

​	let navigationExtras: NavigationExtras = {

​		queryParams: {'session_id': '123'},

​		fragment: 'anchor'

​	};

​	this.router.navigate(['/news'], navigationExtras)

}
```


3.获取get传值



### 父子路由

与vue类似

在父组件添加router-outlet
```html
<router-outlet></router-outlet>
```