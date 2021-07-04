const { body, query } = require('express-validator');
const validate = require("../middleware/validator")
const { User } = require("../api/model/index")
const md5 = require("../utils/md5")

exports.reg = validate([
    // 1.配置验证规则
    body('userName')
        .notEmpty().withMessage("用户名不能为空")
        .custom(async userName => {
            const user = await User.findOne({ userName });
            if (user) {
                return Promise.reject("用户名已存在")
            }
        }),
    body('password')
        .notEmpty().withMessage("密码不能为空")
        .custom(async password => {
            const user = await User.findOne({ password });
            if (user) {
                return Promise.reject("密码已存在")
            }
        }),
    body('email')
        .notEmpty().withMessage("邮箱不能为空")
        .isEmail().withMessage("邮箱格式不正确")
        .bail()
        .custom(async email => {
            const user = await User.findOne({ email });
            if (user) {
                return Promise.reject("邮箱已存在")
            }
        }),
    // 2.判断验证结果
    // (req, res, next) => {
    //     const errors = validationResult(req);
    //     if (!errors.isEmpty()) {
    //         return res.status(400).json({ errors: errors.array() });
    //     }
    //     next(); //验证通过
    // },
    // 3.通过验证执行具体的控制器
])


exports.login = [
    validate([
        query('password')
            .notEmpty().withMessage("密码不能为空"),

        query('email')
            .notEmpty().withMessage("邮箱不能为空")
    ]),
    validate([
        query('email')
            .custom(async (email, { req }) => {
                const user = await User.findOne({ email })
                    .select(["password", 'email', 'userName', 'bio', 'image',]);
                if (!user) {
                    return Promise.reject("用户不存在")
                }
                // 将数据挂载到请求对象中，后续的中间件可以使用 
                // req.query = user;
                req.user = user
                // console.log(req.user, "11")
            }),
    ]),
    validate([
        query('password')
            .custom(async (password, { req }) => {
                console.log(req.user, "11")
                console.log(md5(password), "用户")
                // console.log(req.user.password, "数据库")
                if (md5(password) !== req.user.password) {
                    return Promise.reject("密码错误")
                }
            }),
    ])
]