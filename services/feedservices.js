const axios = require('axios');

const fetchRedditPosts = async () => {
  const response = await axios.get('https://www.reddit.com/r/all.json');
  return response.data.data.children.map(post => ({
    title: post.data.title,
    url: post.data.url,
    source: 'Reddit',
  }));
};




const getAggregatedFeed = async () => {
  const redditPosts = await fetchRedditPosts();

  return [...redditPosts];
};

module.exports = { getAggregatedFeed };



