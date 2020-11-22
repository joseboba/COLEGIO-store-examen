'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = Schema({
    name: String,
    description: String,
    price: String,
    provider: String,
    stock: Number,
    stars: Number
});

module.exports = mongoose.model('product', productSchema);