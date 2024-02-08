"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [open, close] = useState(false);

  return (
    <header className="flex justify-between mb-10">
      <Image src={"/logo.svg"} alt={""} width={50} height={50} />

      <div onClick={() => close(!open)} className="flex md:hidden">
        <Image src={"/icon-menu.svg"} alt="" height={20} width={20} />
      </div>
      {open ? (
        <div className="bg-gray-500/50 w-full absolute h-full min-h-[200vh] top-0 left-0  ">
          <div className="fixed bg-neutral-50/50 w-1/2 h-full top-0 right-0 z-10 rounded-s-2xl backdrop-blur-md p-2 flex flex-col  border-black border">
            <Image
              src={"/icon-menu-close.svg"}
              width={20}
              height={20}
              alt=""
              onClick={() => close(!open)}
              className="m-5"
            />
            <div className="mt-10 flex flex-col font-bold text-xl gap-5 w-full h-full text-center ">
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>New</Link>
              <Link href={"/"}>Popular</Link>
              <Link href={"/"}>Trending</Link>
              <Link href={"/"}>Categories</Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex  w-1/3 justify-between">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>New</Link>
          <Link href={"/"}>Popular</Link>
          <Link href={"/"}>Trending</Link>
          <Link href={"/"}>Categories</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
