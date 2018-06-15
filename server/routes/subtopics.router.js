const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// subtopic database

// POST
router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    const queryText = `INSERT INTO subtopics ("subtopic", "topic_id", "person_id")
                      VALUES ($1, $2, $3) RETURNING "subtopic";`;
    pool.query(queryText, [req.body.subtopic, req.body.topic, req.user.id])
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error completing POST subtopic query', err);
        res.sendStatus(500);
      })
  } else { 
    res.sendStatus(403);
  }
});

// GET

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {

    const queryText = 'SELECT * FROM subtopics';
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing GET subtopic query', err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

router.get('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    const queryText = 'SELECT * FROM subtopics WHERE "topic_id"=$1;'
    pool.query(queryText, [req.params.id])
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing GET subtopic query', err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

// DELETE

router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    const deleteInfo = req.params.id;
    pool.query('DELETE FROM "subtopics" WHERE "id"=$1 AND "person_id" = $2;', [deleteInfo, req.user.id])
      .then((result) => {
        res.sendStatus(200);
      }).catch((error) => {
        console.log('error DELETE SQL subtopic INSERT', error)
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

// PUT

router.put('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    const newSubtopic = req.body;
    const queryText = `UPDATE subtopics
                      SET "subtopic" = $1 
                      WHERE id=$2
                      AND "person_id" = $3;`;
    const queryValues = [
      newSubtopic.subtopic,
      req.params.id,
      req.user.id,
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing PUT subtopic query', err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

 
module.exports = router;
