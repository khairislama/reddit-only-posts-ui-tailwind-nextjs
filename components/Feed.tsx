import Post from "./Post";

function Feed({ posts }: any) {
  return (
    <div className="mt-5 space-y-4">
      {posts.map((post: any) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
export default Feed;
