import { useQuery } from 'react-query';
import axios from 'axios';

export default function AllLaunches() {
  const baseUrl = 'https://api.spacexdata.com/v3/launches';
  return useQuery('launches', () => axios.get(baseUrl).then((res) => res.data));
}
