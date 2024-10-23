import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchEmailBody = ({ id }: { id: string }) => {
  const fetchEmailBody = async () => {
    const response = await axios.get(
      `https://flipkart-email-mock.vercel.app/?id=${id}`
    );
    return response.data.body; // Extracting the body from the response
  };

  const {
    data: body,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["emailBody", id], // Unique key for caching and refetching
    queryFn: fetchEmailBody,
    enabled: !!id, // Only run the query if id is defined
  });

  return { body, loading, error };
};

export default useFetchEmailBody;
