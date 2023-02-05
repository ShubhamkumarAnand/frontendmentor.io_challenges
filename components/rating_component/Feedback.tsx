import type { FC } from "react";
import Image from "next/image";

const Feedback: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800">
      <div className="flex w-full max-w-md flex-col items-center justify-center rounded-xl bg-gradient-to-b from-gray-700 to-gray-900 px-10  py-16 text-white">
        <Image
          src="public/rating_component/illustration-thank-you.svg"
          alt="Thank You"
          width="48"
          height="48"
          className="mb-16 rounded-full"
        />
        <p className="my-2 rounded-3xl bg-gray-700 px-4 py-2 text-sm font-bold text-orange-400">
          You have selected 4 out of 5
        </p>
        <p className="my-4 text-2xl font-bold">Thank You!</p>
        <p className="text-md mx-auto max-w-sm items-center text-gray-500">
          We appreciate you taking the time to give a rating. if you ever need
          more support never hesitate to get in touch.
        </p>
      </div>
    </main>
  );
};

export default Feedback;
