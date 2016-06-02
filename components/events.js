import React from 'react';
import Event from './event';

const eventType = {
  hackjam: {
    title: 'hackjam',
    icon: 'img/cd-icon-movie.svg',
  },
  meetup: {
    title: 'meetup',
    icon: 'img/cd-icon-picture.svg',
  }
};

const events = [
  {
    id: 9879698,
    title: 'HackJam React JS: Amsterdam',
    // date: '23/05/2016',
    date: '23052016',
    location: 'Amsterdam',
    eventType: eventType.hackjam,
    description: '3 hours of hacking on ReactJS with a BBQ'
  },
  {
    id: 8757979,
    title: 'ReactJS, Redux & RiotJS: Building web application differently',
    // date: '30/05/2016',
    date: '30052016',
    location: 'Amsterdam',
    eventType: eventType.meetup,
    description: '2 amazing talks on React/Redux and RiotJS...'
  }
];


const Events = () => {
  return (
    <section id="cd-timeline" className="cd-container">
    { events.map( event => <Event key={ event.id } { ...event }/>) }
    </section>
  );
};

export default Events;
