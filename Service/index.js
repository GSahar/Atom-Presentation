const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser");
const ItemRoute = require("./routes/items.rout");

const app = express();

const PORT = 5000;
// создаем парсер для данных
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

function server() {

    ItemRoute.itemRoute(app);

    app.use(function (req, res, next) {
        const err = new Error("Указанный вами путь не существует!");
        err.status = 404;
        next(err);
    });

    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err,
        });
    });

    const server = app.listen(PORT, function () {
        console.log("Сервер запущен на порту: " + server.address().port);
    });
}

module.exports.server = server;