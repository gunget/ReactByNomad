import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ id, year, title, summary, poster }) {
  return (
    <div className="container">
      <img src={poster} alt={title} />
      <Link
        to={{
          pathname: "/movieDetails",
          state: {
            year,
            title,
            summary,
            poster,
          },
        }}
      >
        <h4>{title}</h4>
      </Link>
      <h5>{year}</h5>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
