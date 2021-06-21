define({ "api": [
  {
    "type": "post",
    "url": "api/book/add",
    "title": "添加",
    "group": "Group_Book",
    "description": "<p>添加书籍信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>书籍名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typename",
            "description": "<p>书籍类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeid",
            "description": "<p>类型id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>文章状态</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/book/addBook.js",
    "groupTitle": "Group_Book",
    "name": "PostApiBookAdd"
  },
  {
    "type": "post",
    "url": "api/book/delete",
    "title": "删除指定的数据",
    "group": "Group_Book",
    "description": "<p>删除指定书籍信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>唯一id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/book/deleteBook.js",
    "groupTitle": "Group_Book",
    "name": "PostApiBookDelete"
  },
  {
    "type": "post",
    "url": "api/book/find",
    "title": "查询typeid 类型id获取数据",
    "group": "Group_Book",
    "description": "<p>通过类型查询书籍信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeid",
            "description": "<p>类型id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/book/findBook.js",
    "groupTitle": "Group_Book",
    "name": "PostApiBookFind"
  },
  {
    "type": "post",
    "url": "api/book/getInfoByPage",
    "title": "查询分页获取数据",
    "group": "Group_Book",
    "description": "<p>分页获取数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>多少页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页展示多少条</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/book/infopage.js",
    "groupTitle": "Group_Book",
    "name": "PostApiBookGetinfobypage"
  },
  {
    "type": "post",
    "url": "api/book/update",
    "title": "更新某条数据",
    "group": "Group_Book",
    "description": "<p>分页获取数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>书籍名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typename",
            "description": "<p>书籍类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeid",
            "description": "<p>类型id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>文章状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>唯一id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/book/updateBook.js",
    "groupTitle": "Group_Book",
    "name": "PostApiBookUpdate"
  },
  {
    "type": "post",
    "url": "file/photos/upload",
    "title": "多文件上传",
    "group": "Group_File",
    "description": "<p>多文件上传</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photos",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/public/file/index.js",
    "groupTitle": "Group_File",
    "name": "PostFilePhotosUpload"
  },
  {
    "type": "post",
    "url": "file/profile",
    "title": "单文件上传",
    "group": "Group_File",
    "description": "<p>单文件上传</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/public/file/index.js",
    "groupTitle": "Group_File",
    "name": "PostFileProfile"
  },
  {
    "type": "get",
    "url": "api/user/login",
    "title": "用户登录",
    "group": "Group_user",
    "description": "<p>用户登录信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/login.js",
    "groupTitle": "Group_user",
    "name": "GetApiUserLogin"
  },
  {
    "type": "post",
    "url": "api/user/put",
    "title": "更新用户信息",
    "group": "Group_user",
    "description": "<p>更新用户信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>唯一id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/updateuser.js",
    "groupTitle": "Group_user",
    "name": "PostApiUserPut"
  },
  {
    "type": "post",
    "url": "api/user/reg",
    "title": "用户注册",
    "group": "Group_user",
    "description": "<p>用户注册</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/reg.js",
    "groupTitle": "Group_user",
    "name": "PostApiUserReg"
  }
] });
