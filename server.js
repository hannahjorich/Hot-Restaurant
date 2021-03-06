var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var tables = [];
// HTML Routes
// =============================================================

// gets home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  // gets reserve page
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });
// gets view page
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
//sets default to home page 
// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
//   });

// API Routes
// =============================================================
  
  // Displays all tables
app.get("/api/tables", function(req, res) {
  console.log("/api/tables")  
  res.json(tables);
    
  });

app.post("/api/new", function(req, res) {
   
    var newReservation = req.body;
    newReservation.routeName = newReservation.customerName.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);
  
    tables.push(newReservation);
  
    res.json(newReservation);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  