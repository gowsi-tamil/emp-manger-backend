const mongoose = require("mongoose");
const querystring = require("querystring");

// Connecting with MongoDB
mongoose.set("strictQuery", false);

const username = "gowsi";
const password = "sibimathew27";  // Replace with your actual password
//const encodedPassword = querystring.escape(password);

//console.log(encodedPassword)
mongoose
  .connect(
    `mongodb+srv://gowsi:ncXEU2J3puENS6Bl@cluster0.plrul.mongodb.net/mean_stack?retryWrites=true&w=majority`,
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
