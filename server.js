// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// EXPRESS SERVER
var app = express();
var PORT = process.env.PORT || 8080;

// RUN MORGAN AND BODYPARSER
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// MONGODB

//writes to database: admin
mongoose.connect("mongodb://127.0.0.1:27017", {
    useMongoClient: true
  });

var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//REQUIRE MODELS//
var Votes = require("./models/votes_mod.js");
var Election = require("./models/election_mod.js");

// PASSPORT
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

// -------------------------------------------------
// ROUTES
// -------------------------------------------------

// main route
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// passport local login verification
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login',
//                                    failureFlash: true })
// );

// save new election input
app.post("/api/newelection", function (req, res) {
	console.log("just got ", req.body);

	var election = new Election({
		election: req.body.election,
		type: req.body.type,
		position: req.body.position
	});

	election.save(function(err){
		if (err) {
			throw err;
		}
		else {
			console.log("SAVED ELECTION!");
		}
	});

});

// populate vote
app.get("/api/:electionid", function (req, res) {
  // Election.findOne({ _id : electionid })
  //         .populate("Candidate")
  //         .exec(function(err, user) {
  //             if (err) {
  //                 console.log(err);
  //             }
  //             else {
  //               res.json({ Candidate: Election.Candidate });
  //             }
  //         });
});

// log vote
app.post("/api/vote", function (req, res) {
  console.log("just got",req.body); 

  var ballot = new Votes({
    election: req.body.election,
    choice1: req.body.position1Title,
    choice2: req.body.position2Title,
    choice3: req.body.position3Title,
  });

  ballot.save(function(err){
      if (err){
        throw err;
      }
      else {
        console.log("SAVED VOTE!");
      }
    });
});

// view results
app.get("/results/:electionid", function (req, res) {

});


// -------------------------------------------------
// START EXPRESS SERVER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});