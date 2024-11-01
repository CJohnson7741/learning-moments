export const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-title">
        <div className="post-info">Title</div>
        <div>{post.title}</div>
      </div>
      <div className="post-body">
        <div className="post-info">Body</div>
        <div>{post.body}</div>
      </div>
      <div className="post-meta">
        <div>{post.userId.name}</div>
        <div>{post.topicId.name}</div>
        <div>{post.likes.length} Likes</div>
      </div>
    </div>
  );
};
