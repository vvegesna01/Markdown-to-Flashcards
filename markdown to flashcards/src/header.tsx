import React from 'react';
import mdLogo from '/Users/keerthanavegesna/Desktop/Coding/md-to-flashcards/Markdown-to-Flashcards/markdown to flashcards/src/assets/mdtoflashcards_logo.png';

const Header: React.FC = () => {
  return (
    <header
      style={{
        position: 'relative', // Set the header to relative so the SVG can be positioned absolutely within it
        display: 'flex',
        justifyContent: 'center', // Center text horizontally
        alignItems: 'center',
        padding: '20px',
        backgroundColor: 'purple',
        color: 'white',
        height: '200px', // Adjust the height of the header
      }}
    >
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Text Section */}
        <h1 style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>Markdown Flashcards</h1>
        <p>Transform your notes into study-friendly flashcards!</p>
      </div>
      
      <img
        src={mdLogo} 
        alt="App Illustration"
        style={{
          position: 'absolute', // Position it absolutely within the header
          top: '50%', // Center the illustration vertically (you can adjust as needed)
          left: '50%', // Center the illustration horizontally (you can adjust as needed)
          transform: 'translate(-200%, -50%)', // Offset to truly center the image
          width: '200px', // Set the size of the SVG illustration
          zIndex: 1, // Ensure the image is behind the text (lower z-index)
        }}
      />
    </header>
  );
};

export default Header;
