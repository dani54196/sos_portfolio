import React, { useState, useEffect } from 'react';
import { fetchInstagramPosts } from '../Utility/intagram';

const InstagramPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInstagramPosts();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          {post.media_type === 'IMAGE' && (
            <img src={post.media_url} alt={post.caption} />
          )}
          {post.media_type === 'VIDEO' && (
            <video controls>
              <source src={post.media_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <p>{post.caption}</p>
          <a href={post.permalink} target="_blank" rel="noopener noreferrer">View on Instagram</a>
        </div>
      ))}
    </div>
  );
};

export default InstagramPosts;