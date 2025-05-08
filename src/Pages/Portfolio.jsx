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
        <h1 className="font-Merienda font-extrabold text-3xl uppercase">
          {/*text-center bg-gradient-to-r from-pink-400 via-indigo-400 to-blue-400 bg-200% bg-clip-text text-transparent animate-gradient*/}
          {text}
        </h1>
        </div>
        <div className="flex w-[35%]">
          <img src={webDevelopperImg} alt="webDevelopperImg" />
        </div>
      </section>
      {/* Créer une bento-box 4 colonnes et 4 rangée plus petites rangées  */}
      <section className="flex gap-10 ml-32 mr-32 mt-5 mb-5 justify-center items-center w-[85%]">
        <div className="grid grid-cols-4 grid-rows-4 gap-4 bg-amber-500 w-[80%] h-[40%]">
          <div className="col-span-2 row-span-2 col-start-1 row-start-1 bg-blue-500"> 1 </div>
          <div className="col-span-1 row-span-2 col-start-3 bg-blue-500"> 2 </div>
          <div className="col-span-1 row-span-1 col start-4 bg-blue-500"> 3 </div>
          <div className="col-span-1 row-span-2 col-start-1 bg-blue-500"> 4 </div>
          <div className="col-span-1 row-span-2 col-start-2 bg-blue-500"> 5 </div>
          <div className="col-span-1 row-span-2 col-start-3 bg-blue-500"> 6 </div>
        </div>
      </section>
    </main>
  )
}