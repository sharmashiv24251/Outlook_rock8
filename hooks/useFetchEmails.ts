import { useState, useEffect } from "react";
import axios from "axios";
import { Email } from "@/types";

const useFetchEmails = () => {
  const [data, setData] = useState<Email[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://flipkart-email-mock.now.sh/");
        setData(response.data.list); // Extracting the list of emails
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, []); // Empty dependency array means this runs once on mount

  return { data, loading, error };
};

export default useFetchEmails;
