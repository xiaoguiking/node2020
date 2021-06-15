/**
 * 接口  
 * 更新
 *  api/food/update
 */

/**
 * @api {post} api/food/update  更新某条数据
 * @apiGroup Group   food
 * @apiDescription   分页获取数据
 *
 * @apiParam {String} name  书籍名
 * @apiParam {String} price 价格
 * @apiParam {String} desc 描述
 * @apiParam {String} typename 书籍类型
 * @apiParam {String} typeid   类型id
 * @apiParam {String} img   图片
 * @apiParam {String} _id   唯一id
 */
const mongoose = require("mongoose");
const common = require("../../common");

const { FoodModel } = require("../../../model/index")

module.exports.update = function (req, res) {
    const {
        name,
        price,
        desc,
        typename,
        typeid,
        img,
        _id
    } = req.body;
    // let data = {
    //     name,
    //     price,
    //     desc,
    //     typename,
    //     typeid,
    //     img,
    // }
    // console.log(_id, data, "========>")
    console.log(_id, "========")
    FoodModel.updateMany({ _id }, {
        name,
        price,
        desc,
        typename,
        typeid,
        img,
    }, function (err, data) {
        if (_id.length > 0) {
            common.sendResponse(res, 200, {
                error: "0",
                message: "update ok",
                list: data
            })
        } else {
            common.sendResponse(res, 200, {
                error: "-1",
                message: "update fail",
            })
        }
    })
}

