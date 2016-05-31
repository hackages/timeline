import React from 'react';
// import './css/navbar.css';

const filters = [
  { category: 'Home', selected: true},
  { category: 'Timeline', selected: false},
  { category: 'HackCamp', selected: false},
  { category: 'HackDay', selected: false},
  { category: 'Products', selected: false},
];


export default () => {

  const filterItems = filters.map(filter => {
    return (<li key={ filter.category } style={{display: 'inline-style'}}>
            <a className={filter.selected? 'selected': ''} href="#0">{filter.category}</a>
            </li>);
  });


  return <div className="tab-filter-wrapper">
          <div className="tab-filter" >
            <ul >
              <li className="placeholder">
                <a data-type="all" href="#0">All</a>
              </li>
              {filterItems}
            </ul>
          </div>
		    </div>
};

