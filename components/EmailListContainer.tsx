"use client";
import React, { ReactNode, useState } from "react";

const EmailListContainer = ({ children }: { children: ReactNode }) => {
  const [isWide, setIsWide] = useState(false);

  // Toggle function to change width
  const toggleWidth = () => {
    setIsWide((prev) => !prev);
  };

  // Apply classes based on state
  const widthClass = isWide ? "w-full" : "w-1/3";
  const textClass = isWide ? "text-sm" : "text-xs";

  return (
    <div
      className={`mt-5 flex flex-col gap-4 justify-center ${widthClass} ${textClass} transition-all duration-300`}
      onClick={toggleWidth} // Click to toggle width
    >
      {children}
    </div>
  );
};

export default EmailListContainer;
