/**
 * Created by Ashish on 01-10-2020.
 */
import React from 'react';
import './App.css';
import Movie from "./movie";
import myData from './asserts/sample.json';



function ProgramType(props) {
    const [isLoading, setIsLoading] = React.useState(true);
    let errorMessage="";
    const series=myData.entries.filter((entry)=>{
        return entry.programType===props.type && entry.releaseYear>= 2010
    });
    series.sort((a, b) => a.title.localeCompare(b.title));
    setTimeout(
        function () {
            setIsLoading(false);
        }.bind(this),
        2000
    );
    return (
    <div className="movies" style={{overflow:"auto",height:480}}>
        {isLoading && !errorMessage ? (
            <span className="loader"></span>
        ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
        ) : (
            series.map((movie, index) => (
                <Movie key={`${index}-${movie.title}`} movie={movie}/>
            ))
        )}
    </div>
    );
}

export default ProgramType;
