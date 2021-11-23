import { useQuery } from 'react-query';
import axios from 'axios';

export default function AllLaunches() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const baseUrl: any = `${process.env.REACT_APP_BASE_URL}launches` as any;
  return useQuery('launches', () => axios.get(baseUrl).then((res) => res.data));
}