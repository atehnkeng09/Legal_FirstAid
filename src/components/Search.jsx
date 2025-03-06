import React, { useState } from "react";
import './Search.css';

function Search () {

  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const items = ["Criminal law", "Arrest law", "Consumer's Rights", "Workplace rights", "Family rights", "Human rights"];

  const filterItems = items.filter((item) => (
    item.toLowerCase().includes(query.toLowerCase())
  ));

  function handleSelects(suggestions) {
    setQuery(suggestions);
    setShowSuggestions(false);
  }

  return (

   <div className="search-container">

    <input 
          type="text" 
          placeholder="Search"
          className="search-bar"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
         
          onBlur={() => setTimeout(() => {
            setShowSuggestions(false), 100
          })}
    />

    {/* Auto suggestions list */}
    {/* {
      showSuggestions && query && filterItems.length > 0 ? (
        <ul>
        {filterItems.map((item, index) => (
          <li key={index} className="filter"
           onClick={() => handleSelects(item)}>{item}</li> 
        ))} : 
      </ul>
      ) : (
       <ul>
          <li className="no-results">No results found</li>
       </ul>
      )
    } */}

    <button type="submit" 
       className="btn"
       onClick={() => console.log(query)}
    >

        <img src="/images/search2.jpg" alt="search icon"    className="icon"/> 
    </button>
    

    { showSuggestions && query && filterItems.length > 0 ? (
      <ul>
        {filterItems.map((item, index) => (
          <li key={index} className="filter" onClick={() => handleSelects(item)}>
            {item}
          </li>
        ))}
      </ul>
    ) : (
      <ul>
        <li className="no-results">No results found</li>
      </ul>
    )
  }

   </div>

  );

}
export default Search;
