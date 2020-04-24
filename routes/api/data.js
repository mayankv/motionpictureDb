const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const { API_KEY } = process.env;

// search route for movie
router.get('/:movie', async (req, res) => {
  const movie = req.params.movie;
  const response = await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movie}&page=1`
    )
    .catch(() => res.status(500).json({ msg: 'Server Error' }));
  const data = response.data;
  res.json(data);
});

module.exports = router;
