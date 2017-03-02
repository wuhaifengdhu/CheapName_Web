var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser');

var app = express();

var port = process.env.HEALTH_PORT || 6080;

app.set('view engine', 'ejs');

app.use(session({
    secret: 'FDSJKLAJNBDAKLCXIUHBFKJFGHKAKJFDFSFJBKHVNLKZCXMZKXJVHFDAJKHFD',
    resave: false,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended: true}));

require('./controllers')(app);

app.use(express.static('views'));

app.listen(port, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Application ready to serve requests on port ' + port);
    }
});