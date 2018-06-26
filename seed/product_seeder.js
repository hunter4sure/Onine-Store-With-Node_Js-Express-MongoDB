  var Product = require('../models/product');
  var mongoose = require('mongoose');


  mongoose.connect('mongodb://127.0.0.1:8089/shoppingCart');

  var products = [
      new Product({
          imagePath: 'https://www3.lenovo.com/medias/lenovo-laptop-legion-y720-15-front.png?context=bWFzdGVyfGltYWdlc3wyNTQ5NXxpbWFnZS9wbmd8aW1hZ2VzL2g4Zi9oMjIvOTM1OTk5ODYxNTU4Mi5wbmd8YmQ2NzMzMzY1Mzc0MTE2YjMxMzVlOGMwMTk1ZThiNjFlOTlmOGYxMTEzZWEzNzRmNjY1NTA3NTMyMzkxZWQzMQ',
          title: 'Lenovo Legion Y720 Laptop !!!!!',
          description: 'Be part of the action no matter 1060 discrete graphics. Power + portability = perfection.',
          price: 18000

      }),

      new Product({
          imagePath: 'https://4.imimg.com/data4/AX/EW/MY-3825297/laptop-dell-vastro-2520-500x500.jpg',
          title: 'Dell Legion  Laptop !!!!!',
          description: 'Be part of the action no matter 1060 discrete graphics. Power + portability = perfection',
          price: 4000

      }),


      new Product({
          imagePath: 'http://st1.bgr.in/wp-content/uploads/2018/02/hp-spectre-x360-main-2.jpg',
          title: 'next-generation  x360 !!!',
          description: 'Be part of the action no matter 1060 discrete graphics. Power + portability = perfection',
          price: 17000

      }),

      new Product({
          imagePath: 'https://cdn2.joycemayne.com.au/media/catalog/product/cache/23/image/992x558/9df78eab33525d08d6e5fb8d27136e95/n/x/nxgrmsa004-1.jpg',
          title: 'Acer Spin 1  !!!!!',
          description: 'Be part of the action no matter 1060 discrete graphics. Power + portability = perfection',
          price: 14000

      }),


      new Product({
          imagePath: 'http://laptopreviews.com/wp-content/uploads/2017/03/17-inch-laptops.jpg',
          title: 'ASUS ROG GX700V !!!!!',
          description: 'Be part of the action no matter 1060 discrete graphics. Power + portability = perfection',
          price: 22000

      }),


      new Product({
          imagePath: 'https://s3-us-west-2.amazonaws.com/falconnorthwest/Site/DRX-v10-500w.png',
          title: 'DRX !!!!!',
          description: 'Be part of the action no matter 1060 discrete graphics. Power + portability = perfection',
          price: 33000

      }),
  ];

  var done = 0;
  for (var i = 0; i < products.length; i++) {
      products[i].save(function(err, result) {
          done++;
          if (done === products.length) {

              exit();
          }
      });
  }

  function exit() {
      mongoose.disconnect();
  }