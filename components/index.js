import React from 'react';
import ReactDom from 'react-dom';
import Header from './header';
import Timeline from './timeline';
import '../assets/css/style.css';
import Menu from './navbar';

const App = () => {
  return (
        <div>
          <Header/>
          <Menu/>
          <Timeline/>
         </div>
       );
};

ReactDom.render(<App/>, document.getElementById('hackages'));

export default App;
