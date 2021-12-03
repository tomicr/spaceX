import React from 'react';
import { Link } from 'react-router-dom';
import { ILaunch } from '../model/launchModel';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Launch = function Launch({ launch }: { launch: ILaunch }) {
  return (
    <div className="wrapper">
      <img
        className="image"
        src={launch.links.mission_patch_small}
        alt="universe"
      />
      <p className="title">{launch.mission_name} </p>
      <p className="date">{launch.launch_year} </p>
      <p className="details">{launch.details} </p>
      <Link to={`/${launch.mission_name}`}>
        <button type="button" className="moreDetails">
          More Details
        </button>
      </Link>
    </div>
  );
};
export default Launch;
