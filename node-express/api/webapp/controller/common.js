/**
 * 通用的配置 
 */
'use strict'
const CODE = {
    SUCCESS: 200,
    PARAM_ERROR: 10001, // 参数错误
    USER_ACCOUNT_ERROR: 20001,  // 账号或者密码错误
    USER_LOGIN_ERROR: 30001,    // 用户未登录
    BUSINESS_ERROR: 40001,   // 请求业务失败
    AUTH_ERROR: 50001        // 认证失败或者token过期
}


const common = {

    sendJsonResponse: function (res, status, json) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        res.status(status);
        return res.json(json);
    },
    sendResponse: function (res, status, msg) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        res.status(status);
        return res.send(msg);
    },

    sendFormResponse: function (res, status, json) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        res.set({ 'Content-Type': 'application/x-www-form-urlencoded' });
        res.set({ 'Accept': '*/*' })
        res.status(status);
        return res.json(json);
    },
    /**
    * 分页结构封装
    * @param {number} pageNum
    * @param {number} pageSize
    */
    pager: function ({ pageNum = 1, pageSize = 20 }) {
        pageNum *= 1;
        pageSize *= 1;
        const skipIndex = (pageNum - 1) * pageSize;
        return {
            page: {
                pageNum,
                pageSize
            },
            skipIndex
        }
    },

    success: function (data = "", msg = "", code = CODE.SUCCESS) {
        return {
            code,
            data,
            msg,
        }
    },
    fail: function (msg = "", data = "", code = CODE.BUSINESS_ERROR) {
        return {
            code,
            data,
            msg,
        }
    }


};
module.exports = common;




