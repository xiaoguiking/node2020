define({ "api": [
  {
    "type": "post",
    "url": "api/food/add",
    "title": "添加",
    "group": "Group_food",
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
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/food/addfood.js",
    "groupTitle": "Group_food",
    "name": "PostApiFoodAdd"
  },
  {
    "type": "post",
    "url": "api/food/delete",
    "title": "删除指定的数据",
    "group": "Group_food",
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
    "filename": "api/controller/public/food/deletefood.js",
    "groupTitle": "Group_food",
    "name": "PostApiFoodDelete"
  },
  {
    "type": "post",
    "url": "api/food/find",
    "title": "查询typeid 类型id获取数据",
    "group": "Group_food",
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
    "filename": "api/controller/public/food/findfood.js",
    "groupTitle": "Group_food",
    "name": "PostApiFoodFind"
  },
  {
    "type": "post",
    "url": "api/food/getInfoByPage",
    "title": "查询分页获取数据",
    "group": "Group_food",
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
            "field": "typeid",
            "description": "<p>每页展示多少条</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/food/infopage.js",
    "groupTitle": "Group_food",
    "name": "PostApiFoodGetinfobypage"
  },
  {
    "type": "post",
    "url": "api/food/update",
    "title": "更新某条数据",
    "group": "Group_food",
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
            "field": "_id",
            "description": "<p>唯一id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/food/updatefood.js",
    "groupTitle": "Group_food",
    "name": "PostApiFoodUpdate"
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
