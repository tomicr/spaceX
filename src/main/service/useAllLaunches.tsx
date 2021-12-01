/* eslint-disable camelcase */
/* eslint-disable radix */
/* eslint-disable max-len */
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { ILaunch } from '../model/launchModel';

const fetchLaunches = ({
  pageParam = { offset: 0, limit: 20, flight_year: 0 },
}) => {
  const baseUrl: string =
    `${process.env.REACT_APP_BASE_URL}launches?limit=${pageParam.limit}&offset=${pageParam.offset}&filter&launch_year=${pageParam.flight_year}` as string;
  return axios.get<ILaunch[]>(baseUrl);
};

const useAllLaunches = (offset: number, limit = 20) => {
  const allLaunchesQuery = useInfiniteQuery(
    'launches',
    ({ pageParam }) => fetchLaunches({ pageParam }),
    {
      // getNextPageParam: (lastPage) => {
      //   const { page, total_pages: totalPages } = lastPage.launches;
      //   return page < totalPages ? page + 1 : undefined;
      // },
      getNextPageParam: (lastPage, pages) => {
        const prevOffset = parseInt(
          lastPage.request.responseUrl.split('offset=')[1]
        );
        const maxCount = Number(pages[0].headers['spacex-api-count']);
        const getNextPageParams = { offset: prevOffset + offset, limit };
        return prevOffset <= maxCount ? getNextPageParams : undefined;
      },
    }
  );
  return { ...allLaunchesQuery };
};

export default useAllLaunches;
