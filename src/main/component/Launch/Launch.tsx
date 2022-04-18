import React from 'react';
import { Link } from 'react-router-dom';
import { ILaunch } from '../../model/launchModel';
import noImage from '../../style/asetss/no-image.svg.png';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Launch = function Launch({ launch }: { launch: ILaunch }) {
  return (
    <div className="wrapper">
      {launch.links.mission_patch_small ? (
        <img
          src={launch.links.mission_patch_small}
          alt="universe"
          height="250px"
          max-width="100%"
        />
      ) : (
        <img src={noImage} alt="universe" height="250px" max-width="100%" />
      )}
      <p className="title">{launch.mission_name} </p>
      <p className="date">{launch.launch_year} </p>
      {launch.details ? (
        <p className="details">{launch.details} </p>
      ) : (
        <p className="details">No description about this launch</p>
      )}
      <Link to={`/${launch.flight_number}`}>
        <button type="button" className="moreDetails">
          More Details
        </button>
      </Link>
    </div>
  );
};
export default Launch;
