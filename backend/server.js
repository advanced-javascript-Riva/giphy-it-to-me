require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3001;
const home = require('./routes/routes');
app.use(router);

const internalServerErr = require('./middleware/500');
const notFoundErr = require('./middleware/404');
wrapperForAsync = require('./middleware/wrapperAsync');

// Routes/router middleware
router.use('/', home);
router.use(internalServerErr);
router.use(notFoundErr);
router.use(wrapperForAsync);

// Server listening...
app.listen(port, () => console.log(`Listening on port ${port}...`))