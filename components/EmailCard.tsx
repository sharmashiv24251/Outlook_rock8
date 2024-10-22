import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export interface EmailType {
  id: string;
  from: {
    email: string;
    name: string;
  };
  date: number;
  subject: string;
  short_description: string;
}

const EmailCard = ({ email }: { email: EmailType }) => {
  return (
    <Card className="cursor-pointer p-3 text-[#636363] border-[#CFD2DC] rounded-md">
      <div className="flex gap-2">
        <Avatar>
          <AvatarFallback className="font-bold">
            {email.from.name.split("")[0][0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p>
              From:{" "}
              <span className="font-semibold">
                {email.from.name} {`<${email.from.email}>`}
              </span>
            </p>
            <p>
              Subject: <span className="font-semibold">{email.subject}</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p>{email.short_description}</p>
            <p>
              {new Date(email.date).toLocaleString("en-US", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
              <span className="text-[#E54065] font-semibold ml-5">
                Favourite
              </span>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EmailCard;