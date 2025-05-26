import NyleKersenJoseph from "../assets/NyleKersenJoseph.svg";
import useTypeWritterInfinite from "../hooks/useTypeWritterInfinite";
import { motion } from "motion/react";
import Riley from "../assets/Riley.jpg";
import Huey from "../assets/Huey.jpg";
import clipboardCheck from "../assets/clipboardCheck.svg";
import clipboard from "../assets/clipboard.svg";
import { useState } from "react";

export default function BentoBox() {
  const traitsDePersonalite = [
    "qui est curieux.",
    "qui est patient.",
    "de créatif.",
    "qui aime la musique.",
    "qui s'adapte facilement.",
    "qui travaille bien en groupe",
    "qui est très autonome.",
    "ayant une bonne capacité analytique.",
  ];

  const text = useTypeWritterInfinite(traitsDePersonalite);

  const email = "6290712@cegepmv.ca";

  function copyText() {
    navigator.clipboard.writeText(email);
    setImgClipboard(clipboardCheck);
    setTimeout(() => setImgClipboard(clipboard), 1500);
  }

  const [imgClipboard, setImgClipboard] = useState(clipboard);

  const [boondocks, setBoondocks] = useState(Riley);
  const textForHuey = "text-[rgb(98,65,27)]";

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4 w-[80%] h-[500px]">
      {/* Photo */}
      <div className="col-span-2 row-span-2 col-start-1 row-start-1 bg-[#E2E2E2] flex justify-center items-center p-4">
        <img src={NyleKersenJoseph} alt="Mon nom" />
      </div>
      {/* Infos personnelles */}
      <div className="col-span-1 row-span-2 col-start-3 flex flex-col">
        <h3 className="font-semibold text-2xl mb-2">Nyle Kersen Joseph</h3>
        <p className="text-md mb-1">📍 Montréal</p>
        <p className="text-md mb-3">🎓 Cégep Marie-Victorin</p>
        <p className="font-semibold mb-1">📬 Contact :</p>
        <div className="flex items-center gap-3">
          <span className="truncate">{email}</span>
          <button onClick={copyText} aria-label="Copier email">
            <img
              src={imgClipboard}
              alt="Copy"
              className="w-6 h-6 rounded"
            />
          </button>
        </div>
      </div>
      <div className="col-span-1 row-span-1 col-start-4 flex justify-center items-center">
        <motion.p
          className="font-bold text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2 } }}
        >
          Je suis quelqu'un{" "}
          <em className={boondocks === Riley ? "text-[#64040F]" : textForHuey}>
            {text}
          </em>
        </motion.p>
      </div>
      <div className="col-span-1 row-span-2 col-start-1 p-4 rounded-lg text-black flex flex-col justify-center">
        <h4 className="font-semibold mb-2">Projet React & Tailwind</h4>
        <p>
          Ce portfolio est construit avec <strong>React</strong> et stylisé avec{" "}
          <strong>Tailwind CSS</strong>, offrant un design responsive et dynamique.
        </p>
      </div>
      <div className="col-span-1 row-span-2 col-start-2 p-4 rounded-lg text-black flex flex-col justify-center">
        <h4 className="font-semibold mb-2">Musique</h4>
        <p>
          J'aime beaucoup la musique, ce qui m'a inspiré à apprendre le sax et maintenant le piano.
        </p>
      </div>
      <div className="col-span-1 row-span-2 col-start-3 p-4 rounded-lg text-black flex flex-col justify-center">
        <h4 className="font-semibold mb-2">Curiosité</h4>
        <p>
          J'aime apprendre de nouvelles technologies et améliorer mes compétences
          en programmation et design.
        </p>
      </div>
      <div className="col-span-1 row-span-2 col-start-4 row-start-2 flex justify-center items-center">
        <motion.img
          className="rounded-2xl shadow-md shadow-[#64040F] hover:shadow-[rgb(98,65,27)] hover:shadow-2xl cursor-pointer max-h-[100%]"
          src={boondocks}
          alt="Avatar"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2 } }}
          onHoverStart={() => setBoondocks(Huey)}
          onHoverEnd={() => setBoondocks(Riley)}
        />
      </div>
    </div>
  );
}