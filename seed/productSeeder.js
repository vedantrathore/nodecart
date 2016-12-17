/**
 * Created by nero on 17/12/16.
 */

var Product = require('../models/product');
var faker = require('faker');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/shopping');

var products = [];

var done =0;

for(var i=0;i<100;i++){
    products.push(new Product({
        imagePath: faker.image.imageUrl(),
        title: faker.commerce.productName(),
        description: faker.lorem.words(),
        price: faker.random.number()
    }));
    products[i].save(function (err,result) {
        done++;
        if(done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
