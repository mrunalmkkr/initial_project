import React, { useEffect, useState } from 'react';
import API from './api';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadFeed = async () => {
      const res = await API.get('/feed');
      setPosts(res.data);
    };
    loadFeed();
  }, []);

  const handleSave = (post) => {
    console.log("Saved:", post);
  };

  const handleReport = (post) => {
    console.log("Reported:", post);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Feed</h2>
      {posts.map((post, index) => (
        <div key={index} className="border p-3 mb-2 rounded">
          <h3 className="font-semibold">{post.title}</h3>
          <a href={post.url} target="_blank" rel="noreferrer" className="text-blue-500 underline">View</a>
          <div className="mt-2">
            <button onClick={() => handleSave(post)} className="mr-2 text-sm bg-green-200 px-2 py-1">Save</button>
            <button onClick={() => handleReport(post)} className="text-sm bg-red-200 px-2 py-1">Report</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
