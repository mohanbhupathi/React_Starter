import React from 'react';

const Player = (props) => {
  if(!props.viData){
    return <div> Loading ... </div>;
  }
  console.log('In player', props.viData);
  let videoData = props.viData,
      videoID = videoData.id.videoId,
      videoPlayerURL = `https://www.youtube.com/embed/${videoID}`,
      videoTitle = videoData.snippet.title,
      videoDek = videoData.snippet.description;

  return(
    <div>
      <div>
        <iframe src = {videoPlayerURL} />
      </div>
      <div>
        <p>{videoTitle}</p>
        <p>{videoDek}</p>
      </div>
    </div>
  );

}

export default Player;
