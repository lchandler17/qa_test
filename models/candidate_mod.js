// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CandidateSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Votes: {
    type: Schema.Types.ObjectId,
    ref: "Vote_mod"
  }]
});

// Create the Model
var Candidate = mongoose.model("Candidate", CandidateSchema);

// Export it for use elsewhere
module.exports = Candidate;
