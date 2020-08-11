const express = require('express');
const app = express();
const path = require("path");
const DB = require("./Develop/db/DB.js")
const PORT = process.env.PORT || 3000

// Data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
// Routes here


//APIs


// Listen for ports
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT} !`);
  });