import axios from 'axios';
import { useQuery } from 'react-query';

const fetchLaunch = (query: string) => {
  const baseUrl: string = `${
    process.env.REACT_APP_BASE_URL
  }launches?filter&launch_year=${query || ''}` as string;
  const response = axios.get(baseUrl);
  return response;
};

const useFilterLaunch = (query: string) => {
  const {
    data: filterSearch,
    error,
    isLoading,
    isError,
    isSuccess,
  } = useQuery('launch', () => fetchLaunch(query));
  return { filterSearch, error, isLoading, isError, isSuccess };
};

export default useFilterLaunch;
