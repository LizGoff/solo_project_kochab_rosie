const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// POST

router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    const queryText = `INSERT INTO links ("url", "topic_id", "user_id")
                      VALUES ($1, $2, $3) RETURNING "url";`;
    pool.query(queryText, [req.body.url, req.body.topic, req.user.id])
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error completing POST link query', err);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403);
  }
});

// GET

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {

    const queryText = `SELECT * FROM "links" 
    LEFT JOIN "topics" ON "links"."topic_id" = "topics"."id"
    ORDER BY "links"."topic_id"`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing GET links query', err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }

});

module.exports = router;