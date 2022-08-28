import Avatar from "./Avatar";

function PostBox() {
  // get session

  return (
    <form className=" sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2 ">
      <div className="flex items-center space-x-3">
        {/* Avatar */}
        <Avatar />
        <input
          type="text"
          placeholder={`Create a post by entering a title!`}
          className="bg-gray-50 py-2 pl-5 outline-none rounded-md flex-1"
        />
        {/* <input type="text" disabled={!session} placeholder={session ?`Create a post by entering a title!`:`sign in to Post`} /> */}
      </div>
    </form>
  );
}
export default PostBox;
