import { useQuery } from 'react-query';
import axios from 'axios';

function useAllLaunches() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const baseUrl: string = `${process.env.REACT_APP_BASE_URL}launches` as string;
  return useQuery('launches', () => axios.get(baseUrl).then((res) => res.data));
}

export default useAllLaunches;