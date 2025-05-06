const express = require('express');
const authMiddleware = require('../middleware/authmiddleware');
const { getAggregatedFeed } = require('../services/feedservices');

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  try {
    const feed = await getAggregatedFeed();
    res.json(feed);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching feed' });
  }
});

module.exports = router;
