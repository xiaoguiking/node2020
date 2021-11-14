/**
 * @api {delete} api/image/:imageId 删除指定素材图片
 * @apiGroup Group   images
 * @apiDescription   删除指定素材图片
 *
 * @apiParam {Boolean} isCollected   是否收藏(是: true 否false)
 */

// http://localhost:3000/api/image/60fcd80d5a25e8f0ecf6cb1f

const {sendJsonResponse} = require("../../common");
const { imageModel } = require("../../../model/index")

module.exports.deleteImage = function (req, res, next) {
    
    try {
        const {imageId} = req.params;
        console.log(imageId, "id")

        imageModel.remove({_id: imageId}, function(err, data)  {
            console.log(data, "==========> data")
            return sendJsonResponse(res, 200, {
                code: "0",
                message: "删除成功",
            })
        })

    } catch (error) {
        next(error)
    }
}
