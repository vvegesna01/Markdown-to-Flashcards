import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarkdownParser from './MarkdownParser'; // Your Markdown Parser page
import HomePage from './HomePage'; // Your new Home page
import Header from './Header'; // Import the Header component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/markdown-parser" element={<MarkdownParser />} />
      </Routes>
    </Router>
  );
};

export default App;
