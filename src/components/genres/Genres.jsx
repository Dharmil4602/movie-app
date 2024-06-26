import React from "react";
import "./genres.scss";
import { useSelector } from "react-redux";

function Genres(props) {
  const { genres } = useSelector((state) => state.home);
  return (
    <div className="genres">
      {props.data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div key={g} className="genre">
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
}

export default Genres;
