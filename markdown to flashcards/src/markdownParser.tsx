import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateFlashcards, Flashcard } from './flashcardGenerator';
import { downloadFlashcardsAsCSV } from './csvExporter';
import '/Users/keerthanavegesna/Desktop/Coding/md-to-flashcards/Markdown-to-Flashcards/markdown to flashcards/src/global.css';
import mdLogo from '/Users/keerthanavegesna/Desktop/Coding/md-to-flashcards/Markdown-to-Flashcards/markdown to flashcards/src/assets/mdtoflashcards_logo.png';
import Header from './header';


const MarkdownParser: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('');
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const navigate = useNavigate();

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

    <div style={{ padding: '50px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Back to Home Button */}
      <div style={{ textAlign: 'left', marginBottom: '20px' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '10px 15px',
            backgroundColor: '#6e3d6f',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Back to Home
        </button>
      </div>

      {/* File Upload and Textarea */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <input
          type="file"
          accept=".md"
          onChange={handleFileUpload}
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '100%',
            maxWidth: '400px',
          }}
        />
        <textarea
          value={markdown}
          onChange={handleChange}
          rows={10}
          style={{
            width: '100%',
            maxWidth: '600px',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
      </div>

      {/* Flashcards Section */}
      <div style={{ marginTop: '40px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Generated Flashcards</h2>
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
                    backgroundColor: '#856288',
                  }}
                >
                  <strong>{card.answer}</strong>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Export Button */}
        {flashcards.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button
              onClick={() => downloadFlashcardsAsCSV(flashcards)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#6e3d6f',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
               Export as CSV
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarkdownParser;
