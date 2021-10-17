import React, { useEffect,useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'
import Youtube from 'react-youtube'

function Rowpost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, seturlId] = useState('')
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data)
            setMovies(response.data.results)
        }).catch(error =>{
                alert('Network error')
        })

    }, [])
    const handleMovie = (id)=>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.length !==0){
                seturlId(response.data.results[0])
            }
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((movie,index)=>
                    <img key={index} className={props.isLarge ? 'poster' : 'smallPoster'} src={`${imageUrl+movie.backdrop_path}`} onClick={()=> handleMovie(movie.id) } 
                    alt="poster" />
                )}
            </div>
            {urlId && <Youtube videoId={urlId.key} opts={opts} />}
        </div>
    )
}

export default Rowpost
