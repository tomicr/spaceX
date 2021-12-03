/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { off } from 'process';
import Launch from './component/Launch';
import useAllLaunches from './service/useAllLaunches';
import { ILaunch } from './model/launchModel';
import useDebounce from './customHook/useDebounce';

const Main = function Main() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [offset, setOffset] = useState(0);
  const [loading] = useState();
  const { data: launches } = useAllLaunches(offset);
  const observer = useRef<IntersectionObserver>();

  const lastLaunchesElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer) {
        if (observer.current) observer.current?.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setOffset((value) => value + 20);
          }
        });
        if (node) observer.current.observe(node);
      }
    },
    [observer, loading, setOffset]
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
      <div>{loading && 'Loading....'}</div>
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
      )}
    </div>
  );
};
export default Main;
