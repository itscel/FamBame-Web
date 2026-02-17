import type { Post } from "./types";
import "./PostList.css";

type PostListProps = {
  posts: Post[];
};

const PostList = ({ posts }: PostListProps) => {
  if (!posts.length) return <p className="no-posts">No posts yet.</p>;

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <div className="post-header">
            <span className="post-name">{post.user}</span> 
            <span className="post-categories">
              {post.category} • {post.audience}
            </span>
          </div>
          <div className="post-content">{post.text}</div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
