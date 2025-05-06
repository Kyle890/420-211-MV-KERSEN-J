import { useEffect, useState } from "react";
import avatarSombre from "../assets/AvatarSombre.jpg"
import useTypeWritter from "../hooks/useTypeWritter";

export default function Portfolio() {
  const phrases = [
    "Bonjour, je suis un etudiant.",
    "J'aime créer des animations.",
    "Bienvenue dans mon portfolio!",
    "Laissez-moi me présenter."
  ];

  const text = useTypeWritter(phrases);

  return (
    <section className="flex flex-col m-8">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col">
          <h1 className="text-white font-bold">{text}<span className="inline-block w-1 animate-pulse">|</span></h1>
          <h2 className="text-white font-bold">Nyle Kersen Joseph</h2>
        </div>
        <div className="flex">
          <img className="h-40 rounded-2xl" src={avatarSombre} alt="avatar photo" />
        </div>
      </div>
    </section>
  )
}