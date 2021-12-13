import { useInfiniteQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { ILaunch } from '../model/launchModel';

const fetchLaunches = ({ pageParam = { offset: 0, limit: 20 } }) => {
  const baseUrl: string =
    `${process.env.REACT_APP_BASE_URL}launches?limit=${pageParam.limit}&offset=${pageParam.offset}` as string;
  const response: Promise<AxiosResponse<ILaunch[]>> = axios.get(baseUrl);
  return response;
};

const useAllLaunches = (offset: number, limit = 20) => {
  console.log('test');
  const allLaunchesQuery = useInfiniteQuery(
    'launches',
    ({ pageParam }) => fetchLaunches({ pageParam }),
    {
      getNextPageParam: (lastPage, allPages) => {
        const prevOffset = parseInt(
          lastPage.request.responseURL.split('offset=')[1],
          10
        );
        const maxCount = Number(allPages[0].headers['spacex-api-count']);
        const nextPageParams = {
          offset: prevOffset + offset,
          limit,
        };
        return prevOffset <= maxCount ? nextPageParams : undefined;
      },
    }
  );

  return { ...allLaunchesQuery };
};

export default useAllLaunches;

// napraviti jos jedan hook koji uzima samo filter a ne infinite scroll
