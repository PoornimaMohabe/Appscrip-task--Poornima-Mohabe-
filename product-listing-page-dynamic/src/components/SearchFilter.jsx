import React from 'react';

const SearchFilter = () => {
  return (
    <div className="Search_Section">
      <div className="total_Items_data">3425 ITEMS</div>
      <div className="Filter_Text">&lt; HIDE FILTER</div>
      <div className="dropdown">
        <div className="dropdown-selected">RECOMMENDED</div>
        <div className="dropdown-options hidden">
          <div className="option active">RECOMMENDED</div>
          <div className="option">NEWEST FIRST</div>
          <div className="option">POPULAR</div>
          <div className="option">PRICE : HIGH TO LOW</div>
          <div className="option">PRICE : LOW TO HIGH</div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;