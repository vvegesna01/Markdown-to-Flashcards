import React from 'react';
import { useNavigate } from 'react-router-dom';
import exampleFlashcards from '/Users/keerthanavegesna/Desktop/Coding/md-to-flashcards/Markdown-to-Flashcards/markdown to flashcards/src/assets/example_flashcards.png';


const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/markdown-parser'); 
  };

  return (
    <div>
    <header></header>
    
    <div style={{ padding: '100px' }}>
      <h1>Welcome to Markdown to Flashcards</h1>
      <h3>Here's an example of how to use this: </h3>
      <p>example.md</p>
      <p>## What is Markdown to Flashcards?
a simple website that uses your .md or .txt files to generate flashcards for study!
<br></br>
## What can I use this for?
This is best used to help break up your long notes and make them easier to study by converting them into flashcards. It does the work for you! (you still have to do the initial note taking tho, and the actual studying later tho)</p>

<h3>Your generated flashcards would look like:</h3>
<img src="/example_flashcards.png" alt="Example Flashcards" />
<br></br>
      <button
        onClick={handleNavigate}
        style={{
          backgroundColor: 'purple',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '20px',
          justifyContent: 'center',
          marginTop: '20px',
          marginLeft: '40%'
        }}
      >
        Go to Markdown Parser
      </button>
    </div>
    </div>
  );
};

export default HomePage;
