const util = require("util")
module.exports = () => {
    return (err,req, res, next) => {
        console.log(err, "=========>middleware")
        res.status(500).json({
            error: util.format(err)
        })
    }
}