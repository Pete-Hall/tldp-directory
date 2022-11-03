const express = require('express');
const router = express.Router();
const pool = require('./modules/pool');

router.get('/', (req, res) => {
    console.log('/login GET');
    // const queryString = `SELECT * FROM directory`
    const queryString = `SELECT "id", "username", "password" FROM directory`
    pool.query(queryString).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('Error in search router:', err);
        res.sendStatus(500);
    })
});

module.exports = router;