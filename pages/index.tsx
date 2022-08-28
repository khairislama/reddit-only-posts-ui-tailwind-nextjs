import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import PostBox from "../components/PostBox";

const posts = [
  {
    id: "1",
    title: "my first post",
    body: "yeap",
    created_at: new Date("2022-08-27"),
    username: "khairi slama",
    image:
      "https://cdn.pixabay.com/photo/2012/02/24/16/59/swan-16736_960_720.jpg",
    comments: [
      {
        username: "ikram slama",
      },
      {
        username: "ibtissem slama",
      },
    ],
  },
  {
    id: "2",
    title: "my second post",
    body: "yeap x2",
    created_at: new Date("2022-08-26"),
    username: "khalil slama",
    comments: [],
  },
];

const Home: NextPage = () => {
  return (
    <div className="bg-gray-300 max-w-5xl my-7 mx-auto">
      <Head>
        <title>Reddit clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* PostBox */}
      <PostBox />
      {/* Feed */}
      <div className="flex">
        <Feed posts={posts} />
      </div>
    </div>
  );
};

export default Home;
