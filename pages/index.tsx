import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PostBox from "../components/PostBox";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-300">
      <Head>
        <title>Reddit clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* PostBox */}
      <PostBox />
      <div>{/* Feed */}</div>
    </div>
  );
};

export default Home;
