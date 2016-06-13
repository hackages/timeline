export const eventType = {
  hackjam: {
    title: 'hackjam',
    icon: 'img/cd-icon-movie.svg',
  },
  meetup: {
    title: 'meetup',
    icon: 'img/cd-icon-picture.svg',
  }
};

export const cities = {
  brussels: 'Brussels',
  amsterdam: 'Amsterdam',
  antwerp: 'Antwerp',
  gent: 'Ghent',
  london: 'London',
};

export const events = [
  {
    id: 9879698,
    title: 'HackJam React JS: Amsterdam',
    // date: '23/05/2016',
    date: '23052016',
    location: cities.amsterdam,
    eventType: eventType.hackjam,
    description: '3 hours of hacking on ReactJS with a BBQ'
  },
  {
    id: 9889698,
    title: 'HackJam React JS: Antwerp',
    // date: '23/05/2016',
    date: '30052016',
    location: cities.amsterdam,
    eventType: eventType.hackjam,
    description: '3 hours of hacking on ReactJS'
  },
  {
    id: 8757979,
    title: 'ReactJS, Redux & RiotJS: Building web application differently',
    // date: '30/05/2016',
    date: '30052016',
    location: cities.amsterdam,
    eventType: eventType.meetup,
    description: '2 amazing talks on React/Redux and RiotJS...'
  },
  {
    id: 8758979,
    title: 'HackCamp: JavaScript, Angular 1 & Angular 2',
    // date: '30/05/2016',
    date: '29082016',
    location: cities.brussels,
    eventType: eventType.meetup,
    description: '6 days, 12 hours/day, Hack, Learn, Improve'
  }
];


