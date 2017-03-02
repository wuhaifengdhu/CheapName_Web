/**
 * Created by hfwu on 21/2/17.
 */
'use strict';
var localStorage = require('./storage'),
    nameUtil = require('./nameUtil');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {
            site_count: 1200
        });
    });

    app.post('/result', function (req, res) {
        var user_name = req.body.username;
        var sex = req.body.sex;
        var birthday = req.body.birthDay;
        var dateArray = birthday.split('-');
        var year = parseInt(dateArray[0]), month = parseInt(dateArray[1]) - 1, day = parseInt(dateArray[2]) - 1;

        console.log(req.body);
        res.render('result', {
            name: user_name,
            cheap_name: nameUtil.getName(sex, month, day),
            img: nameUtil.getImg(month),
            description: nameUtil.getDes(year)
        });
    });
};