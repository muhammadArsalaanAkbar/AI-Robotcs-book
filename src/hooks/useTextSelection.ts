import { useEffect } from 'react';

/**
 * Custom hook to handle text selection for RAG queries
 * When user selects text on the page, this hook captures the selection
 * and can trigger the RAG chatbot with the selected text
 */
const useTextSelection = (onTextSelected: (text: string) => void) => {
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection && selection.toString().trim() !== '') {
        const selectedText = selection.toString().trim();

        // Only trigger if the selection is substantial (more than 3 words)
        if (selectedText.split(/\s+/).length >= 3) {
          // Add a small delay to ensure the selection is complete
          setTimeout(() => {
            onTextSelected(selectedText);
          }, 100);
        }
      }
    };

    // Add event listeners for text selection
    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('keyup', handleSelection);

    // Also handle touch events for mobile
    document.addEventListener('touchend', handleSelection);

    // Clean up event listeners
    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('keyup', handleSelection);
      document.removeEventListener('touchend', handleSelection);
    };
  }, [onTextSelected]);
};

export default useTextSelection;