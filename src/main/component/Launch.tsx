import React from 'react';
import universe from '../style/asetss/universe.jpg';
import { ILaunch } from '../model/launchModel';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Launch = function Launch({ launch }: { launch: ILaunch }) {
  return (
    <div className="wrapper">
      <img className="image" src={universe} alt="universe" />
      <p className="title">{launch.mission_name} </p>
      <p className="date">{launch.launch_year} </p>
      <p className="details">{launch.details} </p>
      <button type="button" className="moreDetails">
        More Details
      </button>
    </div>
  );
};
export default Launch;
