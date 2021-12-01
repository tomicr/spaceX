/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef, useCallback } from 'react';
import Launch from './component/Launch';
import useAllLaunches from './service/useAllLaunches';
import { ILaunch } from './model/launchModel';

const Main = function Main() {
  const [flight_year, setFlight_year] = useState('');
  const [offset, setOffset] = useState(20);
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
            console.log('visible');
          }
        });
        if (node) observer.current.observe(node);
      }
    },
    [observer, loading, setOffset]
  );

  const handleSearch = (e: any) => {
    setFlight_year(e.target.value);
    setOffset(0);
  };

  function checkIfBottom() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight)
      console.log('DO DNA');
  }

  useEffect(() => {
    window.addEventListener('scroll', checkIfBottom);
  }, []);

  return (
    <div>
      <div>
        <input type="text" value={flight_year} onChange={handleSearch} />
      </div>
      <div>{loading && 'Loading....'}</div>
      {launches && (
        <ul className="main">
          {launches?.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.launches.results.map((launch: ILaunch) => {
                if (launches.pages.length === i + 1) {
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
