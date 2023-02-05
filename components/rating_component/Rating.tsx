import Image from "next/image";
import type { FC } from "react";

const Rating: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800">
      <div className="flex max-w-md flex-col  rounded-xl bg-gradient-to-b from-gray-700 to-gray-900 px-10 py-16  text-white">
        <Image
          src="public/rating_component/icon-star.svg"
          alt="icon_star"
          width="48"
          height="48"
          className="rounded-full"
        />
        <p className="text-2xl font-bold">How did we do?</p>
        <p className="text-md my-4 max-w-sm text-gray-500">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="mb-10 flex justify-between">
          <button className="h-12 w-12 rounded-full bg-stone-500 hover:bg-orange-500">
            1
          </button>
          <button className="h-12 w-12 rounded-full bg-stone-500 hover:bg-orange-500">
            2
          </button>
          <button className="h-12 w-12 rounded-full bg-stone-500 hover:bg-orange-500">
            3
          </button>
          <button className="h-12 w-12 rounded-full bg-stone-500 hover:bg-orange-500">
            4
          </button>
          <button className="h-12 w-12 rounded-full bg-stone-500 hover:bg-orange-500">
            5
          </button>
        </div>
        <button className="w-full rounded-3xl bg-orange-500 p-3 text-lg font-bold uppercase hover:bg-white hover:text-orange-500">
          submit
        </button>
      </div>
    </main>
  );
};

export default Rating;
