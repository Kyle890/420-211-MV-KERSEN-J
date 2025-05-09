import { useEffect, useState } from "react"
import PianoImg from "../assets/pianoImg.jpg"
import sportImg from "../assets/sportImg.jpg"
import SaxImg from "../assets/Saximg.jpg"
import Music from "../assets/MilesIcon.jpg"
import { motion } from "motion/react"

export default function Cards() {
  const interets = [
    { name: "Jouer du piano", img: PianoImg },
    { name: "", img: sportImg },
    { name: "Jouer du saxophone", img: SaxImg },
    { name: "Écouter de la musique", img: Music }
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % interets.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [interets.length])

  const goNext = () => {
    setIndex((prev) => (prev + 1) % interets.length)
  }

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + interets.length) % interets.length)
  }

  const x = -index * 250

  return (
    <div className="relative w-[250px] h-[300px] overflow-hidden rounded-lg shadow hover:shadow-2xl">
      <div className="text-center font-bold text-lg py-2 border-b">Intérêts</div>

      <motion.div
        className="flex"
        animate={{ x }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        {interets.map((card, i) => (
          <div
            key={i}
            className="min-w-[250px] h-[225px] relative"
          >
            <img src={card.img} alt={card.name} className="w-full h-full object-cover" />
            <p className="absolute bottom-2 left-3 text-white text-sm font-semibold drop-shadow">
              {card.name}
            </p>
          </div>
        ))}
      </motion.div>

      <button
        onClick={goPrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full"
      >
        ←
      </button>

      <button
        onClick={goNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full"
      >
        →
      </button>
    </div>
  )
}