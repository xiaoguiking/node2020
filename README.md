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
application/octet##stream： 二进制流数据（如常见的文件下载）
application/x##www##form##urlencoded：<form encType=" ">中默认的encType，form表单数据被编码为key/value格式发送到服务器（表单默认的提交数据的格式）
multipart/form##data： 需要在表单中进行文件上传时，就需要使用该格式

https://www.jianshu.com/p/363fd522375e



I still want the best for you  我依然想你得到最好的


# http

## 1.HTTP ## 初相识了解HTTP协议
### 浏览器背后的原理

### 从TCP/IP协议族理解HTTP工作原理

http 协议是建立在TCP/ip协议上的，是TCP ip 协议的一个子集
#### TCP/ip 协议族

- 一系列与互联网相关联的协议集合的总称
- 四层协议组成的系统： 应用层 （http） 传输层 （tcp）  网络层（ip） 链路层(网络)

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

### DNS域名解析

### HTTP与TCP/IP、DNS的关系


## 2.HTTP ## 再邂逅熟悉HTTP协议结构和通讯原理
### HTTP协议特点
### 请求响应模型
### 响应状态码拆解
### HTTP协议的通讯过程
### HTTP状态管理：Cookie与Session

## 3.HTTP ## 渐相知深入认识HTTP协议的特性和使用方法
### 编码和解码
### 长连接与短连接
### HTTP中介之代理／网关／缓存
### 断点续传与多线程下载

## 4.HTTP ## 紧相伴
### 实验使用HTTP协议构建应用
### 实验构建HTTP请求服务器
### 抓包分析实践
### 请求客户端实验
### 构建运维搭建过程


## 5.HTTP ## 静相依安全的HTTPS
### HTTPS加密传输原理
### 从加密技术到CA证书
### HTTPS性能及常见问题
### 实验设计HTTPS安全服务建设

## 6.HTTP ## 长相随
### 基于 HTTP 的功能追加协议
### HTTP1.1升级HTTP2.0
### WebSocket 的设计与功能
### WebDAV协议####网盘存储
### HTTP的大跃进：QUIC与HTTP3.0

## 7.HTTP ## 终相守
### Web安全威胁解析
### 验证机制安全
### 会话管理机制
### 跨站脚本攻击/SQL注入攻击/CSRF攻击
### 设计缺陷与安全漏洞
