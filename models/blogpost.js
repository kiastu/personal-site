/**
 * Created by kiastu on 05/11/14.
 */
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var BlogPostSchema = new Schema({
    title: String,
    content: String,
    date: {type: Date, default: Date.now()}
});
BlogPostSchema.plugin(autoIncrement.plugin, 'BlogPost');
module.exports = mongoose.model('BlogPost', BlogPostSchema);