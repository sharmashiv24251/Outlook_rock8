"use client";

import EmailCard from "@/components/EmailCard";
import EmailListContainer from "@/components/EmailList";
import { useCallback, useState } from "react";
import EmailContent from "@/components/EmailContent";
import { Button } from "@/components/ui/button";
import { ArrowLeftToLine } from "lucide-react";
import useFetchEmails from "@/hooks/useFetchEmails";
import useFetchEmailBody from "@/hooks/useFetchEmailBody";
import { useWindowSize } from "@/hooks/useWindowSize";

const Home = () => {
  const [isWide, setIsWide] = useState(true);
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(null);
  const { isMobile } = useWindowSize();

  // Toggle function to change width
  const toggleWidth = () => {
    setIsWide((prev) => !prev);
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
  } = useFetchEmailBody({ id: selectedEmailId! });

  const handleSelectEmail = useCallback(
    (emailId: string) => {
      setSelectedEmailId(emailId);
      if (isMobile) {
        setIsWide(false);
      } else {
        setIsWide(false);
      }
    },
    [isMobile]
  );

  const selectedEmail = emails
    ? emails.find((email) => email.id === selectedEmailId)
    : null;

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
          isWide ? "hidden" : "md:hidden"
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
              : emailBody || "Error Fetching email content."
          }
          isLoading={bodyLoading}
          email={selectedEmail!}
        />
      )}
    </main>
  );
};

export default Home;
