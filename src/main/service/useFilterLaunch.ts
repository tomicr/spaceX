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
  const filterSearch = useQuery('launch', () => fetchLaunch(query));
  return filterSearch;
};

export default useFilterLaunch;
