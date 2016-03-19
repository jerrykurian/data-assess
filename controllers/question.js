var Question = require('../models/Question');

/**
 * GET /question/create
 * Contact form page.
 */
exports.getQuestionForm = function(req, res) {
  res.render('question/question', {
    title: 'New Question'
  });
};


/**
 * GET /question/list
 * Contact form page.
 */
exports.list = function(req, res) {
   Question.find(function(err,questions){
    console.log(questions);
    res.render('question/list', {
      title: 'List Of Questions Question',
      questions: questions
    });
  });
};

/**
 * POST /question/create
 * Send a contact form via Nodemailer.
 */
exports.postQuestion = function(req, res) {
  req.assert('question', 'Question cannot be blank').notEmpty();
  req.assert('labels', 'Expected Labels cannot be blank').isEmail();
  req.assert('dataset', 'Expected dataset cannot be blank').notEmpty();
  req.assert('chartoptions', 'Chart options cannot be blank').notEmpty();
  req.assert('expectedcharttype', 'Expected chart type cannot be blank').notEmpty();

  var question = new Question({
      question: req.body.question,
      chartoptions: req.body.chartoptions
    }
  );
  question.answer.expectedcharttype = req.body.expectedcharttype;
  question.answer.expectedlabels = req.body.expectedlabels;
  question.answer.expecteddataset = req.body.expecteddataset;
  
  question.save(function(err) {
      if (err) {
        return next(err);
      }
      req.flash('success', { msg: 'Question Created Successfuly.' });
      res.redirect('/');
    });
}
