var express = require('express');
var router = express.Router();
var galleryItems = require('../modules/gallery.data');

// GET Route
router.get('/', function (req, res) {
    res.send(galleryItems);
}); // END GET Route

module.exports = router;