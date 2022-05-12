---
sidebar: auto

---

# JavaScript中的宏任务与微任务

​	JavaScript是单线程的。为防止主线程不阻塞，所以会先将同步代码压入执行栈中，依次执行，将异步代码推入异步队列，异步队列又分为宏任务队列和微任务队列，因为宏任务队列的执行时间较长，所以微任务队列要优先于宏任务队列。微任务队列的代表是`Promise.then`，`MutationObserver`，宏任务的话就是`setImmediate setTimeout setInterval`

​	在事件循环中，每进行一次循环操作称为 tick，每一次 tick 的任务处理模型是比较复杂的，但关键步骤如下：

- 在此次 tick 中选择最先进入队列的任务(oldest task)，如果有则执行(一次)
- 检查是否存在 Microtasks（微任务），如果存在则不停地执行，直至清空 Microtasks Queue
- 更新 render
- 主线程重复执行上述步骤

### 宏任务

(macro)task，可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）。

浏览器为了能够使得JS内部(macro)task与DOM任务能够有序的执行，会在一个(macro)task执行结束后，在下一个(macro)task 执行开始前，对页面进行重新渲染，流程如下：

(macro)task->渲染->(macro)task->...

宏任务包含：

```text
script(整体代码)
setTimeout
setInterval
I/O
UI交互事件
postMessage
MessageChannel
setImmediate(Node.js 环境)
```

### 微任务

microtask,可以理解是在当前 task 执行结束后立即执行的任务。也就是说，在当前task任务后，下一个task之前，在渲染之前。

所以它的响应速度相比setTimeout（setTimeout是task）会更快，因为无需等渲染。也就是说，在某一个macrotask执行完后，就会将在它执行期间产生的所有microtask都执行完毕（在渲染前）。

微任务包含：

```text
Promise.then
Object.observe
MutationObserver
process.nextTick(Node.js 环境)
```

### 运行机制

在事件循环中，每进行一次循环操作称为 tick，每一次 tick 的任务处理模型是比较复杂的，但关键步骤如下：

- 执行一个宏任务（栈中没有就从事件队列中获取）

- 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中

- 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）

- 当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染

- 渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）

  ![img](https://pic2.zhimg.com/80/v2-e6dd78c74cb671dd9408c2273308a265_720w.jpg)