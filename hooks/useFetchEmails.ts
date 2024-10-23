import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Email } from "@/types";

const fetchEmails = async () => {
  const response = await axios.get("https://flipkart-email-mock.now.sh/");
  return response.data.list; // Extracting the list of emails
};

const useFetchEmails = () => {
  const { data, error, isLoading } = useQuery<Email[], Error>({
    queryKey: ["emails"], // Unique key for the query
    queryFn: fetchEmails, // Function to fetch data
  });

  return { data, error, loading: isLoading };
};

export default useFetchEmails;
