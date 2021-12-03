import React, { useState, useRef, useCallback } from 'react';
import Launch from './component/Launch';
import useAllLaunches from './service/useAllLaunches';
import useDebounce from './customHook/useDebounce';

const Main = function Main() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  const {
    data: launches,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useAllLaunches(20);
  const observer = useRef<IntersectionObserver>();

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
        onChange={handleSearch}
      />
      {/* <div>{isLoading && 'Loading....'}</div>
      {launches && (
        <ul className="main">
          {launches?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.data.map((launch: ILaunch) => {
                if (launches.pages.length === index + 1) {
                  return (
                    <div ref={lastLaunchesElementRef}>
                      <Launch key={launch.flight_number} launch={launch} />
                    </div>
                  );
                }
                <Launch key={launch.flight_number} launch={launch} />;
              })}
            </React.Fragment>
          ))}
        </ul>
      )} */}
      <ul className="main">
        {isLoading ? (
          <h1 className="text-white">Loading...</h1>
        ) : (
          launches?.pages.map((page) => {
            return page.data.map((launch) => (
              <div ref={lastLaunchesElementRef}>
                <Launch key={launch.flight_number} launch={launch} />
              </div>
            ));
          })
        )}
      </ul>
    </div>
  );
};
export default Main;
