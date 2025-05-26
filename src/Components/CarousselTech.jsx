import "./CarousselTech.css"
import Motion from "../assets/motion.png"
import ReactIcon from "../assets/React.svg"
import Tailwind from "../assets/tailwind.svg"
import Js from "../assets/Js.svg"
import Html from "../assets/html.svg"
import Css from "../assets/css.svg"
import Java from "../assets/java.svg"
import SQL from "../assets/sql.svg"

export default function CarousselTech() {
    const tabItems = [
        { name: "React", img: ReactIcon, description: "Bibliothèque JavaScript pour créer des interfaces utilisateurs dynamiques."},
        { name: "Motion", img: Motion, description: "Framer Motion est une librairie pour ajouter des animations fluides dans React."},
        { name: "Tailwind", img: Tailwind, description: "Framework CSS utilitaire pour construire des interfaces modernes rapidement."},
        { name: "JavaScript", img: Js, description: "Langage de programmation pour rendre les sites web interactifs."},
        { name: "Html", img: Html, description: "Langage de balisage utilisé pour structurer les pages web."},
        { name: "Css", img: Css, description: "Langage de style utilisé pour la présentation et la mise en page des sites web."},
        { name: "Java", img: Java, description: "Langage orienté objet largement utilisé dans les applications d'entreprise et Android."},
        { name: "SQL", img: SQL, description: "Langage de requête utilisé pour gérer les bases de données relationnelles."}
    ];

    return (
        <div className="banner">
            <div className="slider" style={{ "--quantity": 8 }}>
                {tabItems.map((item, index) => (
                    <div
                        key={index}
                        className="item"
                        style={{ "--position": index + 1 }}
                    >
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p className="description">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}