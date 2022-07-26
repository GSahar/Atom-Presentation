const { ItemList } = require("../controllers/item.controller");

exports.itemRoute = function (app) {
    app.get("/items/", ItemList);
}