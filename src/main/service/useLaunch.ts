import axios from 'axios';
import { useQuery } from 'react-query';

const fetchLaunch = (id = '') => {
  const baseUrl: string =
    `${process.env.REACT_APP_BASE_URL}?filter&flight_number=${id}` as string;
  const response = axios.get(baseUrl);
  return response;
};

const useLaunch = (id: string) => {
  const data = useQuery('launch', () => fetchLaunch(id));
  return data;
};

export default useLaunch;
