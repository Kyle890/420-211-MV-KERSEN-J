import { motion } from "framer-motion";

const experiences = [
  {
    titre: "École Primaire Saint-Benoît",
    date: "2014 - 2018",
    sousTitre: "Formation pour enfant",
    description:
      "Apprentissage des bases fondamentales : lecture, écriture, mathématiques et travail en groupe. Développement de l'autonomie et des premières compétences sociales en milieu scolaire."
  },
  {
    titre: "École secondaire Mont-de-La Salle",
    date: "2018 - 2020",
    sousTitre: "Formation menant au DES",
    description:
      "Poursuite des apprentissages généraux en sciences, mathématiques et français. Participation à des activités parascolaires et développement des capacités de réflexion et d'organisation."
  },
  {
    titre: "École secondaire de la Rive",
    date: "2020 - 2024",
    sousTitre: "Obtention du Diplôme d'études secondaires",
    description:
      "Approfondissement des connaissances académiques avec une orientation progressive vers les technologies. Implication dans des projets informatiques et collaborations scolaires enrichissantes."
  },
  {
    titre: "Cégep Marie-Victorin",
    date: "2024 - En cours",
    sousTitre: "Techniques de l'informatique",
    description:
      "Apprentissage avancé en développement logiciel : programmation orientée objet, développement web (React, Tailwind), bases de données, structures de données et projets collaboratifs."
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="px-[10%] mt-20 mb-10">
      <h2 className="text-4xl font-bold mb-10 text-center">Parcours professionnel</h2>
      <div className="relative border-l-4 border-[#64040F] pl-6 space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-6 rounded-md shadow-md"
          >
            <h3 className="text-xl font-bold">{exp.titre}</h3>
            <p className="text-sm italic text-gray-600">
              {exp.sousTitre} | {exp.date}
            </p>
            <p className="mt-2 text-sm text-gray-700">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}