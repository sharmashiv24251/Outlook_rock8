import EmailListContainer from "@/components/EmailListContainer";
import React from "react";

import dummy_data from "@/dummy_data";
import EmailCard from "@/components/EmailCard";
const Home = () => {
  return (
    <main>
      <EmailListContainer>
        {dummy_data.map((email) => (
          <EmailCard key={email.id} email={email} />
        ))}
      </EmailListContainer>
    </main>
  );
};

export default Home;
