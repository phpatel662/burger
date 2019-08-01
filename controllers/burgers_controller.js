var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var obj = {
            burgers: data
        };
    res.render("index", obj);
    })
})

router.put("/api/:id", function(req, res){
    var id = parseInt(req.params.id);
    burger.updateOne(id, function(results){
        if (results.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
})

router.post("/api/", function(req, res){
    var burger_name = req.body.name;
    burger.insertOne(burger_name, function(results){
        res.json({ id: results.insertId });
    })
})

module.exports = router;