import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface useFetchDataProps {
  queryKey: string;
  url: string;
}

const useFetchData = ({ queryKey, url }: useFetchDataProps) => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await axios.get(url);
      return response?.data?.data;
    },
  });

  return { isLoading, error, data, refetch };
};

export default useFetchData;
