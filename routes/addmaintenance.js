/**
 * Created by gabe on 3/3/16.
 */
var data = require('../maintenance.json');

exports.addMaintenance = function(req, res) {
	console.log("hey");
    var newMaintenance = {
        "name" : req.query.name,
        "date" : req.query.date,
        "description" : req.query.description
    };
    data["maintenance"].push(newMaintenance);
    res.render('maintenance', data);
};