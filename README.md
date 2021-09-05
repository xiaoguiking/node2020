# node2020

express

> Commonjs 是模块化的标准，nodejs 是 CommonJs 模块化的实现

Commonjs 自定义模块的使用

```
通过 exports 或者 module.exports 暴露属性或者方法
在需要使用的文件中通过 require 的方式引入这个模块
https://www.bilibili.com/video/BV11t411k79h?p=29

```


## Git 贡献提交规范

## 参考 vue 规范 (Angular)

- feat 增加新功能
- fix 修复问题/BUG
- style 代码风格相关无影响运行结果的
- perf 优化/性能提升
- refactor 重构
- revert 撤销修改
- test 测试相关
- docs 文档/注释
- chore 依赖更新/脚手架配置修改等
- workflow 工作流改进
- ci 持续集成
- types 类型定义文件更改
- wip 开发中

## node 实体

- express01
- express02
- node-eg  案例文件
- node-express   vue-imis-api
- node-update 测试文件夹
- node1
- node2


https://github.com/gothinkster/realworld/tree/master/api




text/html：HTML格式
text/plain：纯文本格式
text/xml： XML格式
image/gif：gif图片格式
image/jpeg：jpg图片格式
image/png：png图片格式
application/xhtml+xml：XHTML格式
application/xml： XML数据格式
application/atom+xml：Atom XML聚合格式
application/json：JSON数据格式
application/pdf：pdf格式
application/msword： Word文档格式
application/octet-stream： 二进制流数据（如常见的文件下载）
application/x-www-form-urlencoded：<form encType=" ">中默认的encType，form表单数据被编码为key/value格式发送到服务器（表单默认的提交数据的格式）
multipart/form-data： 需要在表单中进行文件上传时，就需要使用该格式

https://www.jianshu.com/p/363fd522375e



I still want the best for you  我依然想你得到最好的


## 传输层 TCP 三次握手

- 第一次握手(请求服务端)
  ```
  客户端发送带有SYN标志的连接请求报文段，然后进入SYN_SEND 状态，等待服务端的确认。
  ```

- 第二次握手(接受客户端消息，返回消息给客户端)
  ```
  服务端接受到客户端的SYN报文段后，需要发送ACK信息对这个报文段进行确认。同时，还要发送自己的SYN请求信息，服务端会将上述消息放到一个报文段（SYN+ACk）报文段，一并发送给
  客户端，此时服务端会进入SYN_RECV的状态
  ```

- 第三次握手（接收到服务端消息，开始正式和服务端通讯）
  ```
  客户端接收到服务端的SYN+ACK消息后，会向服务端发送ACK确认报文段，这个报文段发送完毕后，客户端和服务端都进入ESTABLISHED 状态，完成TCP的三次握手
  ```

> 为什么需要进行三次握手呢？

  ```
  ```
