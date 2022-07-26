//const items = require("../data/items");

'use strict';
const fs = require('fs');
const path = require("path")

exports.GetItem = (item, callback) => {
    let str = path.resolve('./data/items.json');
    let rawdata = fs.readFileSync(str);
    let items = JSON.parse(rawdata);
    callback(undefined, items);
}