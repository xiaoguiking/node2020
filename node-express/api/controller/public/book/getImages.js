/**
 * @api {get} api/book/getImages 查询分页获取图片素材
 * @apiGroup Group   Book
 * @apiDescription   分页获取图片素材
 *
 * @apiParam {String} page          多少页
 * @apiParam {String} pageSize      每页展示多少条
 */

// x-www-form-urlencode
const common = require("../../common");
const { imageModel } = require("../../../model/index")

module.exports.getImages = function (req, res) {
    let page = req.query.page || 1;  // 第几页
    let pageSize = req.query.pageSize || 15;
    let isCollected = req.query.isCollected;

    let query = {};

    if (isCollected) {
        query = {
            isCollected
        }
    }
    
    if (isCollected == "false") {
        query= {};
    }   

    imageModel.find({}, function (err, data) {
        if (err) return common.sendResponse(res, 500, {
            result: 1,
            error_info: '请求失败！'
        })

        let count = data.length;
        // console.log(count, "count");
        console.log(query, "query")
        imageModel.find(query).limit(Number(pageSize)).skip(Number(page - 1) * pageSize).exec(function (err, data) {
            if (err) return  common.sendResponse(res, 500, {
                error:" -1",
                error_info: '服务器繁忙，请稍后重试！'
            })
            console.log(data, "===========>data")
            return common.sendJsonResponse(res, 200, {
                error: "0",
                message: '请求成功',
                total: count,
                page,
                pageSize,
                list: data
            })
        })
    })
}
