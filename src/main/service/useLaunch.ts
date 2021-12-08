import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { ILaunch } from '../model/launchModel';

const fetchLaunch = (id = '') => {
  const baseUrl = `${process.env.REACT_APP_BASE_URL}launches?filter&flight_number=${id}`;
  const response: Promise<AxiosResponse<ILaunch[]>> = axios.get(baseUrl);
  return response;
};

const useLaunch = (id: string | undefined) => {
  const data = useQuery('launch', () => fetchLaunch(id));
  return data;
};

export default useLaunch;
