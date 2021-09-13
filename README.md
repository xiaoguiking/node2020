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

## feat 增加新功能

## fix 修复问题/BUG

## style 代码风格相关无影响运行结果的

## perf 优化/性能提升

## refactor 重构

## revert 撤销修改

## test 测试相关

## docs 文档/注释

## chore 依赖更新/脚手架配置修改等

## workflow 工作流改进

## ci 持续集成

## types 类型定义文件更改

## wip 开发中

## node 实体

- express01
- express02
- node-eg 案例文件
- node-express vue-imis-api
- node-update 测试文件夹
- node1
- node2

https://github.com/gothinkster/realworld/tree/master/api

text/html：HTML 格式
text/plain：纯文本格式
text/xml： XML 格式
image/gif：gif 图片格式
image/jpeg：jpg 图片格式
image/png：png 图片格式
application/xhtml+xml：XHTML 格式
application/xml： XML 数据格式
application/atom+xml：Atom XML 聚合格式
application/json：JSON 数据格式
application/pdf：pdf 格式
application/msword： Word 文档格式
application/octet##stream： 二进制流数据（如常见的文件下载）
application/x##www##form##urlencoded：<form encType=" ">中默认的 encType，form 表单数据被编码为 key/value 格式发送到服务器（表单默认的提交数据的格式）
multipart/form##data： 需要在表单中进行文件上传时，就需要使用该格式

https://www.jianshu.com/p/363fd522375e

I still want the best for you 我依然想你得到最好的

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

# http

## 1.HTTP ## 初相识了解 HTTP 协议

### 浏览器背后的原理

### 从 TCP/IP 协议族理解 HTTP 工作原理

http 协议是建立在 TCP/ip 协议上的，是 TCP ip 协议的一个子集

#### TCP/ip 协议族

- 一系列与互联网相关联的协议集合的总称
- 四层协议组成的系统： 应用层 （http） 传输层 （tcp） 网络层（ip） 链路层(网络)

##### 协议系统

- 应用层
  ```
  应用层通过系统调用与传输层通信，如ftp，DNS， HTTP
  ```
- 传输层

  ```
  向应用层提供处于网络连接的两台计算机之间的数据传输功能
  性质不同的协议 TCP  UDP
  ```

  > 重点 面试考点 TCP 三次握手

  - 传输层第一次握手

- 网络层

  ```
  网络层用来处理在网络上流动的数据包
  ```

- 链路层
  ```
  用来处理连接网络的硬件部分，包括控制操作系统，驱动设备
  ```

### DNS 域名解析

### HTTP 与 TCP/IP、DNS 的关系

## 2.HTTP ## 再邂逅熟悉 HTTP 协议结构和通讯原理

### HTTP 协议特点

- 支持客户服务器模式
  ```
  客户端发出请求，服务端响应请求
  ```
- 简单快速
  ```
  客户端请求服务只需要提供请求方法和路径
  常见的get，post，put，方法规定了与服务器联系的类型不同
  http协议简单，服务器规模小，通信简单
  ```
- 灵活
  ```
  1.允许任意类型的数据对象
  2.正在传输的类型由Content-Type标识内容加以标记
  ```
- 无连接
  ```
  限制每次连接只有一个请求
  服务器处理完客户端的请求，并收到客户端应答后，断开连接
  ```
- 无状态
  ```
  HTTP协议是无状态的
  对于事务处理没有记忆能力，缺少状态如果需要前面的信息则需要重传
  ```

### HTTP报文头

> 报文头分类: 通用报文头、请求报文头、响应报文头、实体报文头

- ACCEPT 浏览器可以接受的媒体类型

```
Accept: */*浏览器可以处理所有类型
```
- Accept-Encoding
```
浏览器申明自己可以接收的编码方法 是否支持压缩，支持什么压缩方法 gzip deflate
```
- Accept-Language
```
浏览器申明自己接收的语言
```
- Connection
```
keep-alive 一个网页打开，客户端和服务端之间传输http数据的tcp连接不会关闭
close, 重新建立连接流程
```
- Host
```
主机名 端口号
```
- Referer
```
服务器访问页面的来源地址
```
- User-Agent
```
操作系统 浏览器名称版本
```
- Content-Type 报文体内对象的媒体类型
```
text/html  html 格式
text/plain  text文本格式
text/xml     xml格式
image/gif     gif 格式
image/jpeg    jpeg 格式
image/png   png 格式

```
### 请求响应模型

### 响应状态码拆解

### HTTP 协议的通讯过程

### HTTP 状态管理：Cookie 与 Session

## 3.HTTP ## 渐相知深入认识 HTTP 协议的特性和使用方法

### 编码和解码

### 长连接与短连接

### HTTP 中介之代理／网关／缓存

### 断点续传与多线程下载

## 4.HTTP ## 紧相伴

### 实验使用 HTTP 协议构建应用

### 实验构建 HTTP 请求服务器

### 抓包分析实践

### 请求客户端实验

### 构建运维搭建过程

## 5.HTTP ## 静相依安全的 HTTPS

### HTTPS 加密传输原理

### 从加密技术到 CA 证书

### HTTPS 性能及常见问题

### 实验设计 HTTPS 安全服务建设

## 6.HTTP ## 长相随

### 基于 HTTP 的功能追加协议

### HTTP1.1 升级 HTTP2.0

### WebSocket 的设计与功能

### WebDAV 协议####网盘存储

### HTTP 的大跃进：QUIC 与 HTTP3.0

## 7.HTTP ## 终相守

### Web 安全威胁解析

### 验证机制安全

### 会话管理机制

### 跨站脚本攻击/SQL 注入攻击/CSRF 攻击

### 设计缺陷与安全漏洞
