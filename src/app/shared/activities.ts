import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
  {
    "id": 1,
    "name": "Main Walking Trails",
    "date": new Date('06/01/2017'),
    "distance": 6.2,
    "commments": "Nice day, cool temps",
    "gpxData": '../../assets/gpx/1.gpx'
  },
  {
    "id": 2,
    "name": "Main Walking Trail 2",
    "date": new Date('06/05/2017'),
    "distance": 4.7,
    "commments": "Cool and windy",
    "gpxData": '../../assets/gpx/1.gpx'
  },
  {
    "id": 3,
    "name": "Main Walking Trail 3",
    "date": new Date('05/06/2017'),
    "distance": 8.8,
    "commments": "Nice day, cool temps",
    "gpxData": '../../assets/gpx/1.gpx'
  }
]
