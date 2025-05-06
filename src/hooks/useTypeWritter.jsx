import { useState, useEffect } from "react";

export default function useTypeWritter(phrases){

    const [text, setText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
  
    useEffect(() => {
      const currentPhrase = phrases[phraseIndex];
      const typingSpeed = isDeleting ? 25 : 75;
      const pauseBeforeDelete = 2000;
    
      const handleTyping = () => {
        if (!isDeleting) {
          setText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
    
          if (charIndex + 1 === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
          }
        } else {
          setText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
    
          if (charIndex === 0) {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      };
    
      const timeout = setTimeout(handleTyping, typingSpeed);
    
      return () => clearTimeout(timeout);
  
    }, [charIndex, isDeleting, phraseIndex, phrases]);

    return text;
}