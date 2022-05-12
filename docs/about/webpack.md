---
sidebar: auto

---

# webpack优化方案

## 1.升级到webpack5

- npm: `npm install webpack@latest`
- Yarn: `yarn add webpack@latest`
- Webpack 5现在能够跟踪对导出的嵌套属性的访问。这可以改善重新导出命名空间对象时的 Tree Shaking（清除未使用的导出和混淆导出）。

## 2.忽略moment国际化语言

ignoreMomentLocale

## 3.设置terser选项

parallel多进程构建

format:{comment: false} 删去注释

## 4.当一个包过大时，可以根据需要进行分块

https://webpack.docschina.org/plugins/split-chunks-plugin/

**webpack.config.js**

```js
module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
```

## 5.压缩css

cssnano

## 6.更换压缩器为esbuild

```js
npm install esbuild
```

主要特性：

- 极快的速度，无需缓存
- 支持 ES6 和 CommonJS 模块
- 支持对 ES6 模块进行 tree shaking
- [API](https://esbuild.docschina.org/api/) 可同时用于 JavaScript 和 Go
- 兼容 [TypeScript](https://esbuild.docschina.org/content-types/#typescript) 和 [JSX](https://esbuild.docschina.org/content-types/#jsx) 语法
- 支持 [Source maps](https://esbuild.docschina.org/api/#sourcemap)
- 支持 [Minification](https://esbuild.docschina.org/api/#minify)
- 支持 [plugins](https://esbuild.docschina.org/plugins/)

## 7.采用cdn的方式

​	对于一些大尺寸依赖，比如图表库、antd 等，可尝试通过 externals 的配置引入相关 umd 文件，减少编译消耗。

## umijs中的优化选项

### 	1.配置 `nodeModulesTransform` 为 `{ type: 'none' }`

> 需要 Umi 3.1 。

Umi 默认编译 node_modules 下的文件，带来一些收益的同时，也增加了额外的编译时间。如果不希望 node_modules 下的文件走 babel 编译，可通过以下配置减少 40% 到 60% 的编译时间。

```js
export default {
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
}
```

### 	2.调整 SourceMap 生成方式

如果 dev 时慢或者修改代码后增量编译慢，可尝试禁用 SourceMap 生成或者调整为更低成本的生成方式，

```js
// 禁用 sourcemap
export default {
  devtool: false,
};
```

或者，

```js
// 使用最低成本的 sourcemap 生成方式，默认是 cheap-module-source-map
export default {
  devtool: 'eval',
};
```

### 	3.dynamicImport

- Type: `object`
- Default: `false`

是否启用按需加载，即是否把构建产物进行拆分，在需要的时候下载额外的 JS 再执行。

默认关闭时，只生成一个 js 和一个 css，即 `umi.js` 和 `umi.css`。优点是省心，部署方便；缺点是对用户来说初次打开网站会比较慢。