import React, { useState, useRef, useCallback } from 'react';
import Launch from './component/Launch/Launch';
import useAllLaunches from './service/useAllLaunches';
import useDebounce from './customHook/useDebounce';
import useFilterLaunch from './service/useFilterLaunch';
import { ILaunch } from './model/launchModel';
import Logout from './component/Logout/Logout';
import InputComponent from './component/InputComponent/InputComponent';

const Main = function Main() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  // const [launchList, setLaunchList] = useState([]);
  const {
    data: launches,
    isLoading,
    error,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useAllLaunches(20);
  const { filterSearch: filterLaunch } = useFilterLaunch(query);
  // console.log('filter', filterLaunch);
  const observer = useRef<IntersectionObserver>();
  // const showData = filter ? filterLaunch?.data : launches?.pages;

  // useEffect(() => {
  //   console.log(filter);
  // }, [filter]);

  const lastLaunchesElementRef = useCallback(
    (node: any) => {
      if (observer) {
        if (observer.current) observer.current?.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            if (isLoading || !hasNextPage) return;
            fetchNextPage();
            // console.log('test');
          }
        });
        if (node) observer.current.observe(node);
      }
    },
    [fetchNextPage, isLoading]
  );

  useDebounce(() => {
    if (filter) {
      setQuery(filter);
    }
  }, filter);

  const handleSearch = (e: any) => {
    setFilter(e.target.value);
  };

  if (isError) return <div> Error: {(error as Error)?.message}</div>;

  return (
    <div>
      <Logout />
      <InputComponent
        className="input"
        type="text"
        value={filter}
        placeholder="Enter year..."
        onChange={handleSearch}
      />
      <ul className="main" data-testid="launch">
        {isLoading && <h1 className="text-white">Loading...</h1>}
        {!query &&
          launches?.pages.map((page) => {
            return page.data.map((launch) => (
              <div key={launch.mission_name} ref={lastLaunchesElementRef}>
                <Launch launch={launch} />
              </div>
            ));
          })}
        {query.length === 4 &&
          filterLaunch?.data.map((launch: ILaunch) => {
            return (
              <div key={launch.mission_name} ref={lastLaunchesElementRef}>
                <Launch launch={launch} />
              </div>
            );
          })}
      </ul>
      {/* {showData &&
        showData.map((launch: ILaunch) => {
          return (
            <div key={launch.mission_name}>
              <Launch launch={launch} />
              <div className="loading" ref={lastLaunchesElementRef} />
            </div>
          );
        })}
      ; */}
    </div>
  );
};
export default Main;
