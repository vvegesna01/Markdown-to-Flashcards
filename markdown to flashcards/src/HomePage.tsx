import React from 'react';
import { useNavigate } from 'react-router-dom';
import exampleFlashcards from '/Users/keerthanavegesna/Desktop/Coding/md-to-flashcards/Markdown-to-Flashcards/markdown to flashcards/src/assets/example_flashcards.png';
import headerIllustration from '/Users/keerthanavegesna/Desktop/Coding/md-to-flashcards/Markdown-to-Flashcards/markdown to flashcards/src/assets/header_illustration.svg';
import mdLogo from '/Users/keerthanavegesna/Desktop/Coding/md-to-flashcards/Markdown-to-Flashcards/markdown to flashcards/src/assets/mdtoflashcards_logo.png';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/markdown-parser'); 
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* <img
          src={mdLogo} // Replace with the path to your logo or drawing
          alt="Logo"
          style={{
            width: '40%', // Adjust width relative to container size
            maxWidth: '200px', // Ensure the logo doesn't exceed this width
            height: 'auto', // Maintain aspect ratio
            margin: '10px',
          }}
        /> */}
      </div>

      <div style={{ padding: '5%' }}>
        <h1>Welcome to Markdown to Flashcards!</h1>
        <h2>Here's an example of how to use this website</h2>
        <h3>Upload a markdown file:</h3>
        <p><strong>example.md</strong></p>
        <p>
          <strong>## What is Markdown to Flashcards?</strong>
          <br />
          A simple website that uses your .md or .txt files to generate flashcards for study!
          <br />
          <strong>## What can I use this for?</strong>
          <br />
          This is best used to help break up your long notes and make them easier to study by converting them into flashcards. It does the work for you! (You still have to do the initial note-taking though, and the actual studying later.)
        </p>

        <h3>Your generated flashcards would look like this:</h3>
        <img 
          src={exampleFlashcards} 
          alt="Example Flashcards" 
          style={{
            width: '100%',  
            maxWidth: '900px', 
            height: 'auto', 
            marginTop: '10px',
            marginLeft: '15%'
          }}
        />
      </div>

      <button
        onClick={handleNavigate}
        style={{
          display: 'flex',
          padding: '10px 20px',
          backgroundColor: '#194fab',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginLeft: '45%',
          justifyContent: 'center'
        }}
      >
        Make some flashcards!
      </button>

    </div>
  );
};

export default HomePage;
