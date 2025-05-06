import React, { useRef, useState, useEffect } from 'react';

function VideoCard({ video }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Track whether the video is hovering
  const [isHovering, setIsHovering] = useState(false);

  // Play video preview on hover
  useEffect(() => {
    if (videoRef.current) {
      if (isHovering && !isPlaying) {
        videoRef.current.currentTime = 0; // Start from the beginning
        videoRef.current.play(); // Play preview
        setIsPlaying(true); // Update the state to playing
      } else if (!isHovering && isPlaying) {
        videoRef.current.pause(); // Pause preview
        setIsPlaying(false); // Update the state to paused
      }
    }
  }, [isHovering, isPlaying]); // Run effect when hover or play state changes

  // Handle mouse enter
  const handleMouseEnter = () => {
    setIsHovering(true); // Set hovering state to true
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsHovering(false); // Set hovering state to false
  };

  // Redirect to the video details page on click
  const handleClick = () => {
    // Implement your navigation logic here
    // Navigate to video details page
  };

  return (
   <><div className="video-container" onClick={handleClick}>
      <video
        className="video-homepage"
        ref={videoRef}
        src={video.videoUrl}
        controls={false} // Remove default controls
        onMouseEnter={handleMouseEnter} // Play on hover
        onMouseLeave={handleMouseLeave} // Pause on hover out
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
    <h1>HIiii</h1>
    </div>
    </> 
  );
}

export default VideoCard;
