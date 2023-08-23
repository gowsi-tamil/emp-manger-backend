const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
const company = new Schema(
  {
    id: { type: Number, index: { unique: true } },
    company_name: { type: String },
    address: { type: String },
    coordinates: {
      type: {
        type: String,
        enum: ["Point"],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
    }
  },
  {
    collection: "company",
  },

);



const model2 = mongoose.model("company", company);


module.exports = model2;
