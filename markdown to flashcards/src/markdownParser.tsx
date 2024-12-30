import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { generateFlashcards, Flashcard } from './flashcardGenerator';
import { downloadFlashcardsAsCSV } from './csvExporter';

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

  return (
    <div style={{ textAlign: 'center' }}>
              <button
        onClick={() => navigate('/')} 
        style={{
         display: 'flex',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: 'purple',
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
        readOnly
        rows={10}
        style={{ width: '200%', marginTop: '20px', display: 'flex', justifyContent: 'center'}}
      />
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Generated Flashcards</h2>
        {flashcards.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
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
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '10px',
                    width: '45%', 
                    textAlign: 'center',
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
              backgroundColor: '#007BFF',
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
  );
};

export default MarkdownParser;
