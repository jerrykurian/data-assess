var Question = require('../models/Question');

/**
 * GET /test/start
 * Contact form page.
 */
exports.startTest = function(req, res) {
  res.render('test/start', {
    title: 'Start Test'
  });
};

exports.finish = function(req, res) {
  console.log("Got Data " + JSON.stringify(req.body));

  res.redirect('/');
};

/**
 * GET /test/load
 * Contact form page.
 */
exports.load = function(req, res) {
  Question.find(function(err,questions){
     console.log(questions);
     res.setHeader('Content-Type', 'application/json');
     res.send(questions);
  });
};