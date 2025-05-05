import React, { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';
import { getVideos } from '../services/videoService'; // we'll build this

const HomePage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const data = await getVideos();
      setVideos(data);
    }
    fetchVideos();
  }, []);

  return (
    <div className="p-4">
      <div className="home-videos">
        {videos.map(video => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
