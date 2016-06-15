import React from 'react';
import ReactDom from 'react-dom';
import Header from './header';
import Timeline from './timeline';
import '../assets/css/style.css';
import Menu from './navbar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Router, Route, browserHistory, hashHistory,IndexRoute } from 'react-router';
import HackCamp from '../hackcamp/';

const Main = (props) => {
  return (
        <div>
          <Header/>
          <Menu/>
          <ReactCSSTransitionGroup
            component="div"
            transitionName="transition"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {React.cloneElement(props.children, {
              key: props.location.pathname
            })}
          </ReactCSSTransitionGroup>
         </div>
       );
};

const NoMatch = () => {
  return <h1>Oopps, nothing here for the moment</h1>;
};

const Hackages = () => {
  return (
    <Router history={ hashHistory }>
     <Route path='/' component={ Main }>
       <IndexRoute component={ Timeline }/>
       <Route path="home" component={ Timeline }/>
       <Route path="hackcamp" component={ HackCamp }/>
       <Route path="hackday" component={ HackCamp }/>
       <Route path="hacklunch" component={ NoMatch }/>
       <Route path="timeline" component={ Timeline }/>
       <Route path="*" component={ NoMatch }/>
     </Route>
  </Router>
  );
};

ReactDom.render(<Hackages/>, document.getElementById('hackages'));

export default Main;
