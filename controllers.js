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

    app.get('/result', function (req, res) {
        res.redirect('/');
    });

    app.post('/result', function (req, res) {
        console.log(nameUtil.getClientIp(req));
        console.log(req.body);
        var sex = req.body.gender || 0;
        var birthday = req.body.birthday || "1990/06/15";
        console.log(birthday);
        var dateArray = birthday.split('/');
        var year = parseInt(dateArray[0]), month = parseInt(dateArray[1]) - 1, day = parseInt(dateArray[2]) - 1;
        var name = nameUtil.getName(sex, month, day);
        var img_url = nameUtil.getImg(name);

        count += 1;
        console.log("count: " + count);
        localStorage.setItem(key, count);
        res.render('result', {
            cheap_name: name,
            img: img_url,
            year: year,
            zodiac: nameUtil.getZodiac(year),
            description: nameUtil.getDes(year)
        });
    });
};