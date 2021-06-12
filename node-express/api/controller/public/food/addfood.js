/**
 * 接口
 */

const mongoose = require("mongoose");
const common = require("../../common");

const { FoodModel } = require("../../../model/index")

module.exports.addfood = function (req, res) {
    const {
        name,
        price,
        desc,
        typename,
        typeid,
        img
    } = req.body;

    // console.log(
    //     name,
    //     price,
    //     desc,
    //     typename,
    //     typeid,
    //     img)

    // let data = {
    //     name: "11",
    //     price: "111",
    //     desc: "111",
    //     typename: "111",
    //     typeid: "11",
    //     img: "111"
    // };
    let data = {
        name,
        price,
        desc,
        typename,
        typeid,
        img
    };
    console.log(data, "=========>")
    // FoodModel.insertMany(data)
    //     .then((data) => {
    //         console.log(data, "data ========>")
    //         // common.sendResponse(res, 200, data)
    //         res.send({ error: '0', message: "添加成功" })
    //     })
    //     .catch(() => {
    //         res.send({ error: '-1', message: "添加失败" })
    //     })
    FoodModel.insertMany(data, function (err, data) {
        if (err) {
            common.sendJsonResponse(res, 500, err);
        }
        common.sendResponse(res, 200,data)
    })
}

