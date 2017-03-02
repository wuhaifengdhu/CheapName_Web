/**
 * Created by hfwu on 21/2/17.
 */
'use strict';
var localStorage = require('./storage');
var nameUtil = require('./name');

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

        console.log(req.body);
        res.render('result', {
            name: user_name,
            cheap_name: sex,
            description: birthday
        });
    });
};