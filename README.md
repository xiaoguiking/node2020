# node2020

express

[TOC]

> Commonjs 是模块化的标准，nodejs 是 CommonJs 模块化的实现

Commonjs 自定义模块的使用

```
通过 exports 或者 module.exports 暴露属性或者方法
在需要使用的文件中通过 require 的方式引入这个模块
https://www.bilibili.com/video/BV11t411k79h?p=29

```

- Git 贡献提交规范

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
- node-eg 案例文件
- node-express vue-imis-api
- node-update 测试文件夹
- node1
- node2

https://github.com/gothinkster/realworld/tree/master/api

**http 传输格式**

```
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

https://www.jianshu.com/    p/363fd522375e
```

I still want the best for you 我依然想你得到最好的


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

### HTTP 报文头

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

> 网页服务器超文本传输协议响应状态的 3 位数字代码

| 分类 | 含义           |
| ---- | -------------- |
| 1xx  | 表示消息       |
| 2xx  | 表示成功       |
| 3xx  | 表示重定向     |
| 4xx  | 表示请求错误   |
| 5xx  | 表示服务器错误 |

**详细说明**

| 状态码 | 英文名称              | 含义                                                       | 场景     |
| ------ | --------------------- | ---------------------------------------------------------- | -------- |
| 200    | ok                    | 请求成功，请求希望的响应头或者数据体已经返回               |
| 202    | Accepted              | 已接收， 已经接受请求，但未处理完成                        |
| 206    | partial content       | 服务器成功处理了部分内容                                   | 断点续传 |
| 301    | moved permanently     | 永久移动请求资源已经被永久移动到新 url                     |
| 302    | found                 | 临时移动                                                   |
| 400    | bad request           | 客户端请求错误，服务器无法理解                             |
| 401    | Unanthorized          | 请求用户的身份凭证                                         |
| 403    | Forbidden             | 服务器理解请求客户端的请求，但是拒绝处理                   |
| 404    | Not Found             | 服务器无法根据客户端的请求找到资源 网页                    |
| 500    | Internal Server Error | 服务器内部错误，无法完成请求                               |
| 502    | Bad GetWay            | 充当网关或者代理的服务器，从远端服务器收到了一个无效的请求 |

### HTTP 协议的通讯过程

### HTTP 状态管理：Cookie 与 Session

- cookie

```
cookie 小段的文本信息，客户端请求服务器如果服务器需要记录该用户的状态，就向客户端浏览器颁发一个cookie。
客户端浏览器将cookie 存储，请求的时候携带cookie 发送给服务端，服务器用来识别用户。
```

    - cookie 工作原理
      - 1.发送请求
      - 2.服务器set-cookie
      - 3.返回服务器响应结果
      - 4.客户端读取set-cookie
      - 5.再次发送请求
      - 6.服务器检查cookie 返回请求结果

- session
  ```
  客户端浏览器访问服务器的时候，服务器把客户端信息以某种形式记录在服务器上。
  客户端浏览器再次访问只需要查询到session的状态就可以
  ```

> cookie 和 session 区别对比

| 对比点           | cookie                     | session      |
| ---------------- | -------------------------- | ------------ |
| 存储位置不同     | 客户端浏览器 可见          | 服务端       |
| 安全性不同       | 客户端可见写入敏感信息加密 | 服务端不可见 |
| 有效期不同       | cookie 可以设置日期        | 定期清理     |
| 对服务器压力不同 | cookie 不影响              | 多时有压力   |

## 3.HTTP ## 渐相知深入认识 HTTP 协议的特性和使用方法

### 编码和解码

- 常见的编码规范介绍

  ```
  ASCII编码
  gbk 编码
  iso8859-1
  unicode
  ```

- 乱码由来

```

```

- URL 编码解码

```
比如 &(保留字) 特殊字符
url中使用保留字需要编码，

加入

encodeURI()是Javascript中真正用来对URL编码的函数。
encodeURI decodeURI
```

### http 协议身份认证

- 常见的认证方式
  - BASIC 认证 基本认证
  - DIGEST 认证 摘要认证
  - SSL 客户端认证
    ```
    https 客户端证书确认
    ```
  - Form base 表单认证

### 长连接与短连接

> HTTP 协议是基于请求和响应模式，服务端响应,本次请求结束

> HTTP 长链接和短连接本质是 TCP 的长链接和短连接。

> HTTP1.0 中，默认使用的是短连接，浏览器和服务器的建立一次请求，结束就中断

> HTTP1.1 中，默认使用长链接，保持连接特性。

- 短连接

  ```
  建立连接------数据传输-------关闭连接 ， 建立连接-------数据传输---------关闭连接
  ```

- 长连接
  ```
  建立连接---------数据传输(保持连接) ...数据传输-------- 关闭连接
  ```

### HTTP 中介之代理／网关／缓存

#### 代理演示：

```
web浏览器------http-------web代理------http------- 服务端
```

#### 网关

- 常见的网关类型
  - HTTP/\*服务器端 web 网关
  - HTTP/HTTPS 服务器端安全网关
  - HTTPS/HTTP 客户端安全加速器网关
  - 资源网关

#### 缓存

- 为什么要使用http缓存
  ```
  
  ```

- 缓存的内容是指什么
  ```
  1.样式css
  2.js
  3.图片静态资源文件

  ```
- HTTP缓存头部字段
  - Cache-Control
  
    请求/响应头， 缓存控制字段
    ![请求]( "Cache-Control")
    ![响应]( "Cache-Control")
  - 缓存改进方案
    - md5/hash 缓存
      ```
      通过不缓存html，为静态文件添加hash标识，主动去感知文件变化
      ```
    - cdn缓存 内容分发网络
      cdn缓存工作方式
  
#### 内容协商机制

 > 客户端和服务端就响应的资源内容进行交涉，然后提供给客户端最为合适的资源，内容协商会以响应资源的语言，字符、编码等方式作为判断的依据。

 - 内容协商方式
   - 客户端驱动
   ```
    客户端发送请求，服务器发送可选项列表，客户端做出选择后发送第二次请求
   ```
   - 服务器驱动
    ```
    服务器检查客户端的请求头部集并返回某个版本的页面。
    ```
    - 请求头部集
      - Accept 通知服务器发送哪种媒体类型
      - Accept-Language通知服务器发送何种语言
      - Accept-Charset  告诉服务器发送何种字符集
      - Accept-Encoding  告诉服务器采用何种编码
    - 响应头部
        - Content-Type 通知服务器发送哪种媒体类型
        - Content-Language通知服务器发送何种语言
        - Content-Encoding  告诉服务器采用何种编码
   - 透明协商
      ```
      某个中间设备(缓存代理)代表客户端进行协商。
      ```
### 断点续传与多线程下载

> HTTP 通过Header的两个参数实现，客户端发送请求Range， 服务端对应响应的是Content-Range

- Content-page
  ```
  返回的响应头的内容不同
  http1.1  200   ok 不使用断点续传方式
  http1.1 206 Parial Content 使用断点续传方式
  ```

- 断点续传过程
  - 开始： 客户端下载一个1024kb文件，下载512kb中断后
  - 中途： 续传 Range:bytes:51200- 通知文件开始的传输位置
  - 结束： Content-Range: bytes 512000 -/1024000 返回206

## 4.HTTP ## 紧相伴

### 实验使用 HTTP 协议构建应用

### 实验构建 HTTP 请求服务器

### 抓包分析实践

### 请求客户端实验

### 构建运维搭建过程

## 5.HTTP ## 静相依安全的 HTTPS

### http 与https

> 回顾

```
应用层HTTP ---SSL(tsl)--- 传输层TCP -------- 网络层IP ------- 链路层 网络
```
http

> 证书机构： 证书颁发机构------- 服务端网址 -------- 机构私钥加密(服务端公钥) ---------- 机构私钥加密(证书签名)
- https 概述
  - HTTPS = HTTP + TSL(传输层加密协议前身是SSL协议)
  -  功能介绍
     - 内容加密
        - 非对称密钥交换
        - 对称内容加密
     - 身份验证
        - 数字认证
     - 数据完整性







- https成本
  - https 耗费更多服务器
  - 降低用户访问速度，增加资源消耗
  - 证书费用更新维护

- https性能
  - 协议交互增加的网络RTT
  - 加解密相关的计算耗时
    - 浏览器计算耗时
    - 服务端计算耗时
    - 

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
