var express = require('express');
var router = express.Router();




/* GET projects page. */
router.get('/projects', (req, res, next) => {
  res.render('projects', { title: 'Projects'});
});

/* GET services page. */
router.get('/services', (req, res, next) => {
  res.render('others', { title: 'Services' });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('others', { title: 'Who am I?' });
});

/* GET about page. */
router.get('/contact', (req, res, next) => {
  res.render('others', { title: 'Reach Me' });
});

/* GET home page. */
router.get('/', (req, res, next) => {
  let currentDate = new Date();
  res.render('index', { 
    title: 'Hi there!'  , mainContent: 'My name is Jishnu and i\'ve been studying Software Engineering Technology for the last 2 years @ Centennial College. This website is my simple portfolio where most of my accomplishments and interests are posted. Check in to see!'
  });
});


module.exports = router;