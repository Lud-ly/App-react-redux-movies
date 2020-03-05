import React from 'react'

 
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";
const VideoListItem = (props) => {
            const {movie} = props;
            return <li className="list-group-item" onClick={handleOnClick}>
                        <div className="media">
                            <div>
                               <img className="media-objet img-rounded" height="50%" width="100%" src={`${IMAGE_BASE_URL}${movie.poster_path}`}alt='Poster'/>
                            </div>
                            <div>
                              <img className="media-objet img-rounded" height="100%" width="100%" src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}alt='imgMovie'/>
                            </div>
                        
                        <div className="media-body">
                            <h5 className="list_title_item" >{movie.title}</h5>
                            <p className="list_title_item" >note / {movie.vote_average}  vote/ {movie.vote_count}</p>
                        </div>
                    </div>
                </li>
            function handleOnClick(){
            props.callback(movie);
             

            }
}

export default VideoListItem;