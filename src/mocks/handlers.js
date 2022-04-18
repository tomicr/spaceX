import { rest } from 'msw';
import {
  mockLaunch,
  mockLaunchWithoutMissionPatch,
  mockLaunchWithoutDescription,
  mockLaunchWithEverything,
} from './mockLaunches';

export const handlers = [
  rest.get('https://api.spacexdata.com/v3/launches', (req, res, ctx) => {
    return res(
      ctx.json[
        {
          mockLaunch,
          mockLaunchWithoutMissionPatch,
          mockLaunchWithoutDescription,
          mockLaunchWithEverything,
        }
      ]
    );
  }),
];
