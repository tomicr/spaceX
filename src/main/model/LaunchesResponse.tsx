import { ILaunch } from './launchModel';

export interface LaunchesResponse {
  launches: {
    results: ILaunch[];
  };
}
