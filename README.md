# clockInTheClock

艺术风格的打卡时钟

[网页地址](https://xingorg1.github.io/clockInTheClock/index.html)

## chrome 扩展插件

[开发文档地址](https://developer.chrome.com/docs/extensions/mv3/manifest/)
[中文开发教程](https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html)

mac 已安装的插件源码路径: </Users/用户名/Library/ApplicationSupport/Google/Chrome/Default/Extensions>

### 其他官方资料

<details>
  <ul>
    <li><a href="https://developer.chrome.com/extensions" target="_blank">Chrome插件官方文档主页</a></li>
    <li><a href="https://developer.chrome.com/extensions/samples" target="_blank">Chrome插件官方示例</a></li>
    <li><a href="https://developer.chrome.com/extensions/manifest" target="_blank">manifest清单文件</a></li>
    <li><a href="https://developer.chrome.com/extensions/permissions" target="_blank">permissions权限</a></li>
    <li><a href="https://developer.chrome.com/extensions/api_index" target="_blank">chrome.xxx.api文档</a></li>
    <li><a href="https://developer.chrome.com/extensions/match_patterns" target="_blank">模糊匹配规则语法详解</a></li>
  </ul>
</details>

## vue3
### setup
新的 setup 组件选项在创建组件之前执行(可以理解在beforeCreated前创建)

在执行 setup 时，组件实例尚未被创建。在 setup 选项中 this 指向window了（不指向实例，可以说没有this），也就不能访问data状态、方法、计算属性

setup参数有props、context

### ref
一个引用。感觉就像是把变量用{value: xxx}包装一层，然后进行浅拷贝引用，达到响应式的目的。