import { useState, useEffect } from "react";
import axios from "axios";

const useFetchEmailBody = ({ id }: { id: string }) => {
  const [body, setBody] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBody = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://flipkart-email-mock.vercel.app/?id=${id}`
        );
        setBody(response.data.body); // Extracting the body from the response
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBody();
    }
  }, [id]); // Dependency on id to refetch when it changes

  return { body, loading, error };
};

export default useFetchEmailBody;
