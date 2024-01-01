import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

interface Post {
  id: number;
  text: string;
  timestamp: string;
  author: {
    username: string;
  };
}

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[] | null | undefined>();

  useEffect(() => {
    (async () => {
      const response = await fetch(BASE_API_URL + '/api/feed')
      if (response.ok) {
        const results = await response.json();
        setPosts(results.data);
      } else {
        setPosts(null);
      }
    })();
  }, []);

  const renderPost = (posts: Post[] | null | undefined) => {
    return posts?.map((post) => (
      <p key={post.id}>
        <b>{post.author.username}</b> &mdash; {post.timestamp}
        <br />
        {post.text}
      </p>
    ));
  };

  return (
    <>
      {posts === undefined ? (
        <Spinner animation="border" />
      ) : (
        <>
          {posts === null ? (
            <p>There was an error loading data.</p>
          ) : posts.length === 0 ? (
            <p>There is nothing to show here.</p>
          ) : (
            renderPost(posts)
          )}
        </>
      )}
    </>
  );
};

export default Posts;
