import React ,{useState , useEffect}from 'react';
import {  Link ,useParams} from "react-router-dom";
import axios from 'axios';
import { AiTwotoneStar } from 'react-icons/ai';

import img from '../images/img.png';


const MovieDetails = () => {

    const param=useParams(0);
    const[movie ,setMovie]=useState([]);



   const getMovieDetails=async()=>{
        const res=await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=66eb3bde9cca0487f03e78b512b451e4&language=ar`);
        setMovie(res.data);
      }


    useEffect(()=>{
       
              getMovieDetails()
        
    })

    
    return (
        <div className='card bg-dark text-center py-5'>
             
             <div className='row'>
                <div className='col-6'>
                    <div className='card'>
                <img src={img} alt={movie.title}/>

                    
                    </div>
                </div>
                <div className='col-6'>
                <div className='card text-center mt-5 '>
            <h1 >{movie.title}</h1>
            <h2>{movie.vote_average}<AiTwotoneStar/> </h2>
            <p>{movie.overview}</p>
            <p>{movie.popularity} من الاشخاص اعجبو به</p>
            <p>{movie.release_date}</p>
            </div>{/*card*/}
                </div>
             </div>
             
             <Link to="/" className='btn btn-success m-5'>الصفحه الرئيسيه</Link>
        </div>
    );
}

export default MovieDetails;
