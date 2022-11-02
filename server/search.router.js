const express = require('express');
const router = express.Router();

const directory = [
    {
        name: 'Pete',
        phone: '123-456-7890',
        job: 'TLDP Software Engineer',
        location: 'St. Paul, MN',
        salary: '$1,000,000'
    }
];


router.get('/:name', (req, res) => {
    // const querString = `SELECT * from directory WHERE ....`;
    // pool.query(queryString).then((result) => {
    //     res.send(result.rows);
    // }).catch((err) => {
    //     console.log('Error in search router:', err);
    //     res.sendStatus(500);
    // })
    console.log('/search GET:', req.params.name);
    res.send(directory);
});

module.exports = router;