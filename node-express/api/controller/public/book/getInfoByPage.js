/**
 * @api {post} api/book/getInfoByPage  查询分页获取数据
 * @apiGroup Group   Book
 * @apiDescription   分页获取数据
 *
 * @apiParam {String} page          多少页
 * @apiParam {String} pageSize      每页展示多少条
 * @apiParam {Number} status        文章状态
 * @apiParam {Date} createTime     开始时间
 * @apiParam {Date} updateTime     结束时间
 */

// x-www-form-urlencode
const common = require("../../common");
const { BookModel } = require("../../../model/index")

module.exports.getInfoByPage = function (req, res) {
    let page = req.body.page || 1;  // 第几页
    let pageSize = req.body.pageSize || 15;
    let status = req.body.status;
    let createTime = req.body.createTime;
    let updateTime = req.body.updateTime;
    let query = {};

    if (status !== null ) {
        query = {
        status
        }
    }
    
    if (createTime && updateTime) {
        console.log(createTime, updateTime, "时间")
        query = {
            createTime: {$gte: new Date(createTime) },
            updateTime: {$lt: new Date(updateTime) }
        }

    }

    BookModel.find({}, function (err, data) {
        if (err) return common.sendResponse(res, 500, {
            result: 1,
            error_info: '请求失败！'
        })

        let count = data.length;
        // console.log(count, "count");
        console.log(query, "query")
        BookModel.find(query).limit(Number(pageSize)).skip(Number(page - 1) * pageSize).exec(function (err, data) {
            if (err) return  common.sendResponse(res, 500, {
                result: -1,
                error_info: '服务器繁忙，请稍后重试！'
            })
            console.log(data, "===========>data")
            return common.sendJsonResponse(res, 200, {
                result: 0,
                message: '请求成功',
                total: count,
                page,
                pageSize,
                list: data
            })
        })
    })
}
