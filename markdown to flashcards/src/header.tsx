import React from 'react';
import mdLogo from '/Users/keerthanavegesna/Desktop/Coding/md-to-flashcards/Markdown-to-Flashcards/markdown to flashcards/src/assets/mdtoflashcards_logo.png';
import { FaGithub, FaGlobe } from 'react-icons/fa'; // Import icons

const Header: React.FC = () => {
  return (
    <header
      style={{
        marginTop: '50px',
        padding: '20px 40px',
        color: '#333',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* Logo aligned to the left */}
      <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
        <img
          src={mdLogo}
          alt="Logo"
          style={{
            width: '20%',
            maxWidth: '100px',
            height: 'auto',
          }}
        />
      </div>
      <div>
        <h3>Markdown to Flashcards</h3>
      </div>

      {/* Icons aligned to the right */}
      <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
        <a
          href="https://github.com/vvegesna01/Markdown-to-Flashcards"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#b590b4',
            fontSize: '24px',
          }}
          aria-label="GitHub Repository"
        >
          <FaGithub />
        </a>
        <a
          href="https://keerthana-vegesna.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#b590b4',
            fontSize: '24px',
          }}
          aria-label="Portfolio Website"
        >
          <FaGlobe />
        </a>
      </div>
    </header>
  );
};

export default Header;
