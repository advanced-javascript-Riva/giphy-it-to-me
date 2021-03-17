const express = require('express');
const router = express.Router();
const cors = require('cors');
router.use(cors());


// Routes here...
router.get('/', (req, res) => {
  res.send('Hello there!')
})

module.exports = router;