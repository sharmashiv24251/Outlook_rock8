"use client";
import dummy_data from "@/dummy_data";
import EmailCard from "@/components/EmailCard";
import EmailListContainer from "@/components/EmailList";
import { useState } from "react";
import EmailContent from "@/components/EmailContent";
const Home = () => {
  const [isWide, setIsWide] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);

  // Toggle function to change width
  const toggleWidth = () => {
    setIsWide((prev) => !prev);
  };

  return (
    <main className="flex gap-4 h-[calc(100vh-80px)]">
      <EmailListContainer isWide={isWide}>
        {dummy_data.map((email) => (
          <div
            key={email.id}
            onClick={() => {
              toggleWidth();
              setSelectedEmail(email.id);
            }}
          >
            <EmailCard email={email} />
          </div>
        ))}
      </EmailListContainer>

      <EmailContent
        isWide={isWide}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolore ipsum incidunt aperiam modi veniam voluptates debitis totam minus aut repellat inventore eveniet, odit beatae expedita maiores fuga, similique tempora. Nobis qui deserunt molestiae amet fugit sequi facilis, itaque hic quas praesentium nam a ad velit ducimus fuga ut obcaecati in repudiandae cumque? Aliquid cumque dolor numquam quidem nam dolore laudantium deleniti, quas neque velit perferendis temporibus odit qui laboriosam totam deserunt ratione similique dolores enim, voluptatem maxime necessitatibus maiores! Earum odio veniam unde doloribus molestias harum corrupti quos eum laborum aspernatur, sit voluptatibus placeat! Repellat ea iste deleniti sapiente beatae quia voluptates assumenda dignissimos officiis consectetur ut excepturi harum commodi autem, nesciunt dicta esse quas quaerat, dolore, sunt obcaecati asperiores quae animi? Eveniet repudiandae a minima adipisci quia veritatis quaerat sunt repellendus unde consequuntur ea aliquam architecto natus, earum similique quidem eum obcaecati! Animi magni repellendus ipsam dolor dignissimos provident quod consequatur rerum nulla nihil corrupti ex, eveniet temporibus ullam vel laudantium cupiditate distinctio. Ea expedita et sint commodi consequuntur quae minima veritatis labore fugiat, aut deserunt, officia quo similique odit aspernatur eaque tempore ipsa cupiditate perferendis harum animi architecto rerum ad? Voluptatum, alias assumenda blanditiis eveniet dignissimos natus"
        }
        email={dummy_data[0]}
      />
    </main>
  );
};

export default Home;
