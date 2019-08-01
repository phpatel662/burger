connection = require("./connection");

var orm = {
    selectAll: function(table, cb){
        var query = "SELECT * FROM ??";
        connection.query(query, [table], function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        })
    },
    insertOne: function(table, col, val, cb){
        var query = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(query, [table, col, val], function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        })
    },
    updateOne: function(table, col, colVal, setCol, setVal, cb){
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
        connection.query(queryString, [table, col, colVal, setCol, setVal], function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
}

module.exports = orm;