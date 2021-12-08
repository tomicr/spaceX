/* eslint-disable camelcase */
export interface ILaunch {
  flight_number: number;
  mission_name: string;
  launch_year: number;
  details: string;
  launch_date_local: number;
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
  links: {
    mission_patch_small: string;
    video_link: string;
  };
  launch_site: {
    site_name_long: string;
  };
  launch_success: boolean;
}
