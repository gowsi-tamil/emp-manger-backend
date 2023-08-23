const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const company = require("./company");
// Define collection and schema
const employee = new Schema(
  {
    id: { type: Number, index: { unique: true } },
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    job_title: { type: String },
    dob: { type: Date },
    company_name: { type: String },
    language: { type: String },
    status: { type: Boolean },
    preferred_color: { type: String },
  },
  {
    collection: "employees",
  },

);



const model = mongoose.model("employee", employee);



module.exports = model;