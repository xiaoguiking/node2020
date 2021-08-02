/**
 * @api {get} api/proxy/getImooc 
 * @apiGroup Group   proxy
 * @apiDescription   
 *
 */
const http = require("http");
const { sendJsonResponse } = require("../../common");
const util = require("util")

module.exports.getImooc = async (req, res) => {
    // req.send("getImooc")

    http.get("http://www.imooc.com/u/card", function (res) {
        res.setEncoding('utf8');
        let data = "";
        res.on('data', function (chunk) {
            data += chunk;
        })

        res.on("end", function () {
            try {
                // let result = JSON.parse(data)
                // const patt ="(?<=\{)[^}]*(?=\})";
                const regex3 = /\{(.+?)\}/g;
                let result = JSON.parse(data.match(regex3))
                // util.inspect(result)
                console.log( result,"==========> result")
            } catch (e) {
                console.error(e.message);
            }
        })
    })
    res.send("500")
}