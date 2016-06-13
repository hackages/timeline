import React from 'react';
import Event from './event';

import { events } from '../mocks/events';

const Events = () => {
  return (
    <section id="cd-timeline" className="cd-container">
    { events.map( event => <Event key={ event.id } { ...event }/>) }
    </section>
  );
};

export default Events;
