import React from 'react';
import ReactDom from 'react-dom';
import Header from './header';
import Timeline from './timeline';
import '../assets/css/style.css';
// import Menu from './menu';

const App = () => {
  return (
        <div>
          <Header/>
          <Timeline/>
         </div>
       );
};

ReactDom.render(<App/>, document.getElementById('hackages'));

export default App;
