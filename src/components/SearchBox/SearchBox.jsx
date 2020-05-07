import React from 'react';
import './search-box.styles.css';

export const SearchBox = (props) => {
  const clearSearch = (e) => {
    e.target.value = '';
    props.onSearchTextValueChange(e.target.value);
  };

  return (
    <div className="searchbox">
      <input
        type="text"
        value={props.searchTextValue}
        onChange={(e) => {
          props.onSearchTextValueChange(e.target.value);
        }}
        className="searchbox__input"
        placeholder="Search a monster"
      />
      <svg className="cross" onClick={clearSearch}>
        <use xlinkHref="/solid.svg#times-circle"></use>
      </svg>
    </div>
  );
};
