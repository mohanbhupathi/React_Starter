import React from 'react';

const VideoList = (props) => {
  if(props.vData.length){
  //console.log('onVideoSelect is',props.onVideoSelect);
  //console.log('props.vData is', props.vData);
  //console.log(props.vData.length);
  let onVideoSelect = props.onVideoSelect;
  const videoCollectionList = props.vData.map((videoCL) => {
    //console.log('videoCL',videoCL);
    //console.log(typeof videoCL);
    let imgSrc = videoCL.snippet.thumbnails.default.url;
    let videoHead = videoCL.snippet.title;



    //we're introducing key in here to make sure react can update a particular record in speedy fashion
    return (
      //passing a callback to the parent component when you click on list
      <li key = {videoCL.id.videoId} onClick = {function(){onVideoSelect(videoCL);}} >
        <div>
          <img src = {imgSrc} />
        </div>
        <div>
          <p> {videoHead} </p>
        </div>
      </li>
    );
  });
  console.log('video list', videoCollectionList);
  return (
    <ul> {videoCollectionList} </ul>
  );
}
else {
  return null;
}
}

export default VideoList;
