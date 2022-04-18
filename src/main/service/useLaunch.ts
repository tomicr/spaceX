import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { ILaunch } from '../model/launchModel';

const fetchLaunch = (id = '') => {
  // eslint-disable-next-line max-len
  const baseUrl = `${process.env.REACT_APP_BASE_URL}launches?flight_number=${id}`;
  const response: Promise<AxiosResponse<ILaunch[]>> = axios.get(baseUrl);
  return response;
};

const useLaunch = (id: string | undefined) => {
  const { data, error, isLoading, isError } = useQuery('launch', () =>
    fetchLaunch(id)
  );
  return { data, error, isLoading, isError };
};

export default useLaunch;
