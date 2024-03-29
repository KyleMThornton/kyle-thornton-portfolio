// "use client";

// import { useEffect, useState } from "react";
// import TextTransition, { presets } from "react-text-transition";

export default function HeaderText() {
  // const greetings = ["Hello!", "¡Hola!", "Bonjour!", "Guten Tag!"];
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(
  //     () => setIndex((index) => index + 1),
  //     4000, // every 4 seconds
  //   );
  //   return () => clearTimeout(intervalId);
  // }, []);

  return (
    <header className="flex justify-start container p-4 pt-36 -z-10">
      <div className="flex flex-col md:w-4/5">
        <h1 className="text-2xl md:text-4xl font-semibold md:pb-2 flex flex-row">
          Hey there 👋🏻
        </h1>
        <h1 className="text-2xl md:text-4xl pb-3 font-semibold">
          I&apos;m <span>Kyle Thornton</span>
        </h1>
        <h1 className="text-5xl md:text-6xl font-bold">
          A full-stack web developer with a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-red-800">
            passion for creating
          </span>
        </h1>
      </div>
    </header>
  );
}
