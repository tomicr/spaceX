/* eslint-disable react/jsx-boolean-value */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Launch from './component/Launch';
import useAllLaunches from './service/useAllLaunches';

const Main = function Main() {
  const { data: launches } = useAllLaunches();

  return (
    <div>
      {launches && (
        <InfiniteScroll
          dataLength={launches.length}
          next={() => useAllLaunches}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <ul className="main">
            {launches.map((launch: any) => (
              <Launch key={launch.mission_name} launch={launch} />
            ))}
          </ul>
        </InfiniteScroll>
      )}
    </div>
  );
};
export default Main;
