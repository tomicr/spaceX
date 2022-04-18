import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import useLaunch from '../../service/useLaunch';
import backarrow from '../../style/asetss/backarrow.png';

const MoreDetails = function MoreDetails() {
  type PathParams = {
    id: string;
  };
  const { id } = useParams<PathParams>();
  const { data: launch, isLoading, isError, error } = useLaunch(id);
  const history = useHistory();
  const handleClick = () => {
    history.push('/allLaunches');
  };
  return (
    <div>
      {isLoading && (
        <div>
          <h1 className="text-white">Loading...</h1>
        </div>
      )}
      {isError && <div> Error: {(error as Error)?.message}</div>}
      <button className="buttonBack" type="button" onClick={handleClick}>
        <img className="buttonBack" src={backarrow} alt="backButton" />
        <strong> Back </strong>
      </button>
      {launch && (
        <div>
          {launch.data.map((launchDetails) => {
            return (
              <div className="wrapper-details" key={launchDetails.mission_name}>
                <div className="card">
                  <img
                    src={launchDetails.links.mission_patch_small}
                    alt="launch"
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
                {/* <div className="card">
                  {launchDetails.links.flickr_images &&
                    launchDetails.links.flickr_images.map((launchImg: any) => (
                      <div>
                        <img
                          data-testid="gallery-img"
                          src={launchImg}
                          alt="launch"
                          width="30px"    
                          height="30px"
                        />
                      </div>
                    ))}
                </div> */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default MoreDetails;
