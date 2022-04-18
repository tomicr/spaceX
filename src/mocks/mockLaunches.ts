const mockLaunch = {
  flight_number: 1,
  mission_name: 'FalconSat (Everything but gallery)',
  mission_id: [],
  upcoming: false,
  launch_year: '2006',
  launch_date_unix: 1143239400,
  launch_date_utc: '2006-03-24T22:30:00.000Z',
  launch_date_local: '2006-03-25T10:30:00+12:00',
  is_tentative: false,
  tentative_max_precision: 'hour',
  tbd: false,
  launch_window: 0,
  rocket: {
    rocket_id: 'falcon1',
    rocket_name: 'Falcon 1',
    rocket_type: 'Merlin A',
    first_stage: {
      cores: [
        {
          core_serial: 'Merlin1A',
          flight: 1,
          block: null,
          gridfins: false,
          legs: false,
          reused: false,
          land_success: null,
          landing_intent: false,
          landing_type: null,
          landing_vehicle: null,
        },
      ],
    },
    second_stage: {
      block: 1,
      payloads: [
        {
          payload_id: 'FalconSAT-2',
          norad_id: [],
          reused: false,
          customers: ['DARPA'],
          nationality: 'United States',
          manufacturer: 'SSTL',
          payload_type: 'Satellite',
          payload_mass_kg: 20,
          payload_mass_lbs: 43,
          orbit: 'LEO',
          orbit_params: {
            reference_system: 'geocentric',
            regime: 'low-earth',
            longitude: null,
            semi_major_axis_km: null,
            eccentricity: null,
            periapsis_km: 400,
            apoapsis_km: 500,
            inclination_deg: 39,
            period_min: null,
            lifespan_years: null,
            epoch: null,
            mean_motion: null,
            raan: null,
            arg_of_pericenter: null,
            mean_anomaly: null,
          },
        },
      ],
    },
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ship: null,
    },
  },
  ships: [],
  telemetry: { flight_club: null },
  launch_site: {
    site_id: 'kwajalein_atoll',
    site_name: 'Kwajalein Atoll',
    site_name_long: 'Kwajalein Atoll Omelek Island',
  },
  launch_success: false,
  launch_failure_details: {
    time: 33,
    altitude: null,
    reason: 'merlin engine failure',
  },
  links: {
    mission_patch: 'https://images2.imgbox.com/40/e3/GypSkayF_o.png',
    mission_patch_small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
    reddit_campaign: null,
    reddit_launch: null,
    reddit_recovery: null,
    reddit_media: null,
    presskit: null,
    article_link:
      'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html',
    wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
    video_link: 'https://www.youtube.com/watch?v=0a_00nJ_Y88',
    youtube_id: '0a_00nJ_Y88',
    flickr_images: [],
  },
  details: 'Engine failure at 33 seconds and loss of vehicle',
  static_fire_date_utc: '2006-03-17T00:00:00.000Z',
  static_fire_date_unix: 1142553600,
  timeline: { webcast_liftoff: 54 },
  crew: null,
};
const mockLaunchWithoutDescription = {
  flight_number: 2,
  mission_name: 'Sata(Without description)',
  mission_id: [],
  upcoming: false,
  launch_year: '2006',
  launch_date_unix: 1143239400,
  launch_date_utc: '2006-03-24T22:30:00.000Z',
  launch_date_local: '2006-03-25T10:30:00+12:00',
  is_tentative: false,
  tentative_max_precision: 'hour',
  tbd: false,
  launch_window: 0,
  rocket: {
    rocket_id: 'falcon1',
    rocket_name: 'Falcon 1',
    rocket_type: 'Merlin A',
    first_stage: {
      cores: [
        {
          core_serial: 'Merlin1A',
          flight: 1,
          block: null,
          gridfins: false,
          legs: false,
          reused: false,
          land_success: null,
          landing_intent: false,
          landing_type: null,
          landing_vehicle: null,
        },
      ],
    },
    second_stage: {
      block: 1,
      payloads: [
        {
          payload_id: 'FalconSAT-2',
          norad_id: [],
          reused: false,
          customers: ['DARPA'],
          nationality: 'United States',
          manufacturer: 'SSTL',
          payload_type: 'Satellite',
          payload_mass_kg: 20,
          payload_mass_lbs: 43,
          orbit: 'LEO',
          orbit_params: {
            reference_system: 'geocentric',
            regime: 'low-earth',
            longitude: null,
            semi_major_axis_km: null,
            eccentricity: null,
            periapsis_km: 400,
            apoapsis_km: 500,
            inclination_deg: 39,
            period_min: null,
            lifespan_years: null,
            epoch: null,
            mean_motion: null,
            raan: null,
            arg_of_pericenter: null,
            mean_anomaly: null,
          },
        },
      ],
    },
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ship: null,
    },
  },
  ships: [],
  telemetry: { flight_club: null },
  launch_site: {
    site_id: 'kwajalein_atoll',
    site_name: 'Kwajalein Atoll',
    site_name_long: 'Kwajalein Atoll Omelek Island',
  },
  launch_success: false,
  launch_failure_details: {
    time: 33,
    altitude: null,
    reason: 'merlin engine failure',
  },
  links: {
    mission_patch: 'https://images2.imgbox.com/40/e3/GypSkayF_o.png',
    mission_patch_small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
    reddit_campaign: null,
    reddit_launch: null,
    reddit_recovery: null,
    reddit_media: null,
    presskit: null,
    article_link:
      'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html',
    wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
    video_link: 'https://www.youtube.com/watch?v=0a_00nJ_Y88',
    youtube_id: '0a_00nJ_Y88',
    flickr_images: [],
  },
  details: '',
  static_fire_date_utc: '2006-03-17T00:00:00.000Z',
  static_fire_date_unix: 1142553600,
  timeline: { webcast_liftoff: 54 },
  crew: null,
};

const mockLaunchWithoutMissionPatch = {
  flight_number: 3,
  mission_name: 'Sentinel-6 (No mission patch)',
  mission_id: [],
  launch_year: '2020',
  launch_date_unix: 1605979020,
  launch_date_utc: '2020-11-21T17:17:00.000Z',
  launch_date_local: '2020-11-21T09:17:00-08:00',
  is_tentative: false,
  tentative_max_precision: 'hour',
  tbd: false,
  launch_window: null,
  rocket: {
    rocket_id: 'falcon9',
    rocket_name: 'Falcon 9',
    rocket_type: 'FT',
    first_stage: {
      cores: [
        {
          core_serial: 'B1063',
          flight: 1,
          block: 5,
          gridfins: true,
          legs: true,
          reused: false,
          land_success: true,
          landing_intent: true,
          landing_type: 'RTLS',
          landing_vehicle: 'LZ-4',
        },
      ],
    },
    second_stage: {
      block: 5,
      payloads: [
        {
          payload_id: 'Sentinel-6 Michael Freilich',
          norad_id: [46984],
          reused: false,
          customers: ['NASA'],
          nationality: 'United States',
          manufacturer: 'EUMETSAT',
          payload_type: 'Satellite',
          payload_mass_kg: 1440,
          payload_mass_lbs: 3174.657,
          orbit: 'PO',
          orbit_params: {
            reference_system: 'geocentric',
            regime: 'low-earth',
            longitude: null,
            semi_major_axis_km: 7715.87,
            eccentricity: 0.0007839,
            periapsis_km: 1331.686,
            apoapsis_km: 1343.783,
            inclination_deg: 66.0475,
            period_min: 112.418,
            lifespan_years: 25,
            epoch: '2020-12-21T06:24:02.000Z',
            mean_motion: 12.80929933,
            raan: 337.2491,
            arg_of_pericenter: 266.7039,
            mean_anomaly: 93.2975,
          },
        },
      ],
    },
    fairings: {
      reused: null,
      recovery_attempt: false,
      recovered: null,
      ship: null,
    },
  },
  ships: [],
  telemetry: { flight_club: null },
  launch_site: {
    site_id: 'vafb_slc_4e',
    site_name: 'VAFB SLC 4E',
    site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E',
  },
  launch_success: true,
  links: {
    mission_patch: null,
    mission_patch_small: null,
    reddit_campaign:
      'https://www.reddit.com/r/spacex/comments/jkk93v/sentinel6_michael_freilich_launch_campaign_thread/',
    reddit_launch:
      'https://www.reddit.com/r/spacex/comments/jxsche/rspacex_sentinel6_official_launch_discussion/',
    reddit_recovery: null,
    reddit_media:
      'https://www.reddit.com/r/spacex/comments/jyd67q/rspacex_sentinel6_media_thread_photographer/',
    presskit: null,
    article_link:
      'https://spaceflightnow.com/2020/11/21/international-satellite-launches-to-extend-measurements-of-sea-level-rise/',
    wikipedia: 'https://en.wikipedia.org/wiki/Sentinel-6_Michael_Frielich',
    video_link: 'https://youtu.be/aVFPzTDCihQ',
    youtube_id: 'aVFPzTDCihQ',
    flickr_images: [
      'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg',
      'https://live.staticflickr.com/65535/50631642722_3af8131c6f_o.jpg',
      'https://live.staticflickr.com/65535/50631544171_66bd43eaa9_o.jpg',
      'https://live.staticflickr.com/65535/50631543966_e8035d5cca_o.jpg',
      'https://live.staticflickr.com/65535/50631643257_c214ceee7b_o.jpg',
      'https://live.staticflickr.com/65535/50631643917_cb7db291d0_o.jpg',
    ],
  },
  details:
    'SpaceX will launch Sentinel-6 Michael Freilich into low Earth orbit for NASA, NOAA, ESA, and the European Organization for the Exploitation of Meteorological Satellites aboard a Falcon 9 from SLC-4E, Vandenberg Air Force Station. Sentinel-6(A) is an ocean observation satellite providing radar ocean surface altimetry data and also atmospheric temperature profiles as a secondary mission. The booster for this mission is will land at LZ-4.',
  upcoming: false,
  static_fire_date_utc: '2020-11-17T13:17:00.000Z',
  static_fire_date_unix: 1605619020,
  timeline: null,
  crew: null,
  last_date_update: '2020-11-17T19:27:21.000Z',
  last_ll_launch_date: '2020-11-21T17:17:00.000Z',
  last_ll_update: '2020-11-05T23:48:07.000Z',
  last_wiki_launch_date: '2020-11-21T17:17:00.000Z',
  last_wiki_revision: 'e93220d1-290a-11eb-bd82-0e4885cc0cd7',
  last_wiki_update: '2020-11-17T19:27:21.000Z',
  launch_date_source: 'wiki',
};

const mockLaunchWithEverything = {
  flight_number: 4,
  mission_name: 'Intelsat 35e(Everything)',
  mission_id: [],
  launch_year: '2017',
  launch_date_unix: 1499297700,
  launch_date_utc: '2017-07-05T23:35:00.000Z',
  launch_date_local: '2017-07-05T19:35:00-04:00',
  is_tentative: false,
  tentative_max_precision: 'hour',
  tbd: false,
  launch_window: 3480,
  rocket: {
    rocket_id: 'falcon9',
    rocket_name: 'Falcon 9',
    rocket_type: 'FT',
    first_stage: {
      cores: [
        {
          core_serial: 'B1037',
          flight: 1,
          block: 3,
          gridfins: false,
          legs: false,
          reused: false,
          land_success: null,
          landing_intent: false,
          landing_type: null,
          landing_vehicle: null,
        },
      ],
    },
    second_stage: {
      block: 3,
      payloads: [
        {
          payload_id: 'Intelsat 35e',
          norad_id: [42818],
          reused: false,
          customers: ['Intelsat'],
          nationality: 'United States',
          manufacturer: 'Boeing',
          payload_type: 'Satellite',
          payload_mass_kg: 6761,
          payload_mass_lbs: 14905.45,
          orbit: 'GTO',
          orbit_params: {
            reference_system: 'geocentric',
            regime: 'geosynchronous',
            longitude: -34.5,
            semi_major_axis_km: 42164.578,
            eccentricity: 0.0001786,
            periapsis_km: 35778.913,
            apoapsis_km: 35793.974,
            inclination_deg: 0.0458,
            period_min: 1436.089,
            lifespan_years: 15,
            epoch: '2020-12-21T11:15:30.000Z',
            mean_motion: 1.00272331,
            raan: 164.4238,
            arg_of_pericenter: 109.932,
            mean_anomaly: 310.5294,
          },
        },
      ],
    },
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ship: null,
    },
  },
  ships: [],
  telemetry: {
    flight_club: null,
  },
  launch_site: {
    site_id: 'ksc_lc_39a',
    site_name: 'KSC LC 39A',
    site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
  },
  launch_success: true,
  links: {
    mission_patch: 'https://images2.imgbox.com/94/85/7GzzSMBu_o.png',
    mission_patch_small: 'https://images2.imgbox.com/ab/6f/3l4ib2QW_o.png',
    reddit_campaign: 'https://www.reddit.com/r/spacex/comments/6fw4yy/',
    reddit_launch: 'https://www.reddit.com/r/spacex/comments/6kt2re/',
    reddit_recovery: null,
    reddit_media: 'https://www.reddit.com/r/spacex/comments/6kt3fe/',
    presskit:
      'http://www.spacex.com/sites/spacex/files/intelsat35epresskit.pdf',
    article_link:
      'https://spaceflightnow.com/2017/07/06/spacex-delivers-for-intelsat-on-heavyweight-falcon-9-mission/',
    wikipedia: 'https://en.wikipedia.org/wiki/Intelsat_35e',
    video_link: 'https://www.youtube.com/watch?v=MIHVPCj25Z0',
    youtube_id: 'MIHVPCj25Z0',
    flickr_images: [
      'https://farm5.staticflickr.com/4063/35758875505_a8559a6226_o.jpg',
      'https://farm5.staticflickr.com/4025/35758874355_5075298440_o.jpg',
      'https://farm5.staticflickr.com/4235/35359372730_df7c79797b_o.jpg',
      'https://farm5.staticflickr.com/4014/35359371840_239a658872_o.jpg',
      'https://farm5.staticflickr.com/4002/35577536822_679c68862d_o.jpg',
      'https://farm5.staticflickr.com/4259/34868730393_b778d81a71_o.jpg',
      'https://farm5.staticflickr.com/4162/34868729603_c75aa126b5_o.jpg',
    ],
  },
  details:
    'Due to the constraints of sending a heavy satellite (~6,000 kg) to GTO, the rocket will fly in its expendable configuration and the first-stage booster will not be recovered.',
  upcoming: false,
  static_fire_date_utc: '2017-06-29T00:30:00.000Z',
  static_fire_date_unix: 1498696200,
  timeline: {
    webcast_liftoff: 450,
    go_for_prop_loading: -2280,
    rp1_loading: -2100,
    stage1_lox_loading: -2100,
    stage2_lox_loading: -960,
    engine_chill: -420,
    prelaunch_checks: -60,
    propellant_pressurization: -60,
    go_for_launch: -45,
    ignition: -3,
    liftoff: 0,
    maxq: 78,
    meco: 162,
    stage_sep: 166,
    second_stage_ignition: 173,
    fairing_deploy: 219,
    'seco-1': 517,
    second_stage_restart: 1578,
    'seco-2': 1630,
    payload_deploy: 1921,
  },
  crew: null,
};

export {
  mockLaunch,
  mockLaunchWithoutMissionPatch,
  mockLaunchWithoutDescription,
  mockLaunchWithEverything,
};
