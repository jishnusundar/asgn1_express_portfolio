var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) => {
  let currentDate = new Date();
  res.render('index', { 
    title: 'Hi there!' ,
  });
});

/* GET projects page. */
router.get('/projects', (req, res, next) => {
  res.render('index', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', (req, res, next) => {
  res.render('index', { title: 'Services' });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('index', { title: 'Who\'s Me?' });
});

/* GET about page. */
router.get('/contact', (req, res, next) => {
  res.render('index', { title: 'Reach Me' });
});



module.exports = router;