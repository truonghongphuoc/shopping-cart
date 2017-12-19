var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var catagoryRouter = express.Router();

catagoryRouter.route('/catagories')
    .get(function(req, res){
        var response = {hello: "This is api catagories"};

        res.json(response);
    });

app.use('/api', catagoryRouter);


app.get('/', function(req, res){
    res.send('Welcome to my shopping cart')
});

app.listen(port, function(){
    console.log('Running on port: ' + port);
});