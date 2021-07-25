/**
 * @api {get} api/image/collectImage 收藏图片
 * @apiGroup Group   images
 * @apiDescription   收藏图片
 *
 * @apiParam {Boolean} isCollected   是否收藏(是: true 否false)
 * @apiParam {String}  _id    指定id值  
 */

// 60fc2b1f8c2ff5cf1d06ba74

const {sendJsonResponse} = require("../../common");
const mongoose = require("mongoose")
const { imageModel } = require("../../../model/index")

module.exports.collectImage =  async function (req, res, next) {
    try {
        const collectImage = req.query;
        console.log(mongoose.isValidObjectId(collectImage._id), "检测")
        
        const image = await imageModel.findById(collectImage._id)
        image.isCollected = collectImage.isCollected || false;
        image.url = image.url;
        await image.save();

        return sendJsonResponse(res, 200, {
            code: "0",
            message: "收藏成功",
            imageList: image
        })
    } catch (error) {
        next(error)
    }
}
