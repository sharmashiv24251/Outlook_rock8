"use client";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Nav = () => {
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get("filter") || "all";

  return (
    <nav className="flex  justify-between text-xs md:text-md md:text-base h-10 mb-5 mt-0 md:my-5">
      <div className="flex max-sm:gap-1 gap-3 justify-center items-center">
        <span>Filter By:</span>
        <Link
          href="/"
          className={`py-2 px-3 rounded-full ${
            currentFilter === "all" ? "bg-slate-200 dark:bg-card" : ""
          }`}
        >
          All
        </Link>
        <Link
          href="/?filter=unread"
          className={`py-2 px-3 rounded-full ${
            currentFilter === "unread" ? "bg-slate-200 dark:bg-card" : ""
          }`}
        >
          Unread
        </Link>
        <Link
          href="/?filter=read"
          className={`py-2 px-3 rounded-full ${
            currentFilter === "read" ? "bg-slate-200 dark:bg-card" : ""
          }`}
        >
          Read
        </Link>
        <Link
          href="/?filter=favorites"
          className={`py-2 px-3 rounded-full ${
            currentFilter === "favorites" ? "bg-slate-200 dark:bg-card" : ""
          }`}
        >
          Favourites
        </Link>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Nav;
