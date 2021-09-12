const xlsx = require('node-xlsx');
const fs = require("fs");
const path = require("path");

const { User } = require("../../../model/index");

const pathExcel = path.join(__dirname, "../../../../public/excel");
let excelContent = xlsx.parse(fs.readFileSync(pathExcel + "/file.xlsx"));
// let columnName = excelContent[0].data[0];
let data = excelContent[0].data.slice(1);

let res = [];
data.forEach(list => {
    res.push({
        userName: list[0],
        email: list[1]
    })
})

function addData () {
    console.log(111)
    try {
        User.insertMany(res).then(() => {
            console.log("success")
        })
        .catch((err) => {
            console.log(err)
        })
    } catch (error) {
        
    }
}

addData()