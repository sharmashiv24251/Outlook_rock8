import React, { ReactNode } from "react";
import { Card } from "./ui/card";
import { EmailType } from "@/dummy_data";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";

const EmailContent = ({
  isWide = true,
  text = "loading...",
  email,
}: {
  isWide: boolean;
  text: string;
  email: EmailType;
}) => {
  // Apply classes based on state
  const widthClass = isWide ? "hidden" : "w-2/3";

  return (
    <Card
      className={`h-full bg-card ${widthClass} text-sm transition-all duration-300 pl-5 pr-10 py-5 rounded-lg light:text-[#636363]`}
    >
      <div className="flex gap-5">
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
          <p className="text-justify">{text}</p>
        </div>
      </div>
    </Card>
  );
};

export default EmailContent;
