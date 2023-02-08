
import React, { useEffect } from 'react'
import {API_key, imageurl } from '../../constants'
import axios from '../axios'
import { useState } from 'react'
import Youtube from 'react-youtube'
import './Rowpost.css'

function Row(propes) {
  const [movies,setMovies]=useState([])
  const [movieUrl,setmovieUrl]=useState('')
 
  useEffect(()=>{
    axios.get(propes.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    },[])

  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie=(id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_key}&language=en-US`).then(respond=>{
      console.log(respond.data);
      if(respond.data.results.length!==0){
        setmovieUrl(respond.data.results[0])

      }

    })
  }
  return (
    <div className="row">
        <h3>{propes.title}</h3>
        <div className="posters">
          {movies.map((obj)=>
             <img onClick={()=>handleMovie(obj.id)} className={propes.isSmall ? 'smallposter':'poster'} alt='poster' src={`${imageurl+obj.backdrop_path}`} />
            

          )}
          
          
        </div>
        {movieUrl &&  <Youtube videoId={movieUrl.key} opts={opts}/> }
    </div>
  )
}

export default Row