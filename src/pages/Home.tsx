import { useState } from "react";
import PostInput from "../function/Home/PostInput.tsx";
import PostList from "../function/Home/PostList.tsx";
import type { Post } from "../function/Home/types";

type HomeProps = {
  username: string;
};

const Home = ({ username }: HomeProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const handlePost = (data: { text: string; category: string; audience: string; user: string }) => {
    const newPost: Post = {
      id: Date.now(),
      user: data.user, // use the username from PostInput
      text: data.text,
      category: data.category,
      audience: data.audience,
    };

    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div>
        <h1>Welcome, {username} 👋</h1>
        <PostInput user={username} onPost={handlePost} />
        <PostList posts={posts} />
    </div>
  );
};

export default Home;
