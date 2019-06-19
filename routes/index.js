const express = require('express');
const router = express.Router();

const request = require('request');

/* GET home page. */
router.get('/', (req, res, next) => {
  request(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${req.query.q}&inputtype=textquery&fields=formatted_address,name,geometry&key=${process.env.MAPS_KEY_API}`, (err, rese, body) => {
    return res.json(JSON.parse(rese.body));
  });
});

module.exports = router;
