const express = require('express');
const app = express();
const DB = require("./Develop/db/DB.js")
const PORT = process.env.PORT || 3000

// Routes here


//APIs


// Listen for ports
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT} !`);
  });