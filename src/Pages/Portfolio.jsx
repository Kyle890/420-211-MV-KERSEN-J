import useTypeWritter from "../hooks/useTypeWritter";
import webDevelopperImg from "../assets/webDevelopperImg.svg"
import BentoBox from "../Components/BentoBox.jsx"
import { motion } from "motion/react"

export default function Portfolio( { user } ) {

  const phrases = [
    `Bienvenue sur mon site, ${user.name}`,
    "Je suis encore un etudiant.",
    "Un futur ingénieur en informatique",
    "Bienvenue dans mon portfolio!"
  ];

  const textes = useTypeWritter(phrases);

  return (
    <main>
      <section className="flex flex-row gap-10 ml-[10%] mr-[10%] mt-8 mb-50">
        <div className="flex w-[50%] justify-center items-center">
        <h1 className="font-extrabold text-3xl uppercase">
          {/*text-center bg-gradient-to-r from-pink-400 via-indigo-400 to-blue-400 bg-200% bg-clip-text text-transparent animate-gradient*/}
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
      <section className="flex gap-10 ml-[10%] mr-[10%] mt-5 mb-50 justify-center items-center w-[85%]">
        <BentoBox />
      </section>
    </main>
  )
}