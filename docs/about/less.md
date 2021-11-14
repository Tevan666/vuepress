---
sidebar: auto

---
## less

Less （Leaner Style Sheets 的缩写） 是一门向后兼容的 CSS 扩展语言。

### 安装

在 Node.js 环境中使用 Less ：

```
npm install -g less
lessc styles.less styles.css //将less文件编译为css文件
```



在浏览器环境中使用 Less ：

```
<link rel="stylesheet/less" type="text/css" href="styles.less" />
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.11.1/less.min.js" ></script>
```

### 变量Variables

使用@定义变量，并可在其他地方使用。

```less
@width: 10px; 

@height: @width + 10px; 

#header {  

​	width: @width;  

​	height: @height; 

}
```

编译为：

```css
#header {
  width: 10px;
  height: 20px;
}
```



### 混合Mixins

混合（Mixin）是一种将一组属性从一个规则集包含（或混入）到另一个规则集的方法。

定义一个类如下：

```less
.bordered {  

	border-top: dotted 1px black;  

	border-bottom: solid 2px black; 

}
```

**在其他地方使用**

```less
.post a {  

	color: red;  

	.bordered(); 

}
```

.bordered类包含的属性就在.post了。id也能使用。



### 嵌套

```less
#header {  

	color: black;  

	.navigation {    

	font-size: 12px;  

	}  

	.logo {    

	width: 300px; 

 	} 

}
```

编译为：

```css
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```

还可以使用此方法将伪选择器与混合一同使用。下面是一个经典的 clearfix 技巧，重写为一个混合（ (`&` 表示当前选择器的父级）

```less
.clearfix {
  display: block;
  zoom: 1;

  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```



### @规则嵌套和冒泡

@ 规则可以与选择器以相同的方式进行嵌套。@ 规则会被放在前面，同一规则集中的其它元素的相对顺序保持不变。这叫做冒泡（bubbling）。

```less
.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media  (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}

```

编译为：

```css
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
```



### 运算Operations

算术运算符 `+`、`-`、`*`、`/` 可以对任何数字、颜色或变量进行运算。如果可能的话，算术运算符在加、减或比较之前会进行单位换算。计算的结果以最左侧操作数的单位类型为准。如果单位换算无效或失去意义，则忽略单位。无效的单位换算例如：px 到 cm 或 rad 到 % 的转换。

#### calc() 特例

为了与 CSS 保持兼容，`calc()` 并不对数学表达式进行计算，但是在嵌套函数中会计算变量和数学公式的值。

```less
@var: 50vh/2;
width: calc(50% + (@var - 20px)); // 结果是 calc(50% + (25vh - 20px))
```



### 转义Escaping

转义（Escaping）允许你使用任意字符串作为属性或变量值。任何 `~"anything"` 或 `~'anything'` 形式的内容都将按原样输出，不会被编译。

**从 Less 3.5 开始，可以简写，不再需要引号转义**



### 命名空间和访问符

出于组织结构或是为了封装，对混合进行分组。

```less
#bundle() {
  .button {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover {
      background-color: white;
    }
  }
  .tab { ... }
  .citation { ... }
}
```

把 `.button` 类混合到 `#header a` 中：

```less
#header a {
  color: orange;
  #bundle.button();  // 还可以书写为 #bundle > .button 形式
}
```

**注意：如果不希望它们出现在输出的 CSS 中，例如 `#bundle .tab`，请将 `()` 附加到命名空间（例如 `#bundle()`）后面。**



### 映射Maps

从 Less 3.5 版本开始，还可以将混合（mixins）和规则集（rulesets）作为一组值的映射（map）使用。

```less
#colors() {
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
```

输出为：

```css
.button {
  color: blue;
  border: 1px solid green;
}
```



### 作用域Scope

Less 中的作用域与 CSS 中的作用域非常类似。首先在本地查找变量和混合（mixins），如果找不到，则从“父”级作用域继承。

```less
@var: red;

#page {
  @var: white;
  #header {
    color: @var; // white
  }
}
```

与 CSS 自定义属性一样，混合（mixin）和变量的定义不必在引用之前事先定义。

```less
@var: red;

#page {
  #header {
    color: @var; // white
  }
  @var: white;
}
```



### 注释Comments

块注释和行注释都能使用。

```less
/* 一个块注释
 * style comment! */
@var: red;

// 这一行被注释掉了！
@var: white;
```



### 导入Importing

可以导入一个 `.less` 文件，此文件中的所有变量就可以全部使用了。如果导入的文件是 `.less` 扩展名，则可以将扩展名省略掉。

```less
@import "library"; // library.less
@import "typo.css";
```



### 函数Functions

Less 内置了多种函数用于转换颜色、处理字符串、算术运算等。

下面是利用 percentage 函数将 0.5 转换为 50%，将颜色饱和度增加 5%，以及颜色亮度降低 25% 并且色相值增加 8 等用法：

```less
@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width); // returns `50%`
  color: saturate(@base, 5%);
  background-color: spin(lighten(@base, 25%), 8);
}
```

其他函数查看官网https://less.bootcss.com/functions/

