import Avatar from "./Avatar";
import { PhotoIcon, LinkIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  subreddit: string;
};

function PostBox() {
  // get session
  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (formData) => {});

  return (
    <form
      onSubmit={onSubmit}
      className="sticky top-12 z-50 bg-white border rounded-md border-gray-300 p-2 "
    >
      <div className="flex items-center space-x-3">
        {/* Avatar */}
        <Avatar />
        <input
          {...register("postTitle", { required: true })}
          type="text"
          placeholder={`Create a post by entering a title!`}
          className="bg-gray-50 py-2 pl-5 outline-none rounded-md flex-1"
        />

        <PhotoIcon
          onClick={() => setImageBoxOpen(!imageBoxOpen)}
          className={`h-6 text-gray-300 cursor-pointer ${
            imageBoxOpen && "text-blue-300"
          }`}
        />
        <LinkIcon className="h-6 text-gray-300" />
        {/* <input type="text" disabled={!session} placeholder={session ?`Create a post by entering a title!`:`sign in to Post`} /> */}
      </div>

      {!!watch("postTitle") && (
        <div className="flex flex-col py-2">
          {/* BodyBox */}
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Body:</p>
            <input
              {...register("postBody", { required: true })}
              type="text"
              placeholder="Text (optional)"
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
            />
          </div>
          {/* Subreddit */}
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Subreddit:</p>
            <input
              {...register("subreddit")}
              type="text"
              placeholder="i.e. reactjs"
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
            />
          </div>

          {/* image */}
          {imageBoxOpen && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">Image URL:</p>
              <input
                {...register("postImage")}
                type="text"
                placeholder="Optional..."
                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              />
            </div>
          )}

          {/* Errors */}
          {Object.keys(errors).length > 0 && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.postTitle?.type === "required" && (
                <p>- A Post Title is required</p>
              )}
              {errors.postBody?.type === "required" && (
                <p>- A Post Body is required</p>
              )}
            </div>
          )}
          {!!watch("postTitle") && (
            <button
              type="submit"
              className="w-full rounded-full bg-blue-400 p-2 text-white"
            >
              Create a Post
            </button>
          )}
        </div>
      )}
    </form>
  );
}
export default PostBox;
