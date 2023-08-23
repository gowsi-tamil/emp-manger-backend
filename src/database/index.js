const mongoose = require("mongoose");
const querystring = require("querystring");

// Connecting with MongoDB
mongoose.set("strictQuery", false);
 // Replace with your actual password
//const encodedPassword = querystring.escape(password);
//process.env.DB_ATLAS
//console.log(encodedPassword)
mongoose
  .connect(process.env.DB_ATLAS,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
