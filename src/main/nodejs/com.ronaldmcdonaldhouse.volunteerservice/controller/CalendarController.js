/**
 * Dependencies
 */
var express = require('express');
var router = express.Router();

/**
 * Calendar Model
 */
var Calendar = require('../models/Calendar.js');

/**
 * HTTP GET: /calendar/
 * Return calendar data for all users
 */
router.get('/', function(req, res) {
    Calendar.find({}, function (err, claim_data) {
        if(err) throw err;
        res.send(claim_data);
    });
});

/**
 * HTTP GET: /calendar/:month
 * Return calendar data by 'month'
 */
router.get('/:date', function(req, res) {
    Calendar.find({month: req.params.month}, function (err, calendar_data) {
        if(err) throw err;
        res.send(calendar_data);
    });
});

/**
 * HTTP GET: /calendar/:calendar_id
 * Return calendar data by 'calendar_id'
 */
router.get('/:calendar_id', function(req, res) {
    Calendar.find({calendar_id: req.params.calendar_id}, function (err, calendar_data) {
        if(err) throw err;
        res.send(calendar_data);
    });
});

/**
 * HTTP POST: /calendar/new
 * Add new calendar data
 */
router.post('/new', function(req, res) {

    var date = new Date();
    var day  = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    day = (day < 10 ? "0" : "") + day;
    month = (month < 10 ? "0" : "") + month;

    Calendar.find({user_name: req.body.user_name}, 'claim_id').sort('-claim_id').exec(function(err, claim_data, local_claim_id){
        if (err) throw err;
        if(claim_data == ""){
            local_claim_id = 1;
        }
        else{
            local_claim_id = claim_data[0].claim_id+1;
        }
        Claim.create({
            user_name: req.body.user_name,
            claim_id: local_claim_id,
            claim_status: 'Pending',
            claim_title: req.body.claim_title,
            nature_of_business: req.body.nature_of_business,
            license_plate_number: req.body.license_plate_number,
            start_mileage: req.body.start_mileage,
            end_mileage: req.body.end_mileage,
            month: month,
            day: day,
            year: year,
            from_coordinate: req.body.from_coordinate,
            to_coordinate: req.body.to_coordinate,
            from_location: req.body.from_location,
            to_location: req.body.to_location,
            miles_traveled: req.body.miles_traveled,
            time_stamp: date.getTime()
        }, function (err, claim_data) {
            if (err) throw err;
            res.send(claim_data);
        });
    });
});

/**
 * HTTP POST: /calendar/update
 * Update an existing calendar
 */
router.post('/update', function(req, res) {
    Calendar.update({user_name: req.body.user_name, claim_id: req.body.claim_id}, {claim_status: req.body.claim_status}, function(err, claim_data) {
        if(err) throw err;
        res.send(claim_data);
    });
});

module.exports = router;