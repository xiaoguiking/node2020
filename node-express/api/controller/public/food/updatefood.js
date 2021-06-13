/**
 * 接口  
 * 更新
 *  api/food/update
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

