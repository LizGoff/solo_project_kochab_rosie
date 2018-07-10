const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectNonAdmins } = require('../modules/authorization-middleware');

/**
 * TEST
 * GET route template
 */
// router.get('/admin', rejectNonAdmins, (req, res) => {
//     pool.query('SELECT "comment", "id" FROM "comments"')
//     .then(response => res.send(response.rows))
//     .catch(err => res.sendStatus(500));
// });

router.get('/admin', rejectNonAdmins, (req, res) => {
    
});

/**
 * POST route template
 */
router.post('/admin', rejectNonAdmins, (req, res) => {

});

module.exports = router;