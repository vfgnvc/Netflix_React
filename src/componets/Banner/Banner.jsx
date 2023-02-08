import React, { useEffect } from 'react'
import { API_key,imageurl } from '../../constants'
import './Banner.css'
import axios from '../axios'
import { useState } from 'react'

function Banner() {
  const [movie,setMovie]=useState()
 
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_key}&language=en-US`).then((response)=>{
      console.log(response.data)
      setMovie(response.data.results[0])
    })

  },[])
  
  return (
    <div
    style={{backgroundImage:`url(${movie ? imageurl+ movie.backdrop_path :""})`}}
     className='banner'>
        <div className="content">
            <h1 className="title">{movie ? movie.title :""}</h1>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className="description">{movie ? movie.overview :""}</h1>
        </div>
      <div className="fade_bottom"></div>
    </div>
    
  )
}

export default Banner