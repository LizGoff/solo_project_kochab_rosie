const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  const queryText = 'SELECT "subtopic" FROM subtopics';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing GET subtopics query', err);
      res.sendStatus(500);
    });
});

router.get('/subtopics/:id', (req, res) => {
  const queryText = 'SELECT * FROM subtopics WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows); }) 
    .catch((err) => {
      console.log('Error completing GET subtopics query', err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  const newTopic = req.body;
  const queryText = `INSERT INTO subtopics ("subtopic", "user_id", "topic_id")
                    VALUES ($1, $2, $3)`;
  const queryValues = [
    newTopic.subtopic,
    newTopic.user_id,
    newTopic.topic_id,
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing POST subtopic query', err);
      res.sendStatus(500);
    });
});

router.put('/', (req, res) => {
  const newPlant = req.body;

  const queryText = `UPDATE subtopics
  SET "subtopic" = $1, 
  "user_id" = $2, 
  "topic_id" = $3, 
  WHERE id=$4;`; 

  const queryValues = [
    updatedTopic.subtopic,
    updatedTopic.user_id,
    updatedTopic.topic_id,
    updatedTopic.id,
  ];

  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing PUT subtopics query', err);
      res.sendStatus(500);
    });
});

router.delete('/', (req, res) => {
  const queryText = 'DELETE FROM plant WHERE id=$1';
  pool.query(queryText, [req.query.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing DELETE query', err);
      res.sendStatus(500);
    });
});

module.exports = router;
