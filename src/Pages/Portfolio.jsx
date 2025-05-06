import { useEffect, useState } from "react";
import avatarSombre from "../assets/AvatarSombre.jpg"

export default function Portfolio() {
  const phrases = [
    "Bonjour, je suis un etudiant.",
    "J'aime créer des animations.",
    "Bienvenue dans mon portfolio!",
    "Laissez-moi me présenter."
  ];

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 25 : 75;
    const pauseBeforeDelete = 3000;
  
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

  }, [charIndex, isDeleting, phraseIndex]);
  

  return (
    <section className="flex flex-col m-8">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col">
          <h1 className="text-white font-bold">{text}<span className="inline-block w-1 animate-pulse">|</span></h1>
          <h2 className="text-white font-bold">Nyle Kersen Joseph</h2>
        </div>
        <div className="flex">
          <img className="h-40 rounded-2xl" src={avatarSombre} alt="" />
        </div>
      </div>
    </section>
  )
}