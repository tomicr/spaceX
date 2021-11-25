/* eslint-disable react/jsx-boolean-value */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Launch from './component/Launch';
import { ILaunch } from './model/launchModel';
import useAllLaunches from './service/useAllLaunches';

const Main = function Main() {
  const { data: launches } = useAllLaunches();

  return (
    <ul className="main">
      {launches &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        launches.map((launch: ILaunch) => (
          <Launch key={launch.mission_name} launch={launch} />
        ))}
    </ul>
  );
};
export default Main;
