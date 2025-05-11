import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to read route params

function VideoDetailsPage() {
  const { id } = useParams(); // Retrieve the video ID from the URL

  // For now, you can mock or fetch data based on the `id`
  const videoData = {
    _id: id,
    title: 'Sample Video Title',
    description: 'This is a detailed description of the video.',
    videoUrl: 'videos/videoplayback.mp4', // Replace with actual video URL
  };

  return (
   <>
   <div className="video-page-container">
    <div className="column">
   <div className="video-view-page">
      <h2>{videoData.title}</h2>
      <video controls width="100%" height="auto" src="videos/videoplayback.mp4" type="video/mp4"> 
        Your browser does not support the video tag.
      </video>
      <p>{videoData.description}</p>
    </div>



    <div className="side-videos">
    <h2>{videoData.title}</h2>
      <video controls width="100%" height="auto" src="videos/videoplayback.mp4" type="video/mp4"> 
        Your browser does not support the video tag.
      </video>
      <p>{videoData.description}</p>
    </div></div></div>
    </>
   
  );
}

export default VideoDetailsPage;
