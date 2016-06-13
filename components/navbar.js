import React, { Component } from 'react';
import { Link } from 'react-router';

const menus = [
  { page: 'Home', selected: false },
  { page: 'Timeline', selected: true },
  { page: 'HackCamp', selected: false },
  { page: 'HackDay', selected: false },
  { page: 'Products', selected: false },
];


class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      menus: menus,
      activeMenu: menus.filter(menu => menu.selected)[0],
    };
  }

  selectMenu(menu) {
    if (menu.page === this.state.activeMenu.page) return;

    this.setState({
      menus: this.state.menus.map(item => {
        if(item.page === menu.page){
          item.selected = true;
          return item;
        }
        item.selected = false;
        return item;
      }),
      activeMenu: menu
    });
  }

  render() {
    const navs = this.state.menus.map(menu => {
      return (
         <li key={ menu.page } style={{display: 'inline-style'}} onClick={ this.selectMenu.bind(this, menu) }>
           <Link className={ menu.selected? 'selected': '' } to={ menu.page.toLowerCase() }>{ menu.page }</Link>
         </li>
      );
    });

    return (
      <div className="tab-filter-wrapper">
          <div className="tab-filter" >
            <ul >
              <li className="placeholder">
                <a data-type="all" href="#0">All</a>
              </li>
              { navs }
            </ul>
          </div>
		    </div>
    );
  }
}

export default NavBar;
