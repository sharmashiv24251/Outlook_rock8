import React from "react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { formatDate } from "@/utils/dateFormatter";
import { Email } from "@/types";

const EmailCard = ({
  email,
  isRead,
  isFavourite,
  isSelected,
}: {
  email: Email;
  isRead: boolean;
  isFavourite: boolean;
  isSelected: boolean;
}) => {
  return (
    <Card
      className={`cursor-pointer p-3 light:text-[#636363] light:border-[#CFD2DC] rounded-lg flex gap-4 md:gap-2
        ${isRead ? "bg-[#F2F2F2] dark:bg-card/20" : ""}
        ${isSelected ? "border-primary" : ""}`}
    >
      <Avatar className="h-12 w-12 text-2xl mx-2 lg:mx-5">
        <AvatarFallback className="font-bold">
          {email.from.name.split("")[0][0].toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <p>
            From:{" "}
            <span className="font-semibold">
              {email.from.name} {`<${email.from.email}>`}
            </span>
          </p>
          <p className="mb-2">
            Subject: <span className="font-semibold">{email.subject}</span>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p>{email.short_description}</p>
          <p>
            {formatDate(email.date)}
            {isFavourite && (
              <span className="text-[#E54065] font-semibold ml-5">
                Favourite
              </span>
            )}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default EmailCard;
