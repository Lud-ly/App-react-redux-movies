import React from 'react'
import VideoList from '../containers/video-list';


const VideoDetail = ({title,description,original_title,release_date,vote_average,vote_count}) => {
    return (
        <div className='media'>
            <h1>{title}</h1>
            <p>note ({vote_average}) sortie / {release_date} / vote ({vote_count})</p>
            <h4>{original_title}</h4>
            <p>{description}</p>
            <div className='media-objet'>
            <img  height="50%" width="100%" src={VideoList.poster_path}alt='Poster'/>
            </div>
        </div>

    )
}
export default VideoDetail;