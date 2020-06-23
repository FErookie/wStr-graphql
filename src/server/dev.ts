const Koa = require('koa');
const conf = require('../../config');

const app = new Koa();
app.listen(conf.port, function () {
    console.log("bingo");
});
