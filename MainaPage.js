import React from 'react';
import MovieList from './MovieList';
import Navbar from './Navbar';

const MainaPage = ({movies ,search ,getPage ,pageCount}) => {
    // console.log(pageCount);

    return (
        <div>
      <Navbar search={search}/>
      <MovieList movies={movies} getPage={getPage} pageCount={pageCount} />
            
        </div>
    );
}

export default MainaPage;
