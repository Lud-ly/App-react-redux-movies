import React from 'react';
import VideoListItem from '../components/video-list-item';

const VideoList = (props) => {
    const {movieList} = props;
    return (
        <div>
            <ul>
                {movieList.map(movie => {
                        return <VideoListItem key={movie.id} movie={movie} callback={receiveCallBack} /> 
                    })}  
            </ul>
        </div>
    );
    function receiveCallBack(movie){
        props.callback(movie)
        console.log('--------------');
        console.log('parent',movie);
        console.log('-----------');

    }
}

export default VideoList;