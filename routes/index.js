var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
    Product.find(function(err, docs) {
        var productArray = [];
        var arraySize = 3;
        for (var i = 0; i < docs.length; i += arraySize) {

            productArray.push(docs.slice(i, i + arraySize));
        }

        res.render('shop/index', { title: 'Shopping Cart', products: productArray });
    });
});

module.exports = router;