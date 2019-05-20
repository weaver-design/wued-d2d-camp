# JQuery 进阶之道

JQuery 是经典的前端 DOM 编程库，[JQuery 参考手册](http://jquery.cuishifeng.cn/)

在这里为大家介绍几个 JQuery 的使用小技巧：

## 1. $.on() 事件绑定与冒泡

事件绑定是前端开发必须掌握的知识点之一：

[![Edit $.toggle()](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/0368876yyl?fontsize=14)

## 2. $.load() 异步拼接页面公用部分

开发官网过程中，往往遇到需要**复用**头部菜单和底部版权这些**公用**板块。

为了让代码更具可维护性，抛弃简单粗暴的复制粘贴，那就必须将公用部分进行抽离：

[![Edit $.toggle()](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/0368876yyl?fontsize=14)

<iframe src="https://codesandbox.io/embed/0368876yyl?fontsize=14" title="$.toggle()" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

index.html
```html
<div id="header">
  <!--动态插入头部-->
<div>
<script>
$(document).ready(function() {
  $('#header').load('header.html', function() {
    console.log('头部加载完成并插入当前文档中')
  })
})
</script>
```

## 3. $.tongle() 实现状态切换

显示/隐藏，向左/向右等这些都是页面上存在的状态，如何简单转换这些状态呢?

[![Edit $.toggle()](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/0368876yyl?fontsize=14)

## 4. $.each() 遍历渲染内容

出现重复的区块时，推荐使用 js 将

[![Edit $.toggle()](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/0368876yyl?fontsize=14)



