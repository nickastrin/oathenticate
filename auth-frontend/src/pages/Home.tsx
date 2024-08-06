import React from 'react';

import svg from '@/assets/laptop.svg';
import github from '@/assets/social/github.svg';
import linkedIn from '@/assets/social/linked-in.svg';

export function Home(): React.JSX.Element {
  return (
    <div className="relative size-full">
      <div className="absolute top-0 right-0 flex flex-row items-center gap-4">
        <img
          src={github as string}
          className="h-8 md:h-14 z-20 cursor-pointer hover:scale-110 transition-all duration-300"
          alt={'Github'}
        />
        <div className="h-6 md:h-12 bg-teal-200/30 w-0.5 rounded-full"></div>
        <img
          src={linkedIn as string}
          className="h-8 md:h-14 z-20 cursor-pointer hover:scale-110 transition-all duration-300"
          alt={'LinkedIn'}
        />
      </div>

      <div
        className="size-full p-8 flex flex-row container mx-auto justify-between gap-4">
        <div
          className="flex flex-col gap-12 md:gap-16 justify-center text-start">
          <div className="flex flex-col gap-2">
            <span
              className="ms-2 text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-light text-zinc-400">
              Welcome to
            </span>
            <span
              className="text-7xl sm:text-8xl md:text-9xl lg:text-9xl font-extrabold text-teal-200">
              OATH.
            </span>
          </div>

          <div
            className="font-light text-md md:text-2xl max-w-md text-zinc-400">
            <span> Add </span>
            <span
              className="text-pink-500 font-bold leading-10"> unbroken </span>
            <span> security to your app now. The safety of your users is one click away. </span>
          </div>

          <button
            className="bg-teal-200/30 text-teal-100 text-xl rounded-full py-3 px-8 w-fit outline outline-1 hover:outline-2 hover:outline-teal-200 ">
            Get started
          </button>
        </div>
        <div
          className="group relative hidden lg:flex lg:flex-col justify-center 2xl:w-1/2">
          <img src={svg as string} className="z-20" alt={'Laptop'}/>
          <div
            className="absolute top-50 left-0 w-full aspect-square border-2 border-teal-200 bg-teal-200/30 rounded-full -z-10 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-pink-400">
          </div>
        </div>
      </div>
    </div>
  );
}
