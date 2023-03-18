import React from "react";
import "./heroBanner.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HeroBanner() {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query !== "") {
      setQuery(e.target.value);
      navigate(`/search/${query}`);
    }
  };

  const searchClick = () => {
    if (query !== "") {
      navigate(`/search/${query}`);
    }
  }
  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies and Tv shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for movies or Tv shows"
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchClick}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
