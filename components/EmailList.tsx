import React, { ReactNode } from "react";

const EmailListContainer = ({
  children,
  isWide = true,
}: {
  children: ReactNode;
  isWide: boolean;
}) => {
  // Apply classes based on state
  const widthClass = isWide ? "w-full" : "w-1/3 md:flex hidden";

  return (
    <div
      className={`flex flex-col gap-4 ${widthClass} text-sm transition-all duration-300 overflow-scroll hide_scroll_bar max-md:pb-52`}
    >
      {children}
    </div>
  );
};

export default EmailListContainer;
