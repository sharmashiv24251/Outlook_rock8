"use client";

import EmailCard from "@/components/EmailCard";
import EmailListContainer from "@/components/EmailList";
import { useState } from "react";
import EmailContent from "@/components/EmailContent";
import { Button } from "@/components/ui/button";
import { ArrowLeftToLine } from "lucide-react";
import useFetchEmails from "@/hooks/useFetchEmails";
import useFetchEmailBody from "@/hooks/useFetchEmailBody";

const Home = () => {
  const [isWide, setIsWide] = useState(true);
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(null);

  // Toggle function to change width
  const toggleWidth = () => {
    setIsWide((prev) => !prev);
  };

  // Function to handle email selection
  const handleSelectEmail = (emailId: string) => {
    if (window.innerWidth <= 640) {
      toggleWidth();
    } else {
      setIsWide(false);
    }
    setSelectedEmailId(emailId);
  };

  const {
    loading: emailsLoading,
    error: emailsError,
    data: emails,
  } = useFetchEmails();

  const {
    body: emailBody,
    loading: bodyLoading,
    error: bodyError,
  } = useFetchEmailBody({ id: selectedEmailId });

  return (
    <main className="flex gap-4 h-[calc(100vh-80px)]">
      <EmailListContainer isWide={isWide}>
        {emailsLoading
          ? "Loading..."
          : emails?.map((email) => (
              <div key={email.id} onClick={() => handleSelectEmail(email.id)}>
                <EmailCard email={email} />
              </div>
            ))}
      </EmailListContainer>
      <Button
        className={`${
          isWide ? "hidden" : "sm:hidden"
        } mb-3 absolute translate-y--20`}
        onClick={toggleWidth}
      >
        <ArrowLeftToLine />
        back to list
      </Button>
      {selectedEmailId && (
        <EmailContent
          isWide={isWide}
          text={
            bodyLoading
              ? "Loading email content..."
              : emailBody || "No content available."
          }
          isLoading={bodyLoading}
          email={emails?.find((email) => email.id === selectedEmailId)} // Get the full email object for display
        />
      )}
    </main>
  );
};

export default Home;
