import useTypeWritterInfinite from "../hooks/useTypeWritterInfinite.jsx";
import webDevelopperImg from "../assets/webDevelopperImg.svg"
import BentoBox from "../Components/BentoBox.jsx"
import CarousselTech from "../Components/CarousselTech.jsx";
import ListeProjets from "../Components/ListeProjets.jsx";
import ExperienceTimeline from "../Components/ExperienceTimeline.jsx";
import { motion } from "motion/react"

export default function Portfolio( { user, projets } ) {

  const phrases = [
    `Bienvenue sur mon site, ${user.name}`,
    "Je suis un etudiant.",
    "Un futur ingénieur en informatique",
    "Bienvenue dans mon portfolio!"
  ];

  const textes = useTypeWritterInfinite(phrases);

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
      <section>
        <ExperienceTimeline />
      </section>
      <section className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mt-10">Technologie apprise :</h2>
        <CarousselTech />
      </section>
      <section className="flex flex-row justify-center items-center m-10 mb-20 flex-wrap gap-6">
        <ListeProjets projets = {projets}/>
      </section>

    </main>
  )
}