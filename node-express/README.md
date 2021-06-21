## 业务接口

- 增加 true  api/food/add
- 查询 true   api/food/find
- 关键字查询  api/food/getInfoByPage
- 分页查询   
- 删除    api/food/delete
- 修改    api/food/update
- 上传图片 /file/profile ---- 支持单文件上传/ 文件名事件数戳
type:

- 玄幻 1
- 思想 2
- 字典 3
- 恋爱 4


## 测试接口  CRUD 任务列表
- 查询任务列表 GET  /todos
- 根据id查询单个任务  GET  /todos/:id
- 添加任务   POST  /todos
- 修改任务  PATCH  /todos
- 删除任务  DELETE /todos:id


## apidoc

- api文档生成命令 apidoc -i ./api -o ./src/apidoc 
- 本地服务器文档启动命令 yarn api



## 解决跨域


## todos
```
今天配接口，使用fs模块读取json出现了错误'no such file or directory'，然后经查终于解决，特此记录。

使用nodejs的fs模块读取文件时习惯用相对路径，但是运行的时候出现了上述的错误，原因就是fs模块读取文件的相对路径是以启动server.js的位置为基准的，而不是以server.js文件的位置。 
```