import React from "react";
import { Card } from "./ui/card";
import { EmailType } from "@/dummy_data";
import { Avatar, AvatarFallback } from "./ui/avatar";
import Loader from "./ui/loader";
import { formatDate } from "@/utils/dateFormatter";
import FavoriteButton from "./FavButton";

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
  const widthClass = isWide ? "hidden" : "md:w-2/3 w-full";

  return (
    <Card
      className={`h-full bg-card ${widthClass} text-sm transition-all duration-300 pl-5 pr-10 max-md:px-5 py-5 rounded-lg light:text-[#636363] overflow-scroll max-md:mt-12 max-md:pb-52 hide_scroll_bar`}
    >
      {isLoading ? <Loader /> : <Content email={email} text={text} />}
    </Card>
  );
};

const Content = ({ email, text }: { email: EmailType; text: string }) => {
  return (
    <div className="flex max-md:flex-col gap-5 mt-3">
      <Avatar className="h-14 w-14 text-2xl mt-1">
        <AvatarFallback className="font-bold">
          {email.from.name.split("")[0][0].toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-5 mt-3">
        <div className="w-full flex justify-between items-center">
          <span className="text-2xl font-bold">{email.subject}</span>
          <FavoriteButton emailId={email.id} />
        </div>
        <p>{formatDate(email.date)}</p>
        <div
          className="text-justify email-content"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  );
};

export default EmailContent;
