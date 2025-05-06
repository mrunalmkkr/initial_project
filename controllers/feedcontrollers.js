const Feed = require('../models/feed');
const { getFromCache, saveToCache } = require('../services/redisservices');

exports.getFeed = async (req, res, next) => {
  try {
    const cachedFeed = await getFromCache('feed');
    if (cachedFeed) return res.json(JSON.parse(cachedFeed));

    const feed = await Feed.find();
    await saveToCache('feed', JSON.stringify(feed));
    res.json(feed);
  } catch (err) {
    next(err);
  }
};
