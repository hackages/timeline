import React from 'react';
import moment from 'moment';

const Event = ( props ) => {
  const { eventType, title,  date, handler, description } = props;

  return (
      <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-picture">
          <img src={ eventType.icon } alt="Icon"/>
        </div>

        <div className="cd-timeline-content">
          <h2>{ title }</h2>
          <p>{ props.description }</p>
          <a href="#0" className="cd-read-more" onClick={ handler }>Join</a>
          <span className="cd-date">{ moment(date, 'DDMMYYYY').fromNow() }</span>
        </div>
      </div>
  );
};

Event.propTypes = {

};

export default Event;
