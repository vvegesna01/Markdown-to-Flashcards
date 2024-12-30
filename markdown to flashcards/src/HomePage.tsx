import React from 'react';
import { useNavigate } from 'react-router-dom';
import exampleFlashcards from '/Users/keerthanavegesna/Desktop/Coding/md-to-flashcards/Markdown-to-Flashcards/markdown to flashcards/src/assets/example_flashcards.png';
import headerIllustration from '/Users/keerthanavegesna/Desktop/Coding/md-to-flashcards/Markdown-to-Flashcards/markdown to flashcards/src/assets/header_illustration.svg';
import mdLogo from '/Users/keerthanavegesna/Desktop/Coding/md-to-flashcards/Markdown-to-Flashcards/markdown to flashcards/src/assets/mdtoflashcards_logo.png';
import Header from './header';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/markdown-parser'); 
  };

  return (
    <div style={{marginBottom: '5%'}}>
      <Header></Header>

      <div style={{ padding: '5%' }}>
        <h1>Welcome to Markdown to Flashcards!</h1>
        <h2>Here's an example of how to use this website</h2>
        <h3>Upload a markdown file:</h3>

        <p><strong>example.md</strong></p>
        <div>
        <textarea
  readOnly
  rows={10}
  defaultValue={`## What is Markdown to Flashcards?
A simple website that uses your .md or .txt files to generate flashcards for study!

## What can I use this for?
This is best used to help break up your long notes and make them easier to study by converting them into flashcards. It does the work for you! 
(You still have to do the initial note-taking though, and the actual studying later.)`}
  style={{
    width: '100%',
    height: '70%',
    maxWidth: '3000px',
    padding: '10px',
    fontSize: '12px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  }}
/>

</div>
        {/* <p>
          <strong>## What is Markdown to Flashcards?</strong>
          <br />
          A simple website that uses your .md or .txt files to generate flashcards for study!
          <br />
          <strong>## What can I use this for?</strong>
          <br />
          This is best used to help break up your long notes and make them easier to study by converting them into flashcards. It does the work for you! <br></br>(You still have to do the initial note-taking though, and the actual studying later.)
        </p> */}

        <h3>Your generated flashcards would look like this:</h3>
        <img 
          src={exampleFlashcards} 
          alt="Example Flashcards" 
          style={{
            width: '100%',  
            maxWidth: '900px', 
            height: 'auto', 
            marginTop: '10px',
            marginLeft: '0%'
          }}
        />
      </div>

      <button
        onClick={handleNavigate}
        style={{
          display: 'flex',
          padding: '10px 20px',
          backgroundColor: '#6e3d6f',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginLeft: '42%',
          justifyContent: 'center'
        }}
      >
        Make some flashcards!
      </button>
    </div>
  );
};

export default HomePage;
