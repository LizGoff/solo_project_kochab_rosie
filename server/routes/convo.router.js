const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// POST
router.post('/', (req, res) => {
    if (req.isAuthenticated()) {
      const queryText = `INSERT INTO comments ("comment", "user_id")
                      VALUES ($1, $2) RETURNING "comment";`;
      pool.query(queryText, [req.body.comment, req.user.id])
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
          console.log('Error completing POST comment query', err);
          res.sendStatus(500);
        })
    } else {
      res.sendStatus(403);
    }
  });

// GET

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {

  const queryText = 'SELECT * FROM comments';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing GET comments query', err);
      res.sendStatus(500);
    });
  } else {
    res.sendStatus(403);
  }

});

router.get('/:id', (req, res) => {
  if (req.isAuthenticated()) {

  const queryText = 'SELECT * FROM comments WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing GET comments query', err);
      res.sendStatus(500);
    });
  } else {
    res.sendStatus(403);
  }
});

//

router.delete('/:id', (req,res) => {
    console.log('delete from SQL')

    const deleteInfo = req.params.id;
    pool.query('DELETE FROM "comments" WHERE "id"=$1;', [deleteInfo])
        .then((result) => {
            res.sendStatus(200);
    }).catch((error) => {
        console.log('error delete SQL INSERT', error)
        res.sendStatus(500);
    });
});


// router.put('/', (req, res) => {
//   const newPlant = req.body;

//   const queryText = `UPDATE subtopics
//   SET "subtopic" = $1, 
//   "user_id" = $2, 
//   "topic_id" = $3, 
//   WHERE id=$4;`; 

//   const queryValues = [
//     updatedTopic.subtopic,
//     updatedTopic.user_id,
//     updatedTopic.topic_id,
//     updatedTopic.id,
//   ];

//   pool.query(queryText, queryValues)
//     .then(() => { res.sendStatus(200); })
//     .catch((err) => {
//       console.log('Error completing PUT subtopics query', err);
//       res.sendStatus(500);
//     });
// });


module.exports = router;
