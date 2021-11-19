import React from 'react';
import universe from '../style/asetss/universe.jpg';
import AllLaunches from '../service/AllLaunches';

const Launch = function Launch() {
  const launches = AllLaunches();
  console.log(launches);

  return (
    <div className="wrapper">
      <img className="image" src={universe} alt="universe" />
      <p className="title"> test</p>
      <p className="date"> test</p>
      <p className="details"> test </p>
      <button type="button" className="moreDetails">
        More Details
      </button>
    </div>
  );
};
export default Launch;
