const { GetItem } = require("../models/item.model");
/*Список исторических пользователей */
exports.ItemList = (req, result, next) => {
    GetItem(req.params, (err, res) => {
        if (!res) {
            const error = new Error("Данные не найдены!");
            error.status = 404;
            error.message = error.message;
            return next(error);
        }
        if (err) {
            const error = new Error("Ошибка приложения!");
            error.status = 500;
            error.message = err?.message ? err.message : error.message;
            return next(error);
        }
        result.send(res);
    });

};