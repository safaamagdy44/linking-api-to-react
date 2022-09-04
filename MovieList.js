import React from 'react';

import Error from './Error';
import MovieCard from './MovieCard';
import Pagination from './Pagination';

const MovieList = ({ movies , getPage ,pageCount }) => {
    // console.log(pageCount);
    return (
        <>{
        
            movies.length?
      
        <div className='container my-5'>
            <div className='row'>
                {
                    movies.map((movie) => {
                        return (
                            <MovieCard key={movie.id} movie={movie} />
                        )

                    })

                
                }

            </div>
<Pagination getPage={getPage} pageCount={pageCount} />
       


        </div>:<Error/>}
        </>
    );
}

export default MovieList;
