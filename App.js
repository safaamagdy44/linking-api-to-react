import React ,{useState , useEffect} from 'react';
import MainaPage from './components/MainaPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from 'axios';
import MovieDetails from './components/MovieDetails';
const App = () => {

const [movies ,setMovies]=useState([]);
const [pageCount ,setPageCount]= useState(0);



const getMovies=async()=>{
  const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=66eb3bde9cca0487f03e78b512b451e4&language=ar`);
  setMovies(res.data.results);
  getPage()//حطيتها هنا عشان مش بتشتغل من غير ما استدعيها ولو حطيتها برا بتاثر على البحث
}


const getPage=async(page)=>{
  const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=66eb3bde9cca0487f03e78b512b451e4&language=ar&page=${page}`);
  setMovies(res.data.results);
  setPageCount(res.data.total_pages)
}
// console.log(pageCount);
const search=async(word)=>{
  if(word===''){
    getMovies();
  }else{
    const res=await axios.get(`
    https://api.themoviedb.org/3/search/movie?api_key=66eb3bde9cca0487f03e78b512b451e4&language=ar&query=${word}`);
    setMovies(res.data.results);
  }
  
}
// console.log(movies);

// search('naruto');
useEffect(()=>{
  getMovies()
},[])

// console.log(pageCount);



return (
  <div className='bg-dark text-success p-5'>   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainaPage movies={movies} search={search} getPage={getPage} pageCount={pageCount} />}></Route>

        <Route path="/movie/:id" element={<MovieDetails  />}></Route>
      </Routes>
    </BrowserRouter>   
      
    </div>
  );
}

export default App;


//including bootstrap &react icons& react pagination&react router