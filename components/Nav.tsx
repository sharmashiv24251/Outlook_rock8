import React from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between text-xs sm:text-md md:text-base">
      <div className="flex gap-3 justify-center items-center">
        <span>Filter By:</span>
        <Link href={"/"} className="p-2 rounded-md">
          Unread
        </Link>
        <Link
          href={"/"}
          className="py-1 px-4 bg-slate-200 dark:bg-slate-700 rounded-2xl"
        >
          Read
        </Link>
        <Link href={"/"} className="p-2 rounded-md">
          Favourites
        </Link>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Nav;
