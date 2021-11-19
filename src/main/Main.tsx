import React from 'react';
import Launch from './component/Launch';
import AllLaunches from '../service/AllLaunches';

const Main = function Main() {
  const launches = AllLaunches();
  console.log(launches);
  return (
    <div>
      <Launch />
    </div>
  );
};

export default Main;
