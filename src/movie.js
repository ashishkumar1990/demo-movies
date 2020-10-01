/**
 * Created by Ashish on 01-10-2020.
 */
import React from 'react'


const  Movie = ({movie}) => {
    return (
        <div className="movie">
            <p>{movie.title}</p>
            <div>
                <img
                    width="200"
                    alt={`The movie titled: ${movie.title}`}
                    src={movie.images['Poster Art'].url}
                />
            </div>
        </div>
    )
}

export default Movie