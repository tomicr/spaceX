import React, { useState, useRef, useCallback, useEffect } from 'react';
import Launch from './component/Launch';
import useAllLaunches from './service/useAllLaunches';
import useDebounce from './customHook/useDebounce';
import useFilterLaunch from './service/useFilterLaunch';
import { ILaunch } from './model/launchModel';

const Main = function Main() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [launchList, setLaunchList] = useState([]);
  const {
    data: launches,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useAllLaunches(20);
  const { data: filterLaunch } = useFilterLaunch(query);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (filterLaunch) {
      setLaunchList((d: any) => d.concat(filterLaunch));
    }
  }, [filterLaunch]);

  const lastLaunchesElementRef = useCallback(
    (node: any) => {
      if (observer) {
        if (observer.current) observer.current?.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            if (isLoading || !hasNextPage) return;
            fetchNextPage();
            console.log('test');
          }
        });
        if (node) observer.current.observe(node);
      }
    },
    [fetchNextPage, isLoading]
  );

  useDebounce(() => {
    setFilter(query);
    setLaunchList([]);
  }, query);

  const handleSearch = (e: any) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        value={query}
        placeholder="Enter year"
        onChange={handleSearch}
      />
      <ul className="main">
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
    </div>
  );
};
export default Main;
