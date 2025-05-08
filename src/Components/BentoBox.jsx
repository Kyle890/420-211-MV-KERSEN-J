import NyleKersenJoseph from "../assets/NyleKersenJoseph.svg"
import useTypeWritter from "../hooks/useTypeWritter"
import Miles from "../assets/MilesIcon.jpg"
import Riley from "../assets/Riley.jpg"

export default function BentoBox(){

    const traitsDePersonalite = [
        "qui est curieux.",
        "qui est patient.",
        "qui est créatif.",
        "qui aime la musique.",
        "qui s'adapte facilement.",
        "qui travaille bien en groupe",
        "qui est très autonome.",
        "ayant une bonne capacité analytique."
    ]

    const text = useTypeWritter(traitsDePersonalite);

    return(
        <div className="grid grid-cols-4 grid-rows-4 gap-4 w-[80%] h-[600px]">
          <div className="col-span-2 row-span-2 col-start-1 row-start-1 bg-[#E2E2E2] flex justify-center items-center p-4">
            <img src={NyleKersenJoseph} alt="Mon nom" />
          </div>
          <div className="col-span-1 row-span-2 col-start-3 bg-blue-500"> 2 </div>
          <div className="col-span-1 row-span-1 col-start-4 flex justify-center items-center">
            <p className="font-bold">Je suis quelqu'un <em className="text-[#64040F]">{text}</em></p>
          </div>
          <div className="col-span-1 row-span-2 col-start-1 bg-blue-500"> 4 </div>
          <div className="col-span-1 row-span-2 col-start-2 bg-blue-500"> 5 </div>
          <div className="col-span-1 row-span-2 col-start-3 bg-blue-500"> 6 </div>
          <div className="col-span-1 row-span-2 col-start-4 row-start-2">
            <img className="rounded-2xl" src={Riley} alt="" />
          </div>
        </div>
    )
}