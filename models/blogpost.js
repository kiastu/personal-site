/**
 * Created by kiastu on 05/11/14.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogPostSchema = new Schema({
    title: String,
    content: String,
    date: {type: Date, default: Date.now()}
});
module.exports = mongoose.model('BlogPost', BlogPostSchema);