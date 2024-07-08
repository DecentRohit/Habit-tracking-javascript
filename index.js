const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const connectUsingMongoose = require("./config/mongooseConfig")
const bodyParser = require('body-parser');
const path = require( "path");
const methodOverride = require('method-override');

const app = express();


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
// setup view engine settings
app.set('view engine', 'ejs');

app.set("views",path.join(path.resolve(),"src", "views"));
app.use(express.static(path.join(__dirname, 'public')));

// Define Routes
const habitRoutes = require('./src/routes/habitRoutes')
app.use('/habits', habitRoutes);

// Home Route
app.get('/', (req, res) => {
    res.redirect('/habits');
});

// Start the Server
app.listen(3000, () => {
    console.log('Server is running on 3000');
    connectUsingMongoose();
});
