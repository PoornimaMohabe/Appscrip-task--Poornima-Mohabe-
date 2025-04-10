import React from 'react';

const Filter = () => {
  return (
    <div className="Filter_Component">
      <div className="filter-item">
        <label><input type="checkbox" /> CUSTOMIZBLE</label>
      </div>

      <div className="filter-category">
        <div className="filter-header">
          <span className="filter-title">IDEAL FOR</span>
          <span className="dropdown-icon">⌄</span>
        </div>
        <div className="filer-subcategories">
          <input type="checkbox" />
          <p className="filter-option">Men</p>
        </div>
        <div className="filer-subcategories">
          <input type="checkbox" />
          <p className="filter-option">Women</p>
        </div>
        <div className="filer-subcategories">
          <input type="checkbox" />
          <p className="filter-option">Baby & Kids</p>
        </div>
      </div>

      {[
        'OCCASION',
        'WORK',
        'FABRIC',
        'SEGMENT',
        'SUITABLE FOR',
        'RAW MATERIALS',
        'PATTERN'
      ].map((title, i) => (
        <div className="filter-category" key={i}>
          <div className="filter-header">
            <span className="filter-title">{title}</span>
            <span className="dropdown-icon">⌄</span>
          </div>
          <div className="filter-option">All</div>
        </div>
      ))}
    </div>
  );
};

export default Filter;