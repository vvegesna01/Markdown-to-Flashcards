import { Flashcard } from './flashcardGenerator';

/**
 * Converts an array of flashcards to a CSV string.
 * @param flashcards The array of flashcards.
 * @returns A CSV string.
 */

export const flashcardsToCSV = (flashcards: Flashcard[]): string => {
  const headers = ['Question', 'Answer'];
  const rows = flashcards.map(card => [card.question, card.answer]);

  // Combine headers and rows
  const csvContent = [headers, ...rows]
    .map(row => row.map(cell => `"${cell.replace(/"/g, '""')}"`).join(','))
    .join('\n');

  return csvContent;
};

/**
 * download of a CSV file containing flashcards.
 * @param flashcards The array of flashcards.
 */

export const downloadFlashcardsAsCSV = (flashcards: Flashcard[]) => {
  const csvContent = flashcardsToCSV(flashcards);
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'flashcards.csv';
  link.click();

  // Clean up
  URL.revokeObjectURL(url);
};
