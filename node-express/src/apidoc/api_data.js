define({ "api": [
  {
    "type": "get",
    "url": "api/book/:bookId",
    "title": "查询_id获取数据",
    "group": "Group_Book",
    "description": "<p>通过_id查询书籍信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/book/getBookById.js",
    "groupTitle": "Group_Book",
    "name": "GetApiBookBookid"
  },
  {
    "type": "get",
    "url": "api/book/getChannels",
    "title": "获取文章频道/类型",
    "group": "Group_Book",
    "description": "<p>添加书籍信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeid",
            "description": "<p>频道/类型</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/book/getChannels.js",
    "groupTitle": "Group_Book",
    "name": "GetApiBookGetchannels"
  },
  {
    "type": "post",
    "url": "api/book/add",
    "title": "添加文章",
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
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>文章状态</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "createTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updateTime",
            "description": "<p>结束时间</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/book/getInfoByPage.js",
    "groupTitle": "Group_Book",
    "name": "PostApiBookGetinfobypage"
  },
  {
    "type": "put",
    "url": "api/book/:bookId",
    "title": "更新某条数据",
    "group": "Group_Book",
    "description": "<p>更新某条数据</p>",
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
    "filename": "api/controller/public/book/updateBook.js",
    "groupTitle": "Group_Book",
    "name": "PutApiBookBookid"
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
    "url": "api/todos",
    "title": "查询任务列表",
    "group": "Group_TODOS",
    "description": "<p>查询任务列表</p>",
    "version": "0.0.0",
    "filename": "api/routes/public/todos/index.js",
    "groupTitle": "Group_TODOS",
    "name": "GetApiTodos"
  },
  {
    "type": "get",
    "url": "api/todos/:id",
    "title": "根据id查询单个任务",
    "group": "Group_TODOS",
    "description": "<p>根据id查询单个任务</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/public/todos/index.js",
    "groupTitle": "Group_TODOS",
    "name": "GetApiTodosId"
  },
  {
    "type": "patch",
    "url": "api/todos/:id",
    "title": "修改任务",
    "group": "Group_TODOS",
    "description": "<p>修改任务</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/public/todos/index.js",
    "groupTitle": "Group_TODOS",
    "name": "PatchApiTodosId"
  },
  {
    "type": "post",
    "url": "api/todos/add",
    "title": "添加任务",
    "group": "Group_TODOS",
    "description": "<p>添加任务</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/public/todos/index.js",
    "groupTitle": "Group_TODOS",
    "name": "PostApiTodosAdd"
  },
  {
    "type": "put",
    "url": "api/todos:id",
    "title": "删除任务",
    "group": "Group_TODOS",
    "description": "<p>删除任务</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/public/todos/index.js",
    "groupTitle": "Group_TODOS",
    "name": "PutApiTodosId"
  },
  {
    "type": "delete",
    "url": "api/articles/:articleId",
    "title": "删除文章",
    "group": "Group_articles",
    "description": "<p>删除文章</p>",
    "version": "0.0.0",
    "filename": "api/controller/public/article/deleteArticle.js",
    "groupTitle": "Group_articles",
    "name": "DeleteApiArticlesArticleid"
  },
  {
    "type": "get",
    "url": "api/articles/:articleId",
    "title": "获取文章",
    "group": "Group_articles",
    "description": "<p>获取文章</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/article/getArticle.js",
    "groupTitle": "Group_articles",
    "name": "GetApiArticlesArticleid"
  },
  {
    "type": "get",
    "url": "api/articles/getArticlesList",
    "title": "获取文章列表",
    "group": "Group_articles",
    "description": "<p>获取文章</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>展示多少条</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offset",
            "description": "<p>跳过几条</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>文章tag</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>筛选某个作者发布的文章</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/article/getArticlesList.js",
    "groupTitle": "Group_articles",
    "name": "GetApiArticlesGetarticleslist"
  },
  {
    "type": "post",
    "url": "api/articles/",
    "title": "创建文章",
    "group": "Group_articles",
    "description": "<p>创建文章</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>文章内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>文章内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/article/createArticle.js",
    "groupTitle": "Group_articles",
    "name": "PostApiArticles"
  },
  {
    "type": "post",
    "url": "api//articles/:slug/comments",
    "title": "获取文章评论",
    "group": "Group_articles",
    "description": "<p>获取文章评论</p>",
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
    "filename": "api/controller/public/article/likeArticle.js",
    "groupTitle": "Group_articles",
    "name": "PostApiArticlesSlugComments"
  },
  {
    "type": "post",
    "url": "api/articles/:slug/comments",
    "title": "获取文章路由",
    "group": "Group_articles",
    "description": "<p>关注用户</p>",
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
    "filename": "api/controller/public/article/unlikeArticle.js",
    "groupTitle": "Group_articles",
    "name": "PostApiArticlesSlugComments"
  },
  {
    "type": "post",
    "url": "api/articles/:slug/comments/:id",
    "title": "删除评论",
    "group": "Group_articles",
    "description": "<p>删除评论</p>",
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
    "filename": "api/controller/public/article/deleteComment.js",
    "groupTitle": "Group_articles",
    "name": "PostApiArticlesSlugCommentsId"
  },
  {
    "type": "put",
    "url": "api/articles/:articleId",
    "title": "更新文章",
    "group": "Group_articles",
    "description": "<p>更新文章</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/article/updateArticle.js",
    "groupTitle": "Group_articles",
    "name": "PutApiArticlesArticleid"
  },
  {
    "type": "delete",
    "url": "api/image/:imageId",
    "title": "删除指定素材图片",
    "group": "Group_images",
    "description": "<p>删除指定素材图片</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isCollected",
            "description": "<p>是否收藏(是: true 否false)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/image/deleteImage.js",
    "groupTitle": "Group_images",
    "name": "DeleteApiImageImageid"
  },
  {
    "type": "get",
    "url": "api/image/collectImage",
    "title": "收藏图片",
    "group": "Group_images",
    "description": "<p>收藏图片</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isCollected",
            "description": "<p>是否收藏(是: true 否false)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>指定id值</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/image/collectImage.js",
    "groupTitle": "Group_images",
    "name": "GetApiImageCollectimage"
  },
  {
    "type": "get",
    "url": "api/image/getImages",
    "title": "查询分页获取图片素材",
    "group": "Group_images",
    "description": "<p>分页获取图片素材</p>",
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
    "filename": "api/controller/public/image/getImages.js",
    "groupTitle": "Group_images",
    "name": "GetApiImageGetimages"
  },
  {
    "type": "delete",
    "url": "api/profiles/:username/follow",
    "title": "取消关注",
    "group": "Group_user",
    "description": "<p>取消关注</p>",
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
    "filename": "api/controller/public/user/unfollowUser.js",
    "groupTitle": "Group_user",
    "name": "DeleteApiProfilesUsernameFollow"
  },
  {
    "type": "get",
    "url": "api/profiles/:username",
    "title": "获取当前用户资料",
    "group": "Group_user",
    "description": "<p>获取当前用户资料</p>",
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
    "filename": "api/controller/public/user/getUserInfo.js",
    "groupTitle": "Group_user",
    "name": "GetApiProfilesUsername"
  },
  {
    "type": "get",
    "url": "api/user",
    "title": "获取当前用户登录信息",
    "group": "Group_user",
    "description": "<p>获取当前用户登录信息</p>",
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
    "filename": "api/controller/public/user/getuser.js",
    "groupTitle": "Group_user",
    "name": "GetApiUser"
  },
  {
    "type": "get",
    "url": "api/users/login",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/user/login.js",
    "groupTitle": "Group_user",
    "name": "GetApiUsersLogin"
  },
  {
    "type": "post",
    "url": "api//articles/:slug/comments",
    "title": "获取文章路由",
    "group": "Group_user",
    "description": "<p>关注用户</p>",
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
    "filename": "api/controller/public/article/getTag.js",
    "groupTitle": "Group_user",
    "name": "PostApiArticlesSlugComments"
  },
  {
    "type": "post",
    "url": "api/profiles/:username/follow",
    "title": "关注用户",
    "group": "Group_user",
    "description": "<p>关注用户</p>",
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
    "filename": "api/controller/public/user/focusUser.js",
    "groupTitle": "Group_user",
    "name": "PostApiProfilesUsernameFollow"
  },
  {
    "type": "post",
    "url": "api/users/put",
    "title": "更新当前用户信息",
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
    "filename": "api/controller/public/user/updateuser.js",
    "groupTitle": "Group_user",
    "name": "PostApiUsersPut"
  },
  {
    "type": "post",
    "url": "api/users/reg",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controller/public/user/reg.js",
    "groupTitle": "Group_user",
    "name": "PostApiUsersReg"
  }
] });
