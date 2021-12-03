/* eslint-disable camelcase */
export interface ILaunch {
  flight_number: number;
  mission_name: string;
  launch_year: number;
  details: string;
  links: {
    mission_patch_small: string;
  };
}
