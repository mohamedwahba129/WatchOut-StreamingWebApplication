import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate from react-router-dom

function VideoCard({ video }) {
  const videoRef = useRef(null);
  const navigate = useNavigate();  // Use useNavigate to navigate

  // Play video preview on hover
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Start from the beginning
      videoRef.current.play(); // Play preview
    }
  };

  // Pause video when hover ends
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause preview
    }
  };

  // Redirect to the video details page on click using navigate()
  const handleClick = () => {
    navigate(`/video/${video._id}`); // Navigate to the video details page using the ID
  };

  return (
    <div className="video-container" onClick={handleClick}>
      <video
        className="video-homepage"
        ref={videoRef}
        src={video.videoUrl}
        controls
        onMouseEnter={handleMouseEnter} // Play on hover
        onMouseLeave={handleMouseLeave} // Pause on hover out
        muted // Keep the video muted for preview
      />
      <div className="video-details">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-description">{video.description}</p>
      </div>
    </div>
  );
}

export default VideoCard;
