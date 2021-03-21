const express = require('express');
const router = express.Router();
const cors = require('cors');
router.use(cors());
const instance = require('../axiosInstance');
const API_KEY = process.env.API_KEY;

// test route
router.get('/', (req, res, next) => {
  res.send('Hello there!')
})

// Route requesting data from API
router.get("/gifs", async (req, res, next) => {
  try {
    const result = await instance.get(`/search?api_key=${API_KEY}&q=cats&limit=28&offset=0&rating=g&lang=en`);
    res.json(result.data);
  }
  catch (err) {
    next(err);
  }
});

module.exports = router;