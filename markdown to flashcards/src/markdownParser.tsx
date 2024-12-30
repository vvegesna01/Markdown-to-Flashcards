import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { generateFlashcards, Flashcard } from './flashcardGenerator';
import { downloadFlashcardsAsCSV } from './csvExporter';
import '/Users/keerthanavegesna/Desktop/Coding/md-to-flashcards/Markdown-to-Flashcards/markdown to flashcards/src/global.css';
import mdLogo from '/Users/keerthanavegesna/Desktop/Coding/md-to-flashcards/Markdown-to-Flashcards/markdown to flashcards/src/assets/mdtoflashcards_logo.png';


const MarkdownParser: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('');
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const text = await file.text();
      setMarkdown(text);
      const cards = generateFlashcards(text);
      setFlashcards(cards);
    }
  };
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdown(e.target.value); 
      };

  return (
    <div>

    <div style={{ textAlign: 'center' }}>
              <button
        onClick={() => navigate('/')} 
        style={{
         display: 'flex',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#194fab',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginLeft: '20px',
          justifyContent: 'center'
          
        }}
      >
        Back to Home
      </button>
      <div style={{margin: "20px"}}>
      <input type="file" accept=".md" onChange={handleFileUpload} />
      <textarea
        value={markdown}
        onChange={handleChange}
        rows={10}
        style={{ width: '200%', marginTop: '20px', display: 'flex', justifyContent: 'center'}}
      />
      </div>

      <div style={{ marginTop: '20px'}}>
        <h2>Generated Flashcards</h2>

        {flashcards.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap'}}>
            {flashcards.map((card, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: '10px',
                  width: '100%',
                  justifyContent: 'space-around',
                }}
              >
                <div
                  style={{
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '10px',
                    width: '45%', 
                    marginRight: '0px',
                    textAlign: 'center',
                  }}
                >
                  <strong>{card.question}</strong>
                </div>
                <div
                  style={{
                    border: '1.5px solid #ccc',
                    borderRadius: '5px',
                    borderColor: '#8991A2',
                    padding: '10px',
                    width: '45%', 
                    textAlign: 'center',
                    backgroundColor: '#303F9F'
                  }}
                >
                  <strong>{card.answer}</strong>
                </div>
              </div>
            ))}
          </div>
        )}
        {flashcards.length > 0 && (
          <button
            onClick={() => downloadFlashcardsAsCSV(flashcards)}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#194fab',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Export as CSV
          </button>
        )}
      </div>

    </div>
    </div>
  );
};

export default MarkdownParser;
