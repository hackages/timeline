import React from 'react';
import ReactDom from 'react-dom';
import Header from './header.js';
import Timeline from './timeline';

const App = () => {
  return (<div>
          <Header/>
          <Timeline/>
         </div>);
};

ReactDom.render(<App/>, document.getElementById('hackages'));

export default App;
