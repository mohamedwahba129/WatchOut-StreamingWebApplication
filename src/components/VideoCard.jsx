import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function VideoCard({ video }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Start from the beginning
      videoRef.current.play(); // Play preview
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause preview
    }
  };

  // Redirect to the video details page on click
  const handleClick = () => {
    navigate(`/video/${video._id}`); // Redirect using the video ID
  };

  return (
    <div className="video-container" onClick={handleClick}>
      <video
        className="video-homepage"
        ref={videoRef}
        src={video.videoUrl}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        muted
        width="100%"
        height="100%"
        playsInline
        loop
      />
      <div className="video-details">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-description">{video.description}</p>
      </div>
    </div>
  );
}

export default VideoCard;
