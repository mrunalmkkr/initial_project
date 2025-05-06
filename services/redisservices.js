const redis = require('redis');
const client = redis.createClient({ url: process.env.REDIS_URL });

client.on('connect', () => console.log('Connected to Redis'));

client.connect();

exports.getFromCache = async (key) => {
  try {
    return await client.get(key);
  } catch (err) {
    console.error('Redis error:', err);
  }
};

exports.saveToCache = async (key, value) => {
  try {
    await client.set(key, value);
  } catch (err) {
    console.error('Redis error:', err);
  }
};
