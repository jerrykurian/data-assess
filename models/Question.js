var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
  question: String,
  chartoptions: String,
  answer: {
    expectedcharttype: Number,
    expectedlabels: String,
    expecteddataset: []
  }
}, { timestamps: true });

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;
