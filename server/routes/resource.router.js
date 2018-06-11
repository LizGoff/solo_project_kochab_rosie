const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// ------------ resources -----------

router.post('/', (req, res) => {
    if (req.isAuthenticated()) {
      const queryText = `INSERT INTO links ("url", "user_id")
                      VALUES ($1, $2) RETURNING "url";`;
      pool.query(queryText, [req.body.url, req.user.id])
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

// router.get('/', (req, res) => {
//     if (req.isAuthenticated()) {
  
//     const queryText = 'SELECT * FROM links';
//     pool.query(queryText)
//       .then((result) => { res.send(result.rows); })
//       .catch((err) => {
//         console.log('Error completing GET links query', err);
//         res.sendStatus(500);
//       });
//     } else {
//       res.sendStatus(403);
//     }
  
//   });
  
//   router.get('/:id', (req, res) => {
//     if (req.isAuthenticated()) {
  
//     const queryText = 'SELECT * FROM links WHERE id=$1';
//     pool.query(queryText, [req.params.id])
//       .then((result) => { res.send(result.rows); })
//       .catch((err) => {
//         console.log('Error completing GET links query', err);
//         res.sendStatus(500);
//       });
//     } else {
//       res.sendStatus(403);
//     }
//   });

  module.exports = router;