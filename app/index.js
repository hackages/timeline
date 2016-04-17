import React from 'react';
import ReactDom from 'react-dom';
import Header from './header.js';


const App = () => {
  return (<Header/>);
};

ReactDom.render(<App/>, document.getElementById('hackages'));

export default App;
