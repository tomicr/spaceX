/* eslint-disable react/jsx-boolean-value */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Launch from './component/Launch';
<<<<<<< HEAD
import { ILaunch } from './model/launchModel';
import AllLaunches from './service/AllLaunches';
=======
import useAllLaunches from './service/useAllLaunches';
import { ILaunch } from './model/launchModel';
>>>>>>> 00211e008dc33ce63feb2e12133ad8fe402f97f0

const Main = function Main() {
  const { data: launches } = useAllLaunches();

  return (
<<<<<<< HEAD
    <ul className="main">
      {launches &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        launches.map((launch: ILaunch) => (
          <Launch key={launch.mission_name} launch={launch} />
        ))}
    </ul>
=======
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
            {launches.map((launch: ILaunch) => {
              return <Launch key={launch.id} launch={launch} />;
            })}
          </ul>
        </InfiniteScroll>
      )}
    </div>
>>>>>>> 00211e008dc33ce63feb2e12133ad8fe402f97f0
  );
};
export default Main;
