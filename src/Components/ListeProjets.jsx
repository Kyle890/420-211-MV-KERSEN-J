

export default function ListeProjets({ projets }) {

  return (
    <div className="flex justify-center items-center flex-wrap gap-4">
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
            Technologie utilisées :
            {projet.languages && projet.languages.map((lang, idx) => (
              <li key={idx}>{lang}</li>
            ))}
          </ul>

          <ul className="m-2 text-sm">
            Frameworks/Bibliothèques :
            {projet.frameworks && projet.frameworks.map((frame, idx) => (
              <li key={idx}>{frame}</li>
            ))}
          </ul>

          <a
            className="text-blue-500 text-sm"
            href={projet.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le projet
          </a>
        </div>
      ))}
    </div>
  );
}