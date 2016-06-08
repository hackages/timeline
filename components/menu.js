import React from 'react';
import './css/menu.css';

const Menu = () => {
  return (
        <div>
            <div id="menu">
              <nav className="navbar-wrapper navbar-default" role="navigation">
                <div className="container">
                  <div className="navbar-header">
                   <a className="navbar-brand site-name" href="#top"><img src="img/logo2.png" alt="logo"/></a>
                  </div>
                  <div id="navbar-scroll" className="collapse navbar-collapse navbar-backyard navbar-right">
                    <ul className="nav navbar-nav">
                      <li className=''><a href="#top">Subscribe</a></li>
                      <li className='active'><a href="#feature">Timeline</a></li>
                      <li className=''><a href="#package">Contact</a></li>
                    </ul>
                  </div>
               </div>
            </nav>
          </div>
    </div>);
}




export default () => {
  return <Menu/>;
}


