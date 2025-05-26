import useTypeWritter from "../hooks/useTypeWritter";
import webDevelopperImg from "../assets/webDevelopperImg.svg"
import BentoBox from "../Components/BentoBox.jsx"
import CarousselTech from "../Components/CarousselTech.jsx";
import { motion } from "motion/react"

export default function Portfolio( { user, projets } ) {

  const phrases = [
    `Bienvenue sur mon site, ${user.name}`,
    "Je suis un etudiant.",
    "Un futur ingénieur en informatique",
    "Bienvenue dans mon portfolio!"
  ];

  const textes = useTypeWritter(phrases);

  return (
    <main>
      <section className="flex flex-row gap-10 ml-[10%] mr-[10%] mt-8 mb-50">
        <div className="flex w-[50%] justify-center items-center">
        <h1 className="font-extrabold text-3xl uppercase">
          {textes}
        </h1>
        </div>
        <div className="flex w-[35%] flex-col items-center">
          <motion.img 
            src={webDevelopperImg} 
            alt="webDevelopperImg" 
            animate = {{scale: 1, transition: {duration: 1, type: "spring", stiffness: 80 }, translateX: 0}}
            initial ={{scale: 0, translateX: 800}}
          />
          <a href="https://storyset.com/online"><small>Online illustrations by Storyset</small></a>
        </div>
      </section>
      <section className="flex gap-10 ml-[10%] mr-[10%] mt-5 mb-35 justify-center items-center w-[85%]">
        <BentoBox />
      </section>
      <section className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold m-10">Technologie :</h2>
        <CarousselTech />
      </section>
      <section className="flex flex-row justify-center items-center m-10 flex-wrap gap-6">
        {projets.map((projet, index) => (
          <div key={index} className="p-4 border rounded bg-white shadow w-96 h-96">
            <h3 className="font-bold text-lg">{projet.projectName}</h3>
            <p className="text-sm">{projet.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {projet.projectFiles && projet.projectFiles.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt={`Fichier ${idx}`}
                  className="w-24 h-24 object-cover rounded border"
                />
              ))}
            </div>
            <ul className="m-2 text-sm">
              Technologie utilisé pour le projet :
              {projet.languages && projet.languages.map(( lang, index) => (
                <li key={index}>
                  {lang}
                </li>
              ))}
            </ul>
            <ul className="m-2 text-sm">
              Frameworks/Bibliothèque utilisé pour le projet :
              {projet.frameworks && projet.frameworks.map(( frame, index) => (
                <li key={index}>
                  {frame}
                </li>
              ))}
            </ul>
            <a className="text-blue-500 text-sm" href={projet.projectLink} target="_blank" rel="noopener noreferrer">
              Voir le projet
            </a>
          </div>
        ))}
      </section>

    </main>
  )
}