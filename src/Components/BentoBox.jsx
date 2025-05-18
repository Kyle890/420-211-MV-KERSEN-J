import NyleKersenJoseph from "../assets/NyleKersenJoseph.svg"
import useTypeWritter from "../hooks/useTypeWritter"
import { motion } from "motion/react"
import Riley from "../assets/Riley.jpg"
import clipboardCheck from "../assets/clipboardCheck.svg"
import clipboard from "../assets/clipboard.svg"
import { useState } from "react"

export default function BentoBox(){

    const traitsDePersonalite = [
        "qui est curieux.",
        "qui est patient.",
        "de créatif.",
        "qui aime la musique.",
        "qui s'adapte facilement.",
        "qui travaille bien en groupe",
        "qui est très autonome.",
        "ayant une bonne capacité analytique."
    ]

    const text = useTypeWritter(traitsDePersonalite);

    const email = "6290712@cegepmv.ca";

    function copyText(){
      navigator.clipboard.writeText(email);
      setImgClipboard(clipboardCheck);
    }

    const [imgClipboard, setImgClipboard] = useState(clipboard);

    return(
        <div className="grid grid-cols-4 grid-rows-4 gap-4 w-[80%] h-[600px]">
          {/* Créer une bento-box 4 colonnes et 4 rangée plus petites rangées  */}
          <div className="col-span-2 row-span-2 col-start-1 row-start-1 bg-[#E2E2E2] flex justify-center items-center p-4">
            <img src={NyleKersenJoseph} alt="Mon nom" />
          </div>
          <div className="col-span-1 row-span-2 col-start-3 flex flex-col"> 
            <h3>Nyle Kersen Joseph</h3>
            <p>Lieu d'habitation : <strong>Montréal</strong></p>
            <p>Étudiant au Cégep <strong>Marie-Victorin</strong></p>
            <p>Pour me contacter : {email} 
            <button onClick={copyText} className="p-2">
              <img className="w-8 h-6 p-1 bg-gray-400 rounded" src={imgClipboard} alt="Copy to clipboard" />
            </button>

            </p>
          </div>
          <div className="col-span-1 row-span-1 col-start-4 flex justify-center items-center">
          <motion.p className="font-bold" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 2 } }}>
            Je suis quelqu'un <em className="text-[#64040F]">{text}</em>
          </motion.p>

          </div>
          <div className="col-span-1 row-span-2 col-start-1 bg-blue-500"> 4 </div>
          <div className="col-span-1 row-span-2 col-start-2 bg-blue-500"> 5 </div>
          <div className="col-span-1 row-span-2 col-start-3 bg-blue-500"> 6 </div>
          <div className="col-span-1 row-span-2 col-start-4 row-start-2">
            <motion.img className="rounded-2xl shadow-md shadow-[#64040F] hover:shadow-[#64040F] hover:shadow-2xl" src={Riley} alt="Avater" initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition:{duration: 2}}}/>
          </div>
        </div>
    )
}