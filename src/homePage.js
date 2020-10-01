/**
 * Created by Ashish on 30-09-2020.
 */
import React from 'react'
import windowsstore from './asserts/series.jpg'


const  ProgramType = ({programType}) => {

    return (
        <div className="movie">
            <p>{programType.title}</p>
            <div>
                <img
                    width="200"
                    alt={`The movie titled: ${programType.title}`}
                    src={windowsstore}
                />
            </div>
        </div>
    )
}

export default ProgramType