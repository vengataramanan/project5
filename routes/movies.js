var express = require('express');
var router = express.Router();
var moviescontroller=require('../controller/moviescontroller');

/* GET users listing. */
router.get('/all', moviescontroller.getAllmovies)
.post('/add',moviescontroller.addNewMovie);
module.exports = router;
