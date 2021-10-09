const express = require('express');
const router = express.Router();
const cors = require('cors');
const wrapperForAsync = require('../middleware/wrapperAsync');
router.use(cors());
const instance = require('../axiosInstance');
const API_KEY = process.env.API_KEY;

// test route
router.get('/', (req, res, next) => {
  res.send('Hello there!')
})

// Route requesting data from API
router.get("/gifs/:string", wrapperForAsync(async (req, res, next) => {
    const result = await instance.get(`/gifs/search?api_key=${API_KEY}&q=${req.params.string}&limit=25&offset=0&rating=g&lang=en`);
    res.json(result.data);
  }));

// Route requesting trending gifs
router.get("/gifs/trending",wrapperForAsync(async (req, res, next) => {
  const result = await instance.get(`/gifs/trending?api_key=${API_KEY}&limit=28`);
  res.json(result.data);
}));

// Route requesting random gifs
router.get("/gifs/random",wrapperForAsync(async (req, res, next) => {
  const result = await instance.get(`/gifs/random?api_key=${API_KEY}&limit=28`);
  res.json(result.data);
}));

// Route for tag terms
router.get("/tags/related/:term",wrapperForAsync(async (req, res, next) => {
  const {term} = req.params;
  const result = await instance.get(`/tags/related/${term}?api_key=${API_KEY}&limit=25`);
  res.json(result.data);
}));

module.exports = router;