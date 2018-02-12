// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ElectionSchema = new Schema({
  election: {
    type: String,
    required: true
  },
  type: {
    type: String,
   required: true
  },
  position: {
    positionTitle: String,
    candidates: [],    
  }
});

// Create the Model
var Election = mongoose.model("Election", ElectionSchema);

// Export it for use elsewhere
module.exports = Election;
