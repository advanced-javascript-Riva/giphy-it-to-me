require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const home = require('./routes');
app.use(express.static('public'));
app.use(router);

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
router.use('/', home);

// Server listening...
app.listen(port, () => console.log(`Listening on port ${port}...`))