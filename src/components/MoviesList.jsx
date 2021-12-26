import React from 'react';
import MoviesCard from './MoviesCard';
function MoviesList({movies,selectMovie}) {
    return (
        <div className='row'>
           {  
             movies.map((movies,index) =>(
                <div className="col-4 shadow">
                     <MoviesCard movie={movies} key="index" selectMovie={selectMovie} />
                </div>

               ))
          
           }
        </div>
    )
}

export default MoviesList
