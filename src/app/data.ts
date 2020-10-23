

export interface DataEntry {
    agent: string,
    guest: string,
    feedback: string,
    survey: string
}

export interface Agents {
    value: number,
    agent: string
}

export interface Rating {
    rating: number,
    description: string
}

export interface SourceData {
    date: string,
    agent: string,
    source: string,
    rating: number

}

export const data: Array<DataEntry> = [];

export const storedAgents: Array<Agents> = [
    {
        value: 0,
        agent: 'Robert'
    },
    {
        value: 1,
        agent: 'Justin'
    },
    {
        value: 2,
        agent: 'Lauren'
    },
    {
        value: 3,
        agent: 'Kelly'
    },
    {
        value: 4,
        agent: 'Matt'
    },
    {
        value: 5,
        agent: 'Amber'
    },
    {
        value: 6,
        agent: 'Ryon'
    },
    {
        value: 7,
        agent: 'Julia'
    },

]

export const storedRatings: Array<Rating> = [
    {
        rating: 1,
        description: 'The worst!'
    },
    {
        rating: 2,
        description: 'Not great.'
    },
    {
        rating: 3,
        description: "About what you'd expect."
    },
    {
        rating: 4,
        description: "Well above average!"
    },
    {
        rating: 5,
        description: "As good at it gets!"
    },
]

export const surveyOptions: Array<any> = [
    'Google',
    'Yelp',
    'Facebook'
]

export const surveyData: Array<SourceData> = [
    {
        "date": "2020-08-17T18:45:26.472Z",
        "agent": "Kelly",
        "source": "Facebook",
        "rating": 2
    },
    {
        "date": "2020-04-17T15:56:42.714Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 4
    },
    {
        "date": "2020-05-04T06:14:00.365Z",
        "agent": "Justin",
        "source": "Yelp",
        "rating": 3
    },
    {
        "date": "2020-09-19T12:22:23.665Z",
        "agent": "Matt",
        "source": "Facebook",
        "rating": 1
    },
    {
        "date": "2020-08-29T11:08:15.245Z",
        "agent": "Ryon",
        "source": "Google",
        "rating": 1
    },
    {
        "date": "2020-09-06T00:01:40.575Z",
        "agent": "Justin",
        "source": "Facebook",
        "rating": 1
    },
    {
        "date": "2020-06-08T14:10:02.513Z",
        "agent": "Lauren",
        "source": "Facebook",
        "rating": 4
    },
    {
        "date": "2020-07-06T19:51:31.764Z",
        "agent": "Justin",
        "source": "Yelp",
        "rating": 2
    },
    {
        "date": "2020-06-14T16:47:19.195Z",
        "agent": "Matt",
        "source": "Yelp",
        "rating": 2
    },
    {
        "date": "2020-09-04T19:04:46.381Z",
        "agent": "Ryon",
        "source": "Facebook",
        "rating": 2
    },
    {
        "date": "2020-09-18T12:10:39.265Z",
        "agent": "Matt",
        "source": "Google",
        "rating": 4
    },
    {
        "date": "2020-10-18T18:10:55.227Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 5
    },
    {
        "date": "2020-04-17T13:13:52.231Z",
        "agent": "Ryon",
        "source": "Yelp",
        "rating": 3
    },
    {
        "date": "2020-07-26T12:03:38.964Z",
        "agent": "Lauren",
        "source": "Yelp",
        "rating": 4
    },
    {
        "date": "2020-09-15T17:42:08.950Z",
        "agent": "Lauren",
        "source": "Google",
        "rating": 3
    },
    {
        "date": "2020-04-13T13:50:40.254Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 5
    },
    {
        "date": "2020-04-30T09:58:14.727Z",
        "agent": "Lauren",
        "source": "Google",
        "rating": 5
    },
    {
        "date": "2020-09-14T00:48:15.835Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 1
    },
    {
        "date": "2020-04-07T04:51:04.238Z",
        "agent": "Matt",
        "source": "Yelp",
        "rating": 4
    },
    {
        "date": "2020-10-04T06:48:07.589Z",
        "agent": "Kelly",
        "source": "Yelp",
        "rating": 5
    },
    {
        "date": "2020-05-25T23:37:08.603Z",
        "agent": "Kelly",
        "source": "Google",
        "rating": 4
    },
    {
        "date": "2020-06-28T08:42:39.433Z",
        "agent": "Robert",
        "source": "Yelp",
        "rating": 3
    },
    {
        "date": "2020-04-04T16:40:00.708Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 5
    },
    {
        "date": "2020-08-30T05:50:28.705Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 5
    },
    {
        "date": "2020-03-03T06:28:44.850Z",
        "agent": "Amber",
        "source": "Yelp",
        "rating": 3
    },
    {
        "date": "2020-02-06T00:02:36.236Z",
        "agent": "Lauren",
        "source": "Facebook",
        "rating": 4
    },
    {
        "date": "2020-03-20T16:30:35.136Z",
        "agent": "Robert",
        "source": "Facebook",
        "rating": 3
    },
    {
        "date": "2020-02-23T19:29:17.041Z",
        "agent": "Justin",
        "source": "Google",
        "rating": 1
    },
    {
        "date": "2020-09-30T07:32:39.165Z",
        "agent": "Kelly",
        "source": "Yelp",
        "rating": 1
    },
    {
        "date": "2020-02-18T12:26:15.740Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 2
    },
    {
        "date": "2020-06-06T21:50:04.831Z",
        "agent": "Justin",
        "source": "Google",
        "rating": 5
    },
    {
        "date": "2020-09-30T09:08:18.174Z",
        "agent": "Amber",
        "source": "Facebook",
        "rating": 4
    },
    {
        "date": "2020-06-22T09:03:55.679Z",
        "agent": "Matt",
        "source": "Facebook",
        "rating": 5
    },
    {
        "date": "2020-09-01T11:06:56.030Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 5
    },
    {
        "date": "2020-08-06T02:24:06.907Z",
        "agent": "Kelly",
        "source": "Yelp",
        "rating": 2
    },
    {
        "date": "2020-10-10T13:22:56.883Z",
        "agent": "Amber",
        "source": "Yelp",
        "rating": 3
    },
    {
        "date": "2020-07-08T07:10:01.795Z",
        "agent": "Ryon",
        "source": "Google",
        "rating": 3
    },
    {
        "date": "2020-06-15T00:15:08.586Z",
        "agent": "Justin",
        "source": "Google",
        "rating": 1
    },
    {
        "date": "2020-02-01T21:11:33.787Z",
        "agent": "Lauren",
        "source": "Facebook",
        "rating": 2
    },
    {
        "date": "2020-05-07T07:13:49.694Z",
        "agent": "Lauren",
        "source": "Facebook",
        "rating": 2
    },
    {
        "date": "2020-06-30T00:40:08.666Z",
        "agent": "Ryon",
        "source": "Google",
        "rating": 1
    },
    {
        "date": "2020-03-19T04:31:23.071Z",
        "agent": "Kelly",
        "source": "Google",
        "rating": 4
    },
    {
        "date": "2020-08-01T23:06:26.361Z",
        "agent": "Ryon",
        "source": "Google",
        "rating": 1
    },
    {
        "date": "2020-07-20T23:44:36.995Z",
        "agent": "Ryon",
        "source": "Facebook",
        "rating": 3
    },
    {
        "date": "2020-09-10T04:09:30.366Z",
        "agent": "Lauren",
        "source": "Google",
        "rating": 1
    },
    {
        "date": "2020-08-31T03:33:35.597Z",
        "agent": "Kelly",
        "source": "Google",
        "rating": 5
    },
    {
        "date": "2020-03-02T05:34:27.941Z",
        "agent": "Ryon",
        "source": "Yelp",
        "rating": 3
    },
    {
        "date": "2020-04-27T12:25:03.256Z",
        "agent": "Kelly",
        "source": "Yelp",
        "rating": 1
    },
    {
        "date": "2020-10-01T07:01:12.278Z",
        "agent": "Lauren",
        "source": "Yelp",
        "rating": 4
    },
    {
        "date": "2020-03-26T15:46:03.033Z",
        "agent": "Robert",
        "source": "Google",
        "rating": 5
    },
    {
        "date": "2020-10-09T08:52:26.464Z",
        "agent": "Lauren",
        "source": "Google",
        "rating": 3
    },
    {
        "date": "2020-08-26T16:37:34.087Z",
        "agent": "Justin",
        "source": "Facebook",
        "rating": 5
    },
    {
        "date": "2020-03-20T13:08:00.682Z",
        "agent": "Matt",
        "source": "Yelp",
        "rating": 4
    },
    {
        "date": "2020-10-02T00:05:37.912Z",
        "agent": "Robert",
        "source": "Google",
        "rating": 5
    },
    {
        "date": "2020-08-06T10:32:57.100Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 3
    },
    {
        "date": "2020-08-16T05:32:12.951Z",
        "agent": "Lauren",
        "source": "Yelp",
        "rating": 2
    },
    {
        "date": "2020-07-16T05:21:26.324Z",
        "agent": "Justin",
        "source": "Yelp",
        "rating": 5
    },
    {
        "date": "2020-10-20T14:43:27.283Z",
        "agent": "Ryon",
        "source": "Yelp",
        "rating": 5
    },
    {
        "date": "2020-10-03T12:39:37.750Z",
        "agent": "Lauren",
        "source": "Yelp",
        "rating": 2
    },
    {
        "date": "2020-04-02T01:48:08.621Z",
        "agent": "Justin",
        "source": "Yelp",
        "rating": 3
    },
    {
        "date": "2020-05-09T06:39:40.169Z",
        "agent": "Robert",
        "source": "Google",
        "rating": 3
    },
    {
        "date": "2020-04-02T15:07:05.751Z",
        "agent": "Ryon",
        "source": "Yelp",
        "rating": 1
    },
    {
        "date": "2020-09-11T18:31:22.709Z",
        "agent": "Kelly",
        "source": "Facebook",
        "rating": 4
    },
    {
        "date": "2020-08-21T21:30:20.146Z",
        "agent": "Ryon",
        "source": "Google",
        "rating": 2
    },
    {
        "date": "2020-03-08T19:57:25.122Z",
        "agent": "Kelly",
        "source": "Yelp",
        "rating": 3
    },
    {
        "date": "2020-07-06T03:10:08.370Z",
        "agent": "Ryon",
        "source": "Yelp",
        "rating": 3
    },
    {
        "date": "2020-07-20T07:37:56.751Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 1
    },
    {
        "date": "2020-07-22T17:32:41.097Z",
        "agent": "Amber",
        "source": "Yelp",
        "rating": 1
    },
    {
        "date": "2020-05-28T04:30:07.306Z",
        "agent": "Lauren",
        "source": "Yelp",
        "rating": 4
    },
    {
        "date": "2020-05-27T20:40:49.540Z",
        "agent": "Kelly",
        "source": "Facebook",
        "rating": 3
    },
    {
        "date": "2020-08-15T19:35:17.387Z",
        "agent": "Matt",
        "source": "Google",
        "rating": 1
    },
    {
        "date": "2020-07-28T12:32:38.191Z",
        "agent": "Kelly",
        "source": "Google",
        "rating": 3
    },
    {
        "date": "2020-09-28T08:55:38.310Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 5
    },
    {
        "date": "2020-09-02T03:49:34.254Z",
        "agent": "Matt",
        "source": "Google",
        "rating": 1
    },
    {
        "date": "2020-10-10T07:09:27.860Z",
        "agent": "Ryon",
        "source": "Facebook",
        "rating": 2
    },
    {
        "date": "2020-10-20T06:22:17.125Z",
        "agent": "Lauren",
        "source": "Yelp",
        "rating": 3
    },
    {
        "date": "2020-05-14T05:48:34.615Z",
        "agent": "Robert",
        "source": "Yelp",
        "rating": 5
    },
    {
        "date": "2020-06-22T01:35:40.160Z",
        "agent": "Kelly",
        "source": "Google",
        "rating": 1
    },
    {
        "date": "2020-02-12T09:14:10.041Z",
        "agent": "Kelly",
        "source": "Yelp",
        "rating": 3
    },
    {
        "date": "2020-08-05T13:24:49.914Z",
        "agent": "Justin",
        "source": "Facebook",
        "rating": 2
    },
    {
        "date": "2020-06-01T02:03:07.584Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 5
    },
    {
        "date": "2020-04-24T16:09:49.585Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 3
    },
    {
        "date": "2020-09-22T19:03:13.878Z",
        "agent": "Kelly",
        "source": "Yelp",
        "rating": 3
    },
    {
        "date": "2020-07-22T23:23:35.391Z",
        "agent": "Kelly",
        "source": "Google",
        "rating": 2
    },
    {
        "date": "2020-02-05T12:40:38.983Z",
        "agent": "Lauren",
        "source": "Yelp",
        "rating": 3
    },
    {
        "date": "2020-05-26T00:51:18.009Z",
        "agent": "Matt",
        "source": "Facebook",
        "rating": 5
    },
    {
        "date": "2020-04-23T14:27:15.864Z",
        "agent": "Matt",
        "source": "Google",
        "rating": 1
    },
    {
        "date": "2020-08-15T04:57:36.224Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 4
    },
    {
        "date": "2020-06-06T13:37:55.631Z",
        "agent": "Ryon",
        "source": "Google",
        "rating": 4
    },
    {
        "date": "2020-08-14T22:40:36.743Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 1
    },
    {
        "date": "2020-04-28T08:19:37.320Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 1
    },
    {
        "date": "2020-07-07T23:44:47.829Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 4
    },
    {
        "date": "2020-02-27T03:42:43.600Z",
        "agent": "Justin",
        "source": "Facebook",
        "rating": 2
    },
    {
        "date": "2020-04-29T10:16:04.327Z",
        "agent": "Kelly",
        "source": "Facebook",
        "rating": 3
    },
    {
        "date": "2020-04-13T16:21:14.795Z",
        "agent": "Kelly",
        "source": "Facebook",
        "rating": 1
    },
    {
        "date": "2020-04-18T00:37:54.875Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 2
    },
    {
        "date": "2020-10-10T11:43:00.174Z",
        "agent": "Ryon",
        "source": "Google",
        "rating": 2
    },
    {
        "date": "2020-02-04T23:49:18.369Z",
        "agent": "Amber",
        "source": "Google",
        "rating": 5
    },
    {
        "date": "2020-03-23T16:59:53.352Z",
        "agent": "Matt",
        "source": "Facebook",
        "rating": 2
    },
    {
        "date": "2020-02-16T02:08:19.265Z",
        "agent": "Justin",
        "source": "Facebook",
        "rating": 2
    },
    { "date": "2020-10-03T19:08:44.041Z", "agent": "Ryon", "source": "Google", "rating": 1 }, { "date": "2020-09-28T04:28:25.737Z", "agent": "Ryon", "source": "Facebook", "rating": 4 }, { "date": "2020-06-14T10:57:24.142Z", "agent": "Kelly", "source": "Google", "rating": 5 }, { "date": "2020-05-26T12:42:47.993Z", "agent": "Justin", "source": "Yelp", "rating": 5 }, { "date": "2020-02-24T21:15:54.956Z", "agent": "Ryon", "source": "Facebook", "rating": 5 }, { "date": "2020-02-03T07:09:25.002Z", "agent": "Justin", "source": "Facebook", "rating": 2 }, { "date": "2020-07-05T08:02:39.406Z", "agent": "Justin", "source": "Yelp", "rating": 1 }, { "date": "2020-07-10T05:24:40.709Z", "agent": "Kelly", "source": "Google", "rating": 5 }, { "date": "2020-02-23T10:39:21.840Z", "agent": "Matt", "source": "Google", "rating": 4 }, { "date": "2020-03-07T09:13:32.155Z", "agent": "Kelly", "source": "Facebook", "rating": 5 }, { "date": "2020-07-12T20:43:34.422Z", "agent": "Lauren", "source": "Yelp", "rating": 3 }, { "date": "2020-04-07T16:05:16.125Z", "agent": "Ryon", "source": "Yelp", "rating": 5 }, { "date": "2020-08-20T03:15:33.530Z", "agent": "Amber", "source": "Facebook", "rating": 5 }, { "date": "2020-09-30T13:01:01.444Z", "agent": "Kelly", "source": "Facebook", "rating": 5 }, { "date": "2020-05-14T08:48:56.847Z", "agent": "Justin", "source": "Google", "rating": 1 }, { "date": "2020-02-13T10:52:42.832Z", "agent": "Ryon", "source": "Google", "rating": 5 }, { "date": "2020-02-25T09:01:44.115Z", "agent": "Robert", "source": "Google", "rating": 2 }, { "date": "2020-05-19T04:03:41.267Z", "agent": "Lauren", "source": "Facebook", "rating": 3 }, { "date": "2020-04-19T08:12:26.867Z", "agent": "Justin", "source": "Yelp", "rating": 3 }, { "date": "2020-03-14T04:53:19.340Z", "agent": "Amber", "source": "Yelp", "rating": 5 }, { "date": "2020-08-06T06:20:50.605Z", "agent": "Robert", "source": "Yelp", "rating": 2 }, { "date": "2020-04-15T07:31:36.180Z", "agent": "Ryon", "source": "Google", "rating": 5 }, { "date": "2020-06-11T05:21:25.005Z", "agent": "Kelly", "source": "Google", "rating": 5 }, { "date": "2020-07-23T03:42:05.148Z", "agent": "Amber", "source": "Google", "rating": 1 }, { "date": "2020-09-10T20:17:49.977Z", "agent": "Justin", "source": "Facebook", "rating": 4 }, { "date": "2020-06-28T17:24:28.700Z", "agent": "Lauren", "source": "Google", "rating": 5 }, { "date": "2020-04-28T13:39:05.525Z", "agent": "Justin", "source": "Yelp", "rating": 3 }, { "date": "2020-04-13T08:26:10.063Z", "agent": "Amber", "source": "Facebook", "rating": 2 }, { "date": "2020-08-26T18:15:22.052Z", "agent": "Robert", "source": "Yelp", "rating": 1 }, { "date": "2020-05-24T02:00:49.679Z", "agent": "Matt", "source": "Yelp", "rating": 1 }, { "date": "2020-07-22T22:14:47.305Z", "agent": "Matt", "source": "Google", "rating": 4 }, { "date": "2020-07-30T02:40:22.706Z", "agent": "Kelly", "source": "Facebook", "rating": 4 }, { "date": "2020-05-20T04:52:35.686Z", "agent": "Kelly", "source": "Yelp", "rating": 5 }, { "date": "2020-08-27T03:42:01.418Z", "agent": "Ryon", "source": "Yelp", "rating": 3 }, { "date": "2020-09-24T19:55:25.124Z", "agent": "Ryon", "source": "Google", "rating": 5 }, { "date": "2020-09-01T18:41:03.114Z", "agent": "Matt", "source": "Google", "rating": 2 }, { "date": "2020-03-17T16:26:31.738Z", "agent": "Justin", "source": "Google", "rating": 4 }, { "date": "2020-04-28T01:41:34.467Z", "agent": "Matt", "source": "Google", "rating": 2 }, { "date": "2020-02-07T14:50:39.014Z", "agent": "Matt", "source": "Google", "rating": 5 }, { "date": "2020-02-02T15:47:37.966Z", "agent": "Amber", "source": "Google", "rating": 1 }, { "date": "2020-04-14T19:51:11.571Z", "agent": "Matt", "source": "Google", "rating": 5 }, { "date": "2020-05-17T19:14:47.139Z", "agent": "Justin", "source": "Google", "rating": 4 }, { "date": "2020-03-04T05:05:38.439Z", "agent": "Ryon", "source": "Facebook", "rating": 4 }, { "date": "2020-07-03T23:30:13.874Z", "agent": "Lauren", "source": "Facebook", "rating": 5 }, { "date": "2020-09-04T10:54:51.395Z", "agent": "Ryon", "source": "Google", "rating": 4 }, { "date": "2020-09-30T10:21:39.915Z", "agent": "Justin", "source": "Yelp", "rating": 2 }, { "date": "2020-09-30T16:38:50.832Z", "agent": "Matt", "source": "Facebook", "rating": 4 }, { "date": "2020-07-13T17:00:47.888Z", "agent": "Robert", "source": "Google", "rating": 1 }, { "date": "2020-02-05T22:36:39.329Z", "agent": "Justin", "source": "Google", "rating": 2 }, { "date": "2020-05-18T23:25:48.158Z", "agent": "Ryon", "source": "Google", "rating": 3 }, { "date": "2020-05-11T21:45:16.412Z", "agent": "Matt", "source": "Yelp", "rating": 2 }, { "date": "2020-08-23T08:51:41.372Z", "agent": "Kelly", "source": "Google", "rating": 5 }, { "date": "2020-08-23T16:58:30.776Z", "agent": "Matt", "source": "Google", "rating": 1 }, { "date": "2020-04-02T15:14:02.703Z", "agent": "Amber", "source": "Facebook", "rating": 1 }, { "date": "2020-07-30T19:14:29.870Z", "agent": "Lauren", "source": "Facebook", "rating": 3 }, { "date": "2020-02-18T08:06:44.177Z", "agent": "Lauren", "source": "Yelp", "rating": 4 }, { "date": "2020-05-08T08:19:37.914Z", "agent": "Amber", "source": "Facebook", "rating": 1 }, { "date": "2020-10-17T16:19:53.538Z", "agent": "Kelly", "source": "Yelp", "rating": 3 }, { "date": "2020-05-17T11:55:22.597Z", "agent": "Lauren", "source": "Facebook", "rating": 5 }, { "date": "2020-10-19T11:41:55.914Z", "agent": "Matt", "source": "Google", "rating": 4 }, { "date": "2020-04-26T23:31:57.617Z", "agent": "Justin", "source": "Google", "rating": 4 }, { "date": "2020-05-29T10:20:24.687Z", "agent": "Lauren", "source": "Google", "rating": 5 }, { "date": "2020-04-19T20:29:25.452Z", "agent": "Matt", "source": "Google", "rating": 3 }, { "date": "2020-05-26T20:39:04.932Z", "agent": "Lauren", "source": "Facebook", "rating": 2 }, { "date": "2020-05-09T02:28:45.414Z", "agent": "Justin", "source": "Google", "rating": 3 }, { "date": "2020-08-05T22:52:23.316Z", "agent": "Amber", "source": "Facebook", "rating": 5 }, { "date": "2020-08-13T06:42:36.493Z", "agent": "Justin", "source": "Facebook", "rating": 5 }, { "date": "2020-08-22T20:57:59.478Z", "agent": "Robert", "source": "Facebook", "rating": 3 }, { "date": "2020-09-29T05:39:11.992Z", "agent": "Kelly", "source": "Google", "rating": 4 }, { "date": "2020-09-01T03:25:54.414Z", "agent": "Justin", "source": "Google", "rating": 1 }, { "date": "2020-03-16T03:21:32.014Z", "agent": "Robert", "source": "Facebook", "rating": 1 }, { "date": "2020-04-13T08:55:37.882Z", "agent": "Amber", "source": "Google", "rating": 2 }, { "date": "2020-09-27T14:01:17.788Z", "agent": "Amber", "source": "Yelp", "rating": 2 }, { "date": "2020-03-12T23:09:38.220Z", "agent": "Ryon", "source": "Yelp", "rating": 3 }, { "date": "2020-02-12T05:28:02.071Z", "agent": "Lauren", "source": "Google", "rating": 3 }, { "date": "2020-07-12T11:05:51.564Z", "agent": "Kelly", "source": "Yelp", "rating": 1 }, { "date": "2020-06-28T14:01:17.075Z", "agent": "Justin", "source": "Yelp", "rating": 4 }, { "date": "2020-08-14T11:36:49.981Z", "agent": "Matt", "source": "Facebook", "rating": 2 }, { "date": "2020-04-15T17:35:12.703Z", "agent": "Justin", "source": "Google", "rating": 2 }, { "date": "2020-06-24T14:20:30.424Z", "agent": "Lauren", "source": "Yelp", "rating": 5 }, { "date": "2020-07-30T18:55:50.001Z", "agent": "Lauren", "source": "Yelp", "rating": 1 }, { "date": "2020-10-05T23:17:55.468Z", "agent": "Justin", "source": "Facebook", "rating": 3 }, { "date": "2020-06-08T04:02:28.359Z", "agent": "Justin", "source": "Google", "rating": 4 }, { "date": "2020-02-13T19:02:15.513Z", "agent": "Robert", "source": "Yelp", "rating": 5 }, { "date": "2020-06-24T07:01:39.783Z", "agent": "Justin", "source": "Facebook", "rating": 3 }, { "date": "2020-10-21T10:05:09.077Z", "agent": "Matt", "source": "Facebook", "rating": 2 }, { "date": "2020-07-29T05:48:37.501Z", "agent": "Lauren", "source": "Facebook", "rating": 1 }, { "date": "2020-07-22T23:43:09.820Z", "agent": "Matt", "source": "Google", "rating": 2 }, { "date": "2020-07-15T08:49:09.168Z", "agent": "Lauren", "source": "Facebook", "rating": 4 }, { "date": "2020-06-23T04:17:20.983Z", "agent": "Robert", "source": "Google", "rating": 1 }, { "date": "2020-08-24T04:06:59.134Z", "agent": "Robert", "source": "Google", "rating": 5 }, { "date": "2020-09-15T23:41:36.642Z", "agent": "Ryon", "source": "Yelp", "rating": 1 }, { "date": "2020-05-14T20:48:07.186Z", "agent": "Justin", "source": "Facebook", "rating": 1 }, { "date": "2020-09-10T23:07:44.120Z", "agent": "Kelly", "source": "Google", "rating": 4 }, { "date": "2020-05-01T00:04:57.873Z", "agent": "Matt", "source": "Google", "rating": 4 }, { "date": "2020-07-13T06:54:33.567Z", "agent": "Ryon", "source": "Google", "rating": 3 }, { "date": "2020-10-14T09:09:15.542Z", "agent": "Kelly", "source": "Yelp", "rating": 4 }, { "date": "2020-04-14T00:20:23.914Z", "agent": "Amber", "source": "Google", "rating": 2 }, { "date": "2020-07-21T03:54:05.465Z", "agent": "Amber", "source": "Google", "rating": 4 }, { "date": "2020-08-09T13:00:02.115Z", "agent": "Kelly", "source": "Yelp", "rating": 2 },
    { "date": "2020-04-30T05:18:25.719Z", "agent": "Kelly", "source": "Google", "rating": 1 }, { "date": "2020-06-01T17:26:25.198Z", "agent": "Ryon", "source": "Google", "rating": 3 }, { "date": "2020-05-09T10:43:07.621Z", "agent": "Justin", "source": "Facebook", "rating": 2 }, { "date": "2020-02-24T06:07:11.809Z", "agent": "Lauren", "source": "Facebook", "rating": 2 }, { "date": "2020-08-10T20:10:45.291Z", "agent": "Robert", "source": "Facebook", "rating": 5 }, { "date": "2020-08-17T19:28:17.533Z", "agent": "Lauren", "source": "Yelp", "rating": 1 }, { "date": "2020-09-21T17:57:13.686Z", "agent": "Robert", "source": "Facebook", "rating": 2 }, { "date": "2020-09-07T14:06:53.211Z", "agent": "Ryon", "source": "Facebook", "rating": 2 }, { "date": "2020-06-28T23:21:40.507Z", "agent": "Kelly", "source": "Facebook", "rating": 2 }, { "date": "2020-06-28T21:36:43.625Z", "agent": "Ryon", "source": "Google", "rating": 4 }, { "date": "2020-04-15T10:28:35.049Z", "agent": "Justin", "source": "Google", "rating": 4 }, { "date": "2020-03-03T05:49:17.996Z", "agent": "Lauren", "source": "Google", "rating": 4 }, { "date": "2020-10-15T22:05:22.344Z", "agent": "Lauren", "source": "Google", "rating": 5 }, { "date": "2020-08-25T16:54:36.117Z", "agent": "Robert", "source": "Google", "rating": 3 }, { "date": "2020-04-09T00:17:31.963Z", "agent": "Amber", "source": "Google", "rating": 1 }, { "date": "2020-10-12T05:24:59.432Z", "agent": "Matt", "source": "Facebook", "rating": 1 }, { "date": "2020-06-11T20:35:35.501Z", "agent": "Amber", "source": "Yelp", "rating": 5 }, { "date": "2020-05-27T06:47:19.354Z", "agent": "Kelly", "source": "Yelp", "rating": 1 }, { "date": "2020-04-13T23:16:53.644Z", "agent": "Matt", "source": "Facebook", "rating": 5 }, { "date": "2020-09-17T23:40:07.337Z", "agent": "Robert", "source": "Google", "rating": 1 }, { "date": "2020-07-21T22:31:44.387Z", "agent": "Matt", "source": "Yelp", "rating": 4 }, { "date": "2020-10-07T09:26:01.739Z", "agent": "Justin", "source": "Yelp", "rating": 5 }, { "date": "2020-07-12T15:40:46.471Z", "agent": "Robert", "source": "Yelp", "rating": 2 }, { "date": "2020-06-26T15:52:23.033Z", "agent": "Justin", "source": "Facebook", "rating": 3 }, { "date": "2020-02-01T09:10:21.633Z", "agent": "Ryon", "source": "Facebook", "rating": 2 }, { "date": "2020-02-04T19:51:33.616Z", "agent": "Robert", "source": "Facebook", "rating": 5 }, { "date": "2020-08-21T10:02:28.423Z", "agent": "Robert", "source": "Facebook", "rating": 5 }, { "date": "2020-07-04T16:38:25.964Z", "agent": "Kelly", "source": "Facebook", "rating": 4 }, { "date": "2020-06-07T08:23:11.226Z", "agent": "Kelly", "source": "Google", "rating": 2 }, { "date": "2020-06-05T23:02:23.250Z", "agent": "Ryon", "source": "Yelp", "rating": 5 }, { "date": "2020-03-13T03:45:48.462Z", "agent": "Lauren", "source": "Yelp", "rating": 1 }, { "date": "2020-04-01T17:00:43.984Z", "agent": "Matt", "source": "Facebook", "rating": 1 }, { "date": "2020-07-20T17:33:55.227Z", "agent": "Robert", "source": "Google", "rating": 4 }, { "date": "2020-06-21T01:13:56.014Z", "agent": "Lauren", "source": "Yelp", "rating": 2 }, { "date": "2020-06-14T20:53:44.549Z", "agent": "Justin", "source": "Yelp", "rating": 2 }, { "date": "2020-10-04T19:37:05.188Z", "agent": "Ryon", "source": "Yelp", "rating": 3 }, { "date": "2020-09-03T00:09:50.284Z", "agent": "Justin", "source": "Yelp", "rating": 5 }, { "date": "2020-10-18T19:57:57.154Z", "agent": "Ryon", "source": "Facebook", "rating": 4 }, { "date": "2020-05-17T15:40:56.848Z", "agent": "Robert", "source": "Facebook", "rating": 3 }, { "date": "2020-08-03T11:59:13.487Z", "agent": "Justin", "source": "Facebook", "rating": 3 }, { "date": "2020-07-28T13:08:39.122Z", "agent": "Robert", "source": "Facebook", "rating": 3 }, { "date": "2020-03-13T15:47:53.992Z", "agent": "Matt", "source": "Facebook", "rating": 2 }, { "date": "2020-02-24T06:53:11.324Z", "agent": "Robert", "source": "Google", "rating": 2 }, { "date": "2020-05-17T06:54:21.039Z", "agent": "Matt", "source": "Google", "rating": 3 }, { "date": "2020-05-22T13:54:33.441Z", "agent": "Robert", "source": "Google", "rating": 5 }, { "date": "2020-05-19T20:33:34.683Z", "agent": "Matt", "source": "Yelp", "rating": 2 }, { "date": "2020-06-30T01:49:19.507Z", "agent": "Ryon", "source": "Facebook", "rating": 1 }, { "date": "2020-04-03T05:05:56.884Z", "agent": "Justin", "source": "Facebook", "rating": 3 }, { "date": "2020-08-30T23:08:56.986Z", "agent": "Robert", "source": "Yelp", "rating": 1 }, { "date": "2020-05-26T10:33:16.476Z", "agent": "Robert", "source": "Yelp", "rating": 3 }, { "date": "2020-05-24T14:07:18.085Z", "agent": "Matt", "source": "Google", "rating": 4 }, { "date": "2020-07-02T03:58:32.570Z", "agent": "Justin", "source": "Facebook", "rating": 3 }, { "date": "2020-08-25T10:07:57.998Z", "agent": "Amber", "source": "Yelp", "rating": 3 }, { "date": "2020-03-06T09:07:51.242Z", "agent": "Lauren", "source": "Google", "rating": 2 }, { "date": "2020-05-27T00:53:10.626Z", "agent": "Lauren", "source": "Facebook", "rating": 2 }, { "date": "2020-02-05T11:19:39.388Z", "agent": "Robert", "source": "Google", "rating": 5 }, { "date": "2020-02-16T16:07:43.261Z", "agent": "Lauren", "source": "Facebook", "rating": 5 }, { "date": "2020-10-08T19:31:37.291Z", "agent": "Justin", "source": "Facebook", "rating": 3 }, { "date": "2020-06-28T18:24:05.298Z", "agent": "Justin", "source": "Yelp", "rating": 5 }, { "date": "2020-02-02T04:39:32.492Z", "agent": "Matt", "source": "Google", "rating": 5 }, { "date": "2020-02-01T15:35:23.949Z", "agent": "Matt", "source": "Facebook", "rating": 2 }, { "date": "2020-09-11T01:15:50.004Z", "agent": "Matt", "source": "Facebook", "rating": 1 }, { "date": "2020-02-19T20:25:05.298Z", "agent": "Lauren", "source": "Google", "rating": 1 }, { "date": "2020-07-01T22:11:15.682Z", "agent": "Robert", "source": "Google", "rating": 3 }, { "date": "2020-08-30T12:28:30.241Z", "agent": "Kelly", "source": "Google", "rating": 5 }, { "date": "2020-04-20T02:29:12.725Z", "agent": "Lauren", "source": "Facebook", "rating": 3 }, { "date": "2020-05-09T04:20:24.664Z", "agent": "Robert", "source": "Yelp", "rating": 4 }, { "date": "2020-06-15T13:02:21.661Z", "agent": "Amber", "source": "Yelp", "rating": 3 }, { "date": "2020-05-02T14:45:05.372Z", "agent": "Ryon", "source": "Facebook", "rating": 4 }, { "date": "2020-05-14T11:41:56.669Z", "agent": "Amber", "source": "Facebook", "rating": 1 }, { "date": "2020-08-28T10:24:26.175Z", "agent": "Ryon", "source": "Facebook", "rating": 2 }, { "date": "2020-05-01T07:02:47.116Z", "agent": "Kelly", "source": "Google", "rating": 3 }, { "date": "2020-07-03T09:13:18.783Z", "agent": "Lauren", "source": "Facebook", "rating": 2 }, { "date": "2020-10-17T05:23:27.319Z", "agent": "Lauren", "source": "Facebook", "rating": 3 }, { "date": "2020-02-29T23:01:21.350Z", "agent": "Justin", "source": "Google", "rating": 4 }, { "date": "2020-06-17T18:53:14.756Z", "agent": "Kelly", "source": "Facebook", "rating": 5 }, { "date": "2020-09-12T18:41:02.774Z", "agent": "Amber", "source": "Google", "rating": 5 }, { "date": "2020-06-05T08:45:31.170Z", "agent": "Amber", "source": "Facebook", "rating": 3 }, { "date": "2020-09-09T22:38:11.799Z", "agent": "Robert", "source": "Yelp", "rating": 1 }, { "date": "2020-07-07T09:38:45.744Z", "agent": "Amber", "source": "Facebook", "rating": 2 }, { "date": "2020-02-20T07:06:17.526Z", "agent": "Kelly", "source": "Yelp", "rating": 3 }, { "date": "2020-04-10T14:35:45.620Z", "agent": "Justin", "source": "Google", "rating": 4 }, { "date": "2020-07-30T20:49:47.468Z", "agent": "Kelly", "source": "Google", "rating": 1 }, { "date": "2020-03-31T10:46:55.857Z", "agent": "Justin", "source": "Yelp", "rating": 5 }, { "date": "2020-09-22T16:50:12.455Z", "agent": "Lauren", "source": "Google", "rating": 5 }, { "date": "2020-08-25T02:03:34.937Z", "agent": "Matt", "source": "Google", "rating": 2 }, { "date": "2020-10-11T01:05:01.472Z", "agent": "Justin", "source": "Google", "rating": 3 }, { "date": "2020-02-10T11:54:30.607Z", "agent": "Justin", "source": "Facebook", "rating": 1 }, { "date": "2020-04-27T12:13:16.945Z", "agent": "Justin", "source": "Facebook", "rating": 5 }, { "date": "2020-10-02T15:14:02.504Z", "agent": "Matt", "source": "Yelp", "rating": 3 }, { "date": "2020-02-28T23:04:13.803Z", "agent": "Kelly", "source": "Facebook", "rating": 4 }, { "date": "2020-09-02T20:28:08.883Z", "agent": "Justin", "source": "Facebook", "rating": 4 }, { "date": "2020-06-04T02:18:47.698Z", "agent": "Matt", "source": "Facebook", "rating": 5 }, { "date": "2020-06-29T14:12:29.193Z", "agent": "Ryon", "source": "Facebook", "rating": 2 }, { "date": "2020-06-17T13:37:12.576Z", "agent": "Justin", "source": "Facebook", "rating": 3 }, { "date": "2020-07-29T22:39:33.260Z", "agent": "Kelly", "source": "Facebook", "rating": 4 }, { "date": "2020-07-11T11:58:55.299Z", "agent": "Ryon", "source": "Facebook", "rating": 4 }, { "date": "2020-02-19T05:49:53.398Z", "agent": "Ryon", "source": "Google", "rating": 5 }, { "date": "2020-10-04T18:44:19.429Z", "agent": "Matt", "source": "Google", "rating": 2 }, { "date": "2020-03-31T17:44:20.939Z", "agent": "Robert", "source": "Google", "rating": 3 }

];