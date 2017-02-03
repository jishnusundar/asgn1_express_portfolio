var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) => {
  let currentDate = new Date();
  res.render('index', { 
    title: 'Express' ,
    date: currentDate.toTimeString()
  });
});

/* GET about page. */
router.get('/projects', (req, res, next) => {
  res.render('index', { title: 'Projects' });
});



module.exports = router;