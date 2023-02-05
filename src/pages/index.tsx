import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Challenges - Frontend Mentor</title>
        <meta name="description" content="Challenges By Frontend Mentor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <p className="text-2xl font-bold shadow-xl">
            Frontend Mentor Challenges
          </p>
          <Link
            href="rating_component"
            className="rounded-sm bg-stone-700 p-2 text-lg font-bold text-white"
          >
            {" "}
            Rating Component
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
