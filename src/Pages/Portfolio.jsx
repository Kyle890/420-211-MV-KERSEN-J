import { useEffect, useState } from "react";
import useTypeWritter from "../hooks/useTypeWritter";
import webDevelopperImg from "../assets/webDevelopperImg.svg"

export default function Portfolio() {
  const phrases = [
    "Bonjour, je suis un etudiant.",
    "Un futur ingénieur en informatique",
    "Bienvenue dans mon portfolio!"
  ];

  const text = useTypeWritter(phrases);

  return (
    <main>
      <section className="flex flex-row gap-10 ml-32 mr-32 mt-5 mb-5">
        <div className="flex w-[50%] justify-center items-center">
        <h1 className="font-test font-extrabold text-3xl uppercase">
          {/*text-center bg-gradient-to-r from-pink-400 via-indigo-400 to-blue-400 bg-200% bg-clip-text text-transparent animate-gradient */}
          {text}
        </h1>
        </div>
        <div className="flex w-[35%]">
          <img src={webDevelopperImg} alt="webDevelopperImg" />
        </div>
      </section>
      <div>
        
      </div>
    </main>
  )
}