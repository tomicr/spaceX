import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import useLaunch from '../service/useLaunch';
import backarrow from '../style/asetss/backarrow.png';

const MoreDetails = function MoreDetails() {
  const { id } = useParams();
  const { data: launch, isLoading } = useLaunch(id);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div>
      <button className="buttonBack" type="button" onClick={handleClick}>
        <img className="buttonBack" src={backarrow} alt="backButton" />
      </button>
      {isLoading && <h1 className="text-white">Loading...</h1>}
      {launch && (
        <div>
          {launch.data.map((launchDetails) => {
            return (
              <div className="wrapper-details">
                <div className="card">
                  <img
                    src={launchDetails.links.mission_patch_small}
                    alt="launchImage"
                  />
                  <p className="name">{launchDetails.mission_name}</p>
                  <p className="text-style">{launchDetails.details}</p>
                  {!launchDetails.details && (
                    <p className="text-style">No description for this launch</p>
                  )}
                  <p className="launchDate">
                    Launch date: {launchDetails.launch_date_local}
                  </p>
                </div>
                <div className="card">
                  <p className="name">Rocket</p>
                  <p className="text-style">
                    Name: {launchDetails.rocket.rocket_name}
                  </p>
                  <p className="text-style">
                    Type: {launchDetails.rocket.rocket_type}
                  </p>
                  <p className="text-style">
                    Launch site: {launchDetails.launch_site.site_name_long}
                  </p>
                  <p className="text-style">
                    Launch success:
                    {launchDetails.launch_success
                      ? ' Succesfull'
                      : ' Not Succesfull'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default MoreDetails;
