/**
 * Calendar Model
 */
var mongoose = require('mongoose');

var calendarSchema = new mongoose.Schema({
    user_name: String,
    claim_id: Number,
    claim_status: String,
    claim_title: String,
    nature_of_business: String,
    IPS_location: String,
    license_plate_number: String,
    start_mileage: Number,
    end_mileage: Number,
    month: Number,
    day: Number,
    year: Number,
    from_coordinate: String,
    to_coordinate: String,
    from_location: String,
    to_location: String,
    miles_traveled: Number,
    time_stamp: String
});

module.exports = mongoose.model('Calendar', calendarSchema, 'Calendar');