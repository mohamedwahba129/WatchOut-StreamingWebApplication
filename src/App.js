import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'; // Your home page that displays videos
import VideoDetailsPage from './pages/VideoDetailsPage'; // Your detailed video page
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Video detail page route */}
        <Route path="/video/:id" element={<VideoDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
