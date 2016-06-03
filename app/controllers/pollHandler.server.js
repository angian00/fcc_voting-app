'use strict';

var Users = require('../models/users.js');

function PollHandler () {

	this.getPoll = function (req, res) {
		res.json({id: 1, title: "Who would you vote as next US President?", votes: {Nixon: 120, Bush: 150} });
	};
	
/*
	this.addClick = function (req, res) {
		Users
			.findOneAndUpdate({ 'github.id': req.user.github.id }, { $inc: { 'nbrClicks.clicks': 1 } })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.nbrClicks);
				}
			);
	};
	*/
}

module.exports = PollHandler;
