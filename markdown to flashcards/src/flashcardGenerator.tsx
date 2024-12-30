export interface Flashcard {
    question: string;
    answer: string;
  }
  
  /**
   * Generates flashcards from markdown content.
   * @param markdownFile The content of the markdown file.
   * @returns An array of flashcards.
   */

  export const generateFlashcards = (markdownFile: string): Flashcard[] => {
    const lines = markdownFile.split('\n');
    const cards: Flashcard[] = [];
  
    let currentQuestion = '';
    let currentAnswer = '';
  
    for (const line of lines) {
      if (line.startsWith('##')) {
        // saiving previous flashcard
        if (currentQuestion && currentAnswer) {
          cards.push({ question: currentQuestion.trim(), answer: currentAnswer.trim() });
        }
        // store curr question, reset answer
        currentQuestion = line.replace('##', '').trim();
        currentAnswer = '';
      } else {
        // accumulate the answer
        currentAnswer += ` ${line}`;
      }
    }
  
    // add flashcard
    if (currentQuestion && currentAnswer) {
      cards.push({ question: currentQuestion.trim(), answer: currentAnswer.trim() });
    }
  
    return cards;
  };
  