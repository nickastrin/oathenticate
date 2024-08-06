import React from 'react';

export function Home(): React.JSX.Element {
  return (
    <>
      <div className="flex flex-col size-full p-8 gap-12 md:gap-16 justify-center text-start">
        <div className = 'flex flex-col gap-2'>
          <span className = 'ms-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-zinc-400'>
            Welcome to
          </span>
          <span className = 'text-7xl sm:text-8xl md:text-9xl lg:text-9xl font-extrabold text-teal-200'>
            OATH.
          </span>
        </div>

        <div className = 'font-light text-md md:text-2xl max-w-md text-zinc-400'>
          <span> Add </span>
          <span className = 'text-pink-500 font-bold leading-10'> unbroken </span>
          <span> security to your app now. The safety of your users is one click away. </span>
        </div>

        <button className = 'bg-teal-200 bg-opacity-30 text-teal-100 border-teal-100 rounded-full py-3 px-8 w-fit'>
          Get started
        </button>
      </div>
    </>
  );
}
