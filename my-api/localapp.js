'use strict'
// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
let cors = require('cors');
// Initialise the app
let app = express();
app.use(cors());

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
// mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
mongoose.connect('mongodb+srv://linedrivebetting:texaslonghorns@cluster0-w7pi2.mongodb.net/sports_data', { useNewUrlParser: true});

var db = mongoose.connection;
// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World!'));

// Use Api routes in the App
app.use('/api', apiRoutes);

// Locally launch app to listen to specified port

app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});
