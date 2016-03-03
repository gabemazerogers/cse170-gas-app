var data = require('../maintenance.json');

exports.viewMaintenance = function(req, res) {
    console.log(data);
    res.render('maintenance', data);
};