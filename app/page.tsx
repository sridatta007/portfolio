import Meteors from "@/components/ui/meteors";
import React from "react";

const IndexPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Meteors Background */}
      <div className="absolute inset-0 -z-10">
        <Meteors number={30} />
      </div>

      {/* Content on Top of the Meteors */}
      <div className="relative flex h-full flex-col items-center justify-center">
        <h1 className="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          
        </h1>

        {/* Add More Content Here */}
        <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
  
        </p>
      </div>
    </div>
  );
};

export default IndexPage;
