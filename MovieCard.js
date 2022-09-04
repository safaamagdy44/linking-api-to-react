import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import {  Link } from "react-router-dom";
import img from '../images/img.png';

const MovieCard = ({movie}) => {
    return (
        <div className='col-md-3 col-sm-6 mb-4'>
            <div className='card bg-dark'>
                <img src={img} alt={movie.title}/>
            <h5 className='text-center '>{movie.title}</h5>
            <h6 className='text-center '>{movie.vote_average}<AiTwotoneStar/> </h6>
            <Link to={`/movie/${movie.id}`} className='btn btn-success'>details</Link>
            </div>{/*card*/}
        </div>
    );
}

export default MovieCard;
