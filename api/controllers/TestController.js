var Sql = require('../db/sql');

exports.getData = function(req,res) {
    var Query = "SELECT * FROM TestTable"
    let promise = Sql.request(Query);
    promise
    .then(function(result) {
        res.json(result);
    },
    function(error) {
        res.send(error)
    });
}