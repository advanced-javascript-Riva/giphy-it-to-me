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
    const result = await instance.get(`/search?api_key=${API_KEY}&q=${req.params.string}&limit=28&offset=0&rating=g&lang=en`);
    res.json(result.data);
  }));

// Route requesting trending gifs
router.get("/gifs/trending",wrapperForAsync(async (req, res, next) => {
  const result = await instance.get(`/trending?api_key=${API_KEY}&limit=28`);
  res.json(result.data);
}));

// Route requesting random gifs
router.get("/gifs/random",wrapperForAsync(async (req, res, next) => {
  const result = await instance.get(`/random?api_key=${API_KEY}&limit=28`);
  res.json(result.data);
}));

// Route for tag terms
router.get("/tags/related/:string",wrapperForAsync(async (req, res, next) => {
  const result = await instance.get(`/tags/related/${req.params.string}?api_key=${API_KEY}&limit=28`);
  res.json(result.data);
}));

module.exports = router;