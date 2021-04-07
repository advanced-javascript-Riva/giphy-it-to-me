require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const home = require('./routes/routes');
app.use(express.static('public'));
app.use(router);

const internalServerErr = require('./middleware/500');
const notFoundErr = require('./middleware/404');
wrapperForAsync = require('./middleware/wrapperAsync');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes/router middleware
router.use('/', home);
router.use(internalServerErr);
router.use(notFoundErr);
router.use(wrapperForAsync);

// Server listening...
app.listen(port, () => console.log(`Listening on port ${port}...`))