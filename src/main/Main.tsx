import React from 'react';
import Launch from './component/Launch';
import { ILaunch } from './model/launchModel';
import AllLaunches from './service/AllLaunches';

const Main = function Main() {
  const { data: launches } = AllLaunches();

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
