const express = require('express');
const router = express.Router();
const pool = require('./modules/pool');

// const directory = [
//     {
//         name: 'Pete',
//         phone: '123-456-7890',
//         job: 'TLDP Software Engineer',
//         location: 'St. Paul, MN',
//         salary: '$1,000,000'
//     }
// ];

router.get('/:name', (req, res) => {
    console.log('/search GET:', req.params.name);
    // const queryString = `SELECT * from directory ORDER BY id ASC `;
    const queryString = `SELECT * FROM directory WHERE name ILIKE '%${req.params.name}%';`
    pool.query(queryString).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('Error in search router:', err);
        res.sendStatus(500);
    })
    // res.send(directory);
});

module.exports = router;