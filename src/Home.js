import React from 'react';
import './App.css';
import series from './asserts/series.jpg'
import movies from './asserts/movies.jpg'
import {

    Link
} from "react-router-dom";

function Home() {
  return (
      <div className="App">
          <div className="movies" style={{justifyContent: 'start'}}>
              <div className="movie">
                  <p><Link to="/series" style={{color:"white"}}>Popular Series</Link></p>
                  <div>
                      <img
                          width="200"
                          alt={`The programType titled:Popular Series`}
                          src={series}
                      />
                  </div>
              </div>
              <div className="movie">
                  <p><Link to="/movies" style={{color:"white"}}>Popular Movies</Link></p>
                  <div>
                      <img
                          width="200"
                          alt={`The programType titled:Popular Movies`}
                          src={movies}
                      />
                  </div>
              </div>

          </div>

      </div>
  );
}

export default Home;
