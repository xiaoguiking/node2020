const { json } = require("body-parser");
const fs = require("fs")
const path = require('path');
const { promisify } = require("util")
const readFile = promisify(fs.readFile);

const dbPath = path.join(__dirname, "./db.json")
exports.getDb = async () => {
    const data = await readFile(dbPath, 'utf8')
    return JSON.parse(data)
}