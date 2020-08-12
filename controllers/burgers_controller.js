const express = require("express");

const router = express.Router();

let burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect("/burgers");
});
//Get Burgers
router.get("/burgers", function(req, res) {
    burger.select(function(data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});
//Create burger
router.post("/burgers/create", function(req, res) {
    burger.create(["burger_name"], [req.body.burger_name], function(result) {
        res.redirect("/burgers");
    });
});

//Update Burger
router.put("/burgers/update/:id", function(req, res) {
    var condition = `id = ${req.params.id}`;
    burger.update({ 'devoured': req.body.devoured }, condition, function(data) {
        res.redirect('/burgers');
    });
});
//Export router
module.exports = router;