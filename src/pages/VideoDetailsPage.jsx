import React from 'react';

const VideoDetailsPage = () => {
  const video = {
    title: "Sample Video",
    description: "This is a sample video description.",
    views: 12345,
    likes: 678,
    url: "https://www.example.com/sample-video.mp4",
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>{video.title}</h1>
      <video
        src={video.url}
        controls
        style={{ width: '100%', maxWidth: '800px', marginBottom: '20px' }}
      ></video>
      <p>{video.description}</p>
      <p>
        <strong>Views:</strong> {video.views}
      </p>
      <p>
        <strong>Likes:</strong> {video.likes}
      </p>
    </div>
  );
};

export default VideoDetailsPage;