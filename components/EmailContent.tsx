import React from "react";
import { Card } from "./ui/card";
import { EmailType } from "@/dummy_data";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import Loader from "./ui/loader";

const EmailContent = ({
  isWide = true,
  text = "loading...",
  email,
  isLoading,
}: {
  isWide: boolean;
  text: string;
  email: EmailType;
  isLoading: boolean;
}) => {
  // Apply classes based on state
  const widthClass = isWide ? "hidden" : "sm:w-2/3 w-full";

  return (
    <Card
      className={`h-full bg-card ${widthClass} text-sm transition-all duration-300 pl-5 pr-10 max-sm:px-5 py-5 rounded-lg light:text-[#636363] overflow-scroll max-sm:mt-12 max-sm:pb-52 hide_scroll_bar`}
    >
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <Loader />
        </div>
      ) : (
        <div className="flex max-sm:flex-col gap-5">
          <Avatar className="h-14 w-14 text-2xl">
            <AvatarFallback className="font-bold">
              {email.from.name.split("")[0][0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-5 mt-3">
            <div className="w-full flex justify-between items-center">
              <span className="text-2xl font-bold"> {email.subject}</span>
              <Button className="rounded-full">Mark As Favourite</Button>
            </div>
            <p>
              {new Date(email.date).toLocaleString("en-US", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </p>

            <div
              className="text-justify email-content"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        </div>
      )}
    </Card>
  );
};

export default EmailContent;
