var express = require("express");
var app = express();
var rp = require("request-promise");

app.set("view engine", "ejs");
app.get("/", function(req, res){
    res.render("home");
})
//route gold
app.get("/results", function(req, res){
    var options = {
    uri: 'http://api.nbp.pl/api/cenyzlota/',
    qs: {
        access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};
rp(options)
    .then(function (body) {
          var data = body;
          res.render("results", {data: data});
    })
    .catch(function (err) {
        console.log(err)
    });

})
//route gpb
app.get("/results2", function(req, res) {
        var options = {
    uri: 'http://api.nbp.pl/api/exchangerates/rates/a/gbp/last/10/?format=json',
    qs: {
        access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};
rp(options)
    .then(function (body) {
          var data = body;
          res.render("results2", {data: data});
    })
    .catch(function (err) {
        console.log(err)
    });

})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("app started");
});