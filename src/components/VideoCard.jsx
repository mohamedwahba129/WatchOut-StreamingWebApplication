import React from 'react';

const VideoCard = ({ video }) => {
  return (

    <div className="video-container">
      <video src={video.videoUrl} controls className="video-homepage"/>
      <h2 className="font-semibold mt-2">{video.title}</h2>
      <p className="text-gray-600 text-sm">{video.description}</p>
    </div>
  );
};

export default VideoCard;
