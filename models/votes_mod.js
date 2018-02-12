// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var VotesSchema = new Schema({
  election: {
    type: String,
    required: true
  },
  choice1: {
    type: String,
   required: true
  },
  choice2: {
    type: String,
    required: true
  },
  choice3: {
    type: String,
    required: true
  }
});

// Create the Model
var Votes = mongoose.model("Votes", VotesSchema);

// Export it for use elsewhere
module.exports = Votes;