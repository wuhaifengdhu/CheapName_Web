/**
 * Created by hfwu on 21/2/17.
 */
'use strict';
var localStorage = require('./storage'),
    nameUtil = require('./nameUtil'),
    queryString = require('querystring');

module.exports = function (app) {
    var key = "count", count;

    if(localStorage.getItem(key)){
        count = localStorage.getItem(key);
    } else {
        count = 1200;
    }
    app.get('/', function (req, res) {
        res.render('index', {
            site_count: count
        });
    });

    app.post('/result', function (req, res) {
        console.log(req.body);
        var user_name = req.body.username;
        var sex = req.body.gender;
        var birthday = req.body.birthday;
        var dateArray = birthday.split('/');
        var year = parseInt(dateArray[2]), month = parseInt(dateArray[0]) - 1, day = parseInt(dateArray[1]) - 1;


        count += 1;
        console.log("count: " + count);
        localStorage.setItem(key, count);
        res.render('result', {
            name: user_name,
            cheap_name: nameUtil.getName(sex, month, day),
            img: nameUtil.getImg(month),
            description: nameUtil.getDes(year)
        });
    });
};